import React, { useState, useEffect } from "react";
import "./single-product-page.css";
import { MainFooter, Navbar } from "../../components";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import NoImage from "../../assets/No-Image.jpg";
import { Link, useNavigate } from "react-router-dom";
import buttonbtnimg from "../../assets/Header-btn-background.webp";
import { motion, AnimatePresence } from "framer-motion";
import { AlsoLike } from "../../components";

const SingleProductsPage = () => {
  const navigate = useNavigate();
  const [descriptionToggle, setDescriptionToggle] = useState(true);
  const [quantity, setQuatity] = useState(1);
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(1);
  const { loading, getSingleProduct, single_product, addCartItems } =
    useProductsContext();
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (single_product.stock === 0) {
      navigate(-1);
    }
    // eslint-disable-next-line
  }, [single_product.stock]);

  useEffect(() => {
    getSingleProduct(id);
    // eslint-disable-next-line
  }, [id]);

  const description = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuatity(1);
      return;
    }
    setQuatity((prev) => prev - 1);
  };

  const incrementQuantity = () => {
    setQuatity((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 40) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  if (loading) {
    return <section className="single-product-layout">Loading...</section>;
  }

  return (
    <section>
      <div
        className={
          fixed ? "single-product-bar single-fixed" : "single-product-bar"
        }
      >
        <p>Mama founded + 100% natural handcrafted playdough</p>
      </div>
      <Navbar offset={40} />
      <div className="single-product-back-btn">
        <Link to="/products">Back To Products</Link>
      </div>
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
          <h3>${single_product && single_product.price}.00</h3>
          <div className="quantity-container">
            {/* <AiOutlineLeft
              className="quantity-btn"
              onClick={() => decrementQuantity()}
            /> */}
            <p className="quantity-btn" onClick={() => decrementQuantity()}>
              -
            </p>

            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuatity(e.target.value);
              }}
            />
            <p className="quantity-btn" onClick={() => incrementQuantity()}>
              +
            </p>
            {/* <AiOutlineRight
              className="quantity-btn"
              onClick={() => incrementQuantity()}
            /> */}
          </div>
          <div className="cart-btn-background">
            <button
              type="button"
              className="cart-btn"
              onClick={() => addCartItems(id, single_product, quantity)}
            >
              <img src={buttonbtnimg} alt="" />
              <h6>Add To Cart</h6>
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
                {single_product.description}
                <br />
              </motion.p>
            )}
          </AnimatePresence>
          <hr style={{ marginBottom: "3rem" }} />
        </div>
      </div>
      <div className="also-like-container">
        <h1>You May Also Like</h1>
        <AlsoLike />
      </div>
      <MainFooter />
    </section>
  );
};

export default SingleProductsPage;
