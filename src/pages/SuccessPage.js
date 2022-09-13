import React from "react";
import congrats from "../assets/Congrats.png";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section className="success-page">
      <div className="success-detail-container">
        <div className="success-details">
          <img src={congrats} alt="" />
          <h1>Your order is complete!</h1>
          <p>You will be receiving a confirmation email with order details.</p>
          <button className="success-btn" type="button">
            <Link to="/digital">Explore free digital downloads</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
