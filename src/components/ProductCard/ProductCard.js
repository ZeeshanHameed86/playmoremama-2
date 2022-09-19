import React from "react";
import "./product-card.css";
import NoImage from "../../assets/No-Image.jpg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";

const ProductCard = ({ item, index }) => {
  const { addCartItems } = useProductsContext();

  return (
    <div
      className="product-card"
      key={index}
      style={item.fields.images ? {} : { pointerEvents: "none" }}
    >
      <div className="product-img">
        <Link
          to={
            item.fields.images && item.fields.stock !== 0
              ? `/products/${item.id}`
              : {}
          }
        >
          <img
            src={item.fields.images ? item.fields.images[0].url : NoImage}
            alt=""
          />
        </Link>
      </div>
      <div className="product-info">
        <h1>{item.fields.name}</h1>
        <p>${item.fields.price}.00</p>

        <div className="product-card-btn-container">
          <Link to={`/products/${item.id}`}>
            <button
              disabled={
                item.fields.images && item.fields.stock !== 0 ? false : true
              }
              className="product-btn"
              style={
                item.fields.images && item.fields.stock !== 0
                  ? {}
                  : { background: "grey" }
              }
            >
              {item.fields.images && item.fields.stock !== 0
                ? "View Details"
                : "Out Of Stock"}
            </button>
          </Link>

          <button
            disabled={!item.fields.images}
            style={item.fields.images ? {} : { color: "grey" }}
            className="add-to-cart-btn"
            onClick={() => addCartItems(item.id, item.fields, 1)}
          >
            {item.fields.images && item.fields.stock !== 0 && "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
