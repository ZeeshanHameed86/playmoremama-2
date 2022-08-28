import React from "react";
import { Navbar, ProductCard } from "../components";
import { filterCategories } from "../helpers";
import { useProductsContext } from "../context/products_context";
import Carousel from "../components/Carousel";

const ProductsPage = () => {
  const { loading, all_products, filterProducts, filtered_products } =
    useProductsContext();

  if (loading) {
    return <div className="product-section-layout">Loading...</div>;
  }

  return (
    <section>
      <Navbar />
      <Carousel />
      <div className="product-section-layout section-center">
        <div className="categories">
          {filterCategories(all_products).map((item, index) => {
            console.log("hello", item);
            return (
              <div key={index}>
                <button
                  className="product-category-btn"
                  onClick={() => filterProducts(item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
          <hr />
        </div>
        <div className="products-layout">
          {filtered_products.map((item, index) => {
            return <ProductCard item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
