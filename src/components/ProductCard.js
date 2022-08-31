import React from "react";
import NoImage from "../assets/No-Image.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  return (
    <Link
      style={item.fields.images ? {} : { pointerEvents: "none" }}
      to={`/products/${item.id}`}
      className="product-card-link"
    >
      <div className="product-card" key={index}>
        <div className="product-img">
          <img
            src={item.fields.images ? item.fields.images[0].url : NoImage}
            alt=""
          />
        </div>
        <div className="product-info">
          <h1>{item.fields.name}</h1>
          <p>${item.fields.price}.00</p>
          <Link to={`/products/${item.id}`}>
            <button
              disabled={!item.fields.images}
              className="product-btn"
              style={item.fields.images ? {} : { background: "grey" }}
            >
              {item.fields.images ? "View Details" : "Coming Soon"}
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
