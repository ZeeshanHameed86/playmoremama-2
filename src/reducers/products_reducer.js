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

  if (action.type === "SINGLE_PRODUCT_START") {
    return { ...state, loading: true };
  }
  if (action.type === "SINGLE_PRODUCT") {
    return { ...state, single_product: action.payload };
  }
  if (action.type === "SINGLE_PRODUCT_END") {
    return { ...state, loading: false };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    if (action.payload === "all") {
      return { ...state, filtered_products: all_products };
    }
    let tempProducts = [...all_products];
    console.log(tempProducts);
    tempProducts = tempProducts.filter(
      (item) => item.fields.category === action.payload
    );
    return { ...state, filtered_products: tempProducts };
  }
};

export default products_reducer;
