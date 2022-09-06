import React from "react";
import NoImage from "../assets/No-Image.jpg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

const ProductCard = ({ item, index }) => {
  const { addCartItems } = useProductsContext();

  return (
    <div className="product-card" key={index}>
      <div className="product-img">
        <Link to={`/products/${item.id}`}>
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
              disabled={!item.fields.images}
              className="product-btn"
              style={item.fields.images ? {} : { background: "grey" }}
            >
              {item.fields.images ? "View Details" : "Coming Soon"}
            </button>
          </Link>

          <button
            disabled={!item.fields.images}
            style={item.fields.images ? {} : { color: "grey" }}
            className="add-to-cart-btn"
            onClick={() => addCartItems(item.id, item.fields, 1)}
          >
            {item.fields.images && "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
