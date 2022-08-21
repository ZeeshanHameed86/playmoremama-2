import React from "react";
import NoImage from "../assets/No-Image.jpg";

const ProductCard = ({ item, index }) => {
  return (
    <div className="product-card" key={index}>
      <div className="product-img">
        <img src={item.images ? item.images[0].url : NoImage} alt="" />
      </div>
      <div className="product-info">
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
