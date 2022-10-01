import React, { useReducer, useEffect, useContext } from "react";
import reducer from "../reducers/products_reducer";

const ProductsContext = React.createContext();

var Airtable = require("airtable");
var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appgDd99dck3S3nQt");

var reviewBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appXFuhNR8CtBg8Gu");

const table = base("products");
const reviewTable = reviewBase("reviews");

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  all_products: [],
  filtered_products: [],
  single_product: {},
  loading: true,
  also_like_products: [],
  cart_items: getLocalStorage(),
  total_amount: 0,
  total_quantity: 0,
  single_product_success: true,
  reviews: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getRecords = async () => {
    dispatch({ type: "PRODUCTS_START" });
    const temp = [];
    await table.select({ view: "Grid view" }).eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          temp.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          dispatch({ type: "PRODUCTS_END" });
          return;
        }
        dispatch({ type: "PRODUCTS", payload: temp });
      }
    );
    dispatch({ type: "PRODUCTS_END" });
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_PRODUCT_START" });
    await table.find(id, function (err, record) {
      if (err) {
        console.error(err);
        dispatch({ type: "SINGLE_PRODUCT_END" });
        dispatch({ type: "SINGLE_PRODUCT_FAILED" });
        return;
      }
      dispatch({ type: "SINGLE_PRODUCT_SUCCESS" });
      dispatch({ type: "SINGLE_PRODUCT", payload: record.fields });
    });
    dispatch({ type: "SINGLE_PRODUCT_END" });
  };

  const getReviews = async () => {
    dispatch({ type: "REVIEWS_START" });
    const temp = [];
    await reviewTable.select({ view: "Grid view" }).eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          temp.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          dispatch({ type: "REVIEWS_END" });
          return;
        }
        dispatch({ type: "REVIEWS", payload: temp });
      }
    );
    dispatch({ type: "REVIEWS_END" });
  };

  const addReview = async (product_id, name, rating, review, feedback) => {
    await reviewTable.create(
      [
        {
          fields: {
            product_id,
            name,
            rating,
            review,
            feedback,
          },
        },
      ],
      (err, records) => {
        if (err) {
          console.log(err);
          return "error";
        }
        return "success";
      }
    );
  };

  const filterProducts = (category) => {
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: category,
    });
  };

  const addCartItems = (id, cartItems, quantity, isCart = false) => {
    dispatch({
      type: "CART_ITEMS",
      payload: { id, cartItems, quantity, isCart },
    });
  };

  const addCartQuantity = (item, direction) => {
    dispatch({
      type: "CART_QUANTITY",
      payload: { item, direction },
    });
  };

  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // const toggleSidebar = () => {
  //   dispatch({ type: "TOGGLE_BAR_MENU" });
  // };

  // const closeSidebar = () => {
  //   dispatch({ type: "CLOSE_SIDEBAR" });
  // };

  // const toggleSortMenu = (index) => {
  //   dispatch({ type: "TOGGLE_SORT_MENU", payload: index });
  // };

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart_items));
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [state.cart_items]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        filterProducts,
        getSingleProduct,
        addCartItems,
        removeCartItem,
        addCartQuantity,
        clearCart,
        getRecords,
        addReview,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
