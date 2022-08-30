export const filterCategories = (all_products) => {
  let unique = all_products.map((item) => item.fields.category);
  return ["all", ...new Set(unique)];
};

export const getMultipleRandom = (arr, num) => {
  const filter = arr.filter((item) => {
    if (item.fields.images != undefined) {
      return item.fields;
    }
  });

  const shuffled = [...filter].sort(() => 0.5 - Math.random());

  //console.log(shuffled);

  return shuffled.slice(0, num);
};
