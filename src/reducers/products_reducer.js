const products_reducer = (state, action) => {
  if (action.type === "PRODUCTS") {
    return { ...state, all_products: action.payload };
  }
};

export default products_reducer;
