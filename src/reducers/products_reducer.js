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
};

export default products_reducer;
