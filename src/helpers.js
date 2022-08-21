export const filterCategories = (all_products) => {
  let unique = all_products.map((item) => item.category);
  return ["all", ...new Set(unique)];
};
