import React from "react";
import "./success-failed-page.css";
import failed from "../../assets/Failed.png";
import { Link } from "react-router-dom";

const FailedPage = () => {
  return (
    <section className="success-page">
      <div className="success-detail-container">
        <div className="success-details">
          <img src={failed} alt="" style={{ marginLeft: "0" }} />
          <h1>We're sorry!</h1>
          <p>Your order did not process. Please try again.</p>
          <button className="success-btn" type="button">
            <Link to="/cart">Return to order page</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FailedPage;
