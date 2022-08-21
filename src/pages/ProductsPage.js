import React from "react";
import { Navbar } from "../components";
import { data } from "../data";
import { ProductCard } from "../components";
import { filterCategories } from "../helpers";
import { useProductsContext } from "../context/products_context";
import Carousel from "../components/Carousel";

const ProductsPage = () => {
  const { all_products } = useProductsContext();

  return (
    <section>
      <Navbar />
      <Carousel />
      <div className="product-section-layout section-center">
        <div className="categories">
          {filterCategories(all_products).map((item, index) => {
            return (
              <div key={index}>
                <button className="product-category-btn">{item}</button>
              </div>
            );
          })}
          <hr />
        </div>
        <div className="products-layout">
          {all_products.map((item, index) => {
            return <ProductCard item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
