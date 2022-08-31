import React, { useState, useEffect } from "react";
import { Navbar, ProductCard } from "../components";
import { filterCategories } from "../helpers";
import { useProductsContext } from "../context/products_context";
import Carousel from "../components/Carousel";

const ProductsPage = () => {
  const { loading, all_products, filterProducts, filtered_products } =
    useProductsContext();
  const [fixed, setFixed] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixed(window.scrollY);
    });
  }, []);

  if (loading) {
    return <div className="product-section-layout">Loading...</div>;
  }

  return (
    <section>
      <div
        className={
          fixed >= 40 ? "single-product-bar fixed" : "single-product-bar"
        }
      >
        <p>Mama founded + 100% natural handmade playdough</p>
      </div>
      <Navbar offset={40} />
      <Carousel />
      <div className="products-page">
        <div className="product-section-layout section-center">
          <div className="categories">
            {["ALL", "Sensory Jars", "Sensory Shakers", "Complements"].map(
              (item, index) => {
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
              }
            )}
            <hr />
          </div>
          <div className="products-layout">
            {filtered_products.map((item, index) => {
              return <ProductCard key={index} item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
