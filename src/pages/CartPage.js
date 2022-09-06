import React from "react";
import { useProductsContext } from "../context/products_context";
import { Navbar } from "../components";
import { ImCross } from "react-icons/im";
import {
  AiFillDollarCircle,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { useState } from "react";

const CartPage = () => {
  const { cart_items, removeCartItem, total_amount } = useProductsContext();
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  return (
    <section className="cart-page">
      <Navbar offset={0} />
      <div className="cart-container">
        <div className="cart-item-container">
          {cart_items.length !== 0 && (
            <div className="cart-top-bar">
              <AiFillDollarCircle />
              <p>Free Shipping for Orders over $50</p>
            </div>
          )}
          {cart_items.length !== 0 ? (
            cart_items.map((item) => {
              return (
                <div key={item.id} className="single-cart-item">
                  <div className="cart-left">
                    <img src={item.image} alt="" />
                    <div className="cart-left-details">
                      <h1>{item.name}</h1>
                      <p>Subtotal: ${item.price * item.quantity}.00</p>
                    </div>
                  </div>
                  <div className="cart-right">
                    <ImCross
                      className="cart-remove-btn"
                      onClick={() => removeCartItem(item.id)}
                    />
                    <p>{item.quantity}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Cart is empty...</h1>
          )}
        </div>
        {cart_items.length !== 0 && (
          <div className="order-summary">
            <h1>Order Summary</h1>
            <div
              className="cart-coupon"
              onClick={() => setIsCouponOpen(!isCouponOpen)}
            >
              <h3>Coupon</h3>
              {isCouponOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            {isCouponOpen && (
              <div className="cart-coupon-input-container">
                <input type="text" placeholder="e.g. FREESHIP50" />
              </div>
            )}
            <div className="order-summary-details">
              <div className="order-summary-single-detail">
                <p>Subtotal</p>
                <p>${total_amount}.00</p>
              </div>
              <div className="order-summary-single-detail">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="order-summary-single-detail">
                <p>Total</p>
                <p>${total_amount}.00</p>
              </div>
            </div>
            <button type="button">Checkout</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
