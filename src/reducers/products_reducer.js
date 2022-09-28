const products_reducer = (state, action) => {
  if (action.type === "PRODUCTS_START") {
    return { ...state, loading: true };
  }
  if (action.type === "PRODUCTS") {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
    };
  }
  if (action.type === "PRODUCTS_END") {
    return { ...state, loading: false };
  }
  if (action.type === "REVIEWS_START") {
    return { ...state, loading: true };
  }
  if (action.type === "REVIEWS") {
    return {
      ...state,
      reviews: action.payload,
    };
  }
  if (action.type === "REVIEWS_END") {
    return { ...state, loading: false };
  }

  if (action.type === "SINGLE_PRODUCT_START") {
    return { ...state, loading: true };
  }
  if (action.type === "SINGLE_PRODUCT") {
    const { all_products } = state;
    const filter = all_products.filter((item) => {
      if (item.fields.images !== undefined) {
        return item.fields;
      }
      return null;
    });
    // let shuffled = [...filter].sort(() => 0.5 - Math.random());
    // shuffled = shuffled.slice(0, 4);
    return {
      ...state,
      single_product: action.payload,
      also_like_products: filter,
    };
  }
  if (action.type === "SINGLE_PRODUCT_END") {
    return { ...state, loading: false };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    if (action.payload === "ALL") {
      return { ...state, filtered_products: all_products };
    }
    let tempProducts = [...all_products];
    tempProducts = tempProducts.filter(
      (item) => item.fields.category === action.payload
    );
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === "CART_ITEMS") {
    const {
      id,
      cartItems: { name, price, images },
      quantity,
    } = action.payload;
    const allItems = state.cart_items.filter((item) => item.id !== id);
    const tempItem = state.cart_items.find((item) => item.id === id);
    if (tempItem) {
      const newQuantity = (tempItem.quantity += quantity);
      tempItem.quantity = newQuantity;

      return { ...state, cart_items: [...allItems, tempItem] };
    } else {
      const newItem = {
        id,
        name,
        price,
        image: images && images[0].url,
        quantity,
      };
      return { ...state, cart_items: [...state.cart_items, newItem] };
    }
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const tempItems = state.cart_items.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cart_items: tempItems };
  }

  if (action.type === "COUNT_CART_TOTALS") {
    const total_amount = state.cart_items.reduce((total, cartItem) => {
      const { price, quantity } = cartItem;
      total += price * quantity;

      return total;
    }, 0);
    const total_quantity = state.cart_items.reduce((total, cartItem) => {
      const { quantity } = cartItem;
      total += parseInt(quantity);

      return total;
    }, 0);

    return { ...state, total_amount, total_quantity };
  }
  if (action.type === "CART_QUANTITY") {
    const { item, direction } = action.payload;

    const allItems = state.cart_items.filter((i) => i.id !== item.id);
    const tempItem = item;
    if (direction === "next") {
      tempItem.quantity += 1;
    } else {
      if (tempItem.quantity === 1) {
        tempItem.quantity = 1;
      } else {
        tempItem.quantity -= 1;
      }
    }
    return { ...state, cart_items: [...allItems, tempItem] };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart_items: [] };
  }
  if (action.type === "SINGLE_PRODUCT_FAILED") {
    return { ...state, single_product_success: false };
  }
  if (action.type === "SINGLE_PRODUCT_SUCCESS") {
    return { ...state, single_product_success: true };
  }
  return { ...state };
};

export default products_reducer;
