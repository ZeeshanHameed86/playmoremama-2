import React from "react";
import "./cart-page.css";
import { useProductsContext } from "../../context/products_context";
import { MainFooter, Navbar } from "../../components";
import { ImCross } from "react-icons/im";
import {
  AiFillDollarCircle,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const CartPage = () => {
  const { cart_items, removeCartItem, total_amount, addCartQuantity } =
    useProductsContext();
  // const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(5.99);
  const [checkoutStatus, setCheckoutStatus] = useState(false);

  let sortedCartItems =
    cart_items && cart_items.sort((a, b) => a.name.localeCompare(b.name));

  const processPayment = async () => {
    setCheckoutStatus(true);
    const url = "/.netlify/functions/charge-card";

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const { data } = await axios.post(url, {
      cart: sortedCartItems,
      total: total_amount,
    });
    setCheckoutStatus(false);
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      <section className="cart-page">
        <Navbar offset={0} />
        <h1 className="cart-title">Thank You</h1>
        <div className="cart-container">
          <div className="cart-item-container">
            {cart_items.length !== 0 && (
              <div className="cart-top-bar">
                <AiFillDollarCircle />
                <p>Free Shipping for Orders over $50</p>
              </div>
            )}
            {sortedCartItems.length !== 0 ? (
              sortedCartItems.map((item, index) => {
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
                      <div className="cart-quantity">
                        {/* <AiOutlineLeft
                          onClick={() => addCartQuantity(item, "prev")}
                        /> */}
                        <p
                          className="cart-quantity-btn"
                          onClick={() => addCartQuantity(item, "prev")}
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        {/* <AiOutlineRight
                          onClick={() => addCartQuantity(item, "next")}
                        /> */}
                        <p
                          className="cart-quantity-btn"
                          onClick={() => addCartQuantity(item, "next")}
                        >
                          +
                        </p>
                      </div>
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
              {/* <div
                className="cart-coupon"
                onClick={() => setIsCouponOpen(!isCouponOpen)}
              >
                <h3>Coupon</h3>
                {isCouponOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </div> */}
              {/* {isCouponOpen && (
                <div className="cart-coupon-input-container">
                  <input type="text" placeholder="e.g. FREESHIP50" />
                </div>
              )} */}
              <div className="order-summary-details">
                <div className="order-summary-single-detail">
                  <p>Subtotal</p>
                  <p>${total_amount}.00</p>
                </div>
                <div className="order-summary-single-detail">
                  <p>Shipping</p>
                  <p>
                    {total_amount >= 50
                      ? `FREE over $50`
                      : `$${shippingPrice} below $50`}
                  </p>
                </div>
                <div className="order-summary-single-detail">
                  <p>Total</p>
                  <p>
                    $
                    {total_amount >= 50
                      ? total_amount.toFixed(2)
                      : (total_amount + shippingPrice).toFixed(2)}
                  </p>
                </div>
              </div>
              <button type="button" onClick={() => processPayment()}>
                {checkoutStatus ? "Redirecting..." : "Checkout"}
              </button>
            </div>
          )}
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default CartPage;
