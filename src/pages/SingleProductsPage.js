import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import NoImage from "../assets/No-Image.jpg";
import { Link } from "react-router-dom";
import buttonbtnimg from "../assets/Header-btn-background.png";
import { motion, AnimatePresence } from "framer-motion";

const SingleProductsPage = () => {
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(1);
  const { loading, getSingleProduct, single_product } = useProductsContext();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const description = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  if (loading) {
    return <section className="single-product-layout">Loading...</section>;
  }

  return (
    <section>
      <div className="single-product-bar">
        <p>Mama founded + 100% natural handmade playdough</p>
      </div>
      <Navbar />
      <div className="single-product-layout">
        <div className="product-image-gallery-container">
          <div className="image-gallery">
            <img
              className="main-gallery-image"
              src={
                single_product.images
                  ? single_product.images[imageIndex].url
                  : NoImage
              }
              alt=""
            />
            <div className="sub-images">
              {single_product.images ? (
                single_product.images.map((image, index) => {
                  if (index > 0) {
                    return (
                      <img
                        key={index}
                        style={{
                          border: index === imageIndex && "1px solid grey",
                        }}
                        src={image.url}
                        alt=""
                        onClick={() => {
                          setImageIndex(index);
                        }}
                      />
                    );
                  }
                  return "";
                })
              ) : (
                <img src={NoImage} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="single-product-details">
          <h1>{single_product && single_product.name}</h1>
          <h3>${single_product && single_product.price}</h3>
          <div className="cart-btn-background">
            <button type="button" className="cart-btn">
              <img src={buttonbtnimg} alt="" />
              <Link to="/cart" style={{ color: "white" }}>
                <h6>Add To Cart</h6>
              </Link>
            </button>
          </div>
          <hr />
          <div
            className="description-toggle-btn-container"
            onClick={() => setDescriptionToggle(!descriptionToggle)}
          >
            <p>Description</p>
            <p>{descriptionToggle ? "-" : "+"}</p>
          </div>
          <AnimatePresence>
            {descriptionToggle && (
              <motion.p
                variants={description}
                initial="hidden"
                animate="visible"
                exit={{ height: 0, opacity: 0 }}
              >
                {single_product.description} <br />
              </motion.p>
            )}
          </AnimatePresence>
          <hr style={{ marginBottom: "3rem" }} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductsPage;
