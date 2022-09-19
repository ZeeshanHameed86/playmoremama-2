import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="footer-bottom">
      <section className=" footer-bottom-container">
        <div className="footer-bottom-main">
          <div className="footer-bottom-left">
            <h3>
              <Link style={{ color: "inherit" }} to="/privacypolicy">
                Privacy Policy
              </Link>
            </h3>
          </div>
          <div className="footer-bottom-middle">
            <h3>Copyright &copy; 2022, play.more.mama</h3>
          </div>
          <div className="footer-bottom-mobile">
            <h3>
              <Link style={{ color: "inherit" }} to="/privacypolicy">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link style={{ color: "inherit" }} to="/terms">
                Terms and Conditions
              </Link>
            </h3>
          </div>
          <div className="footer-bottom-right">
            <h3>
              <Link style={{ color: "inherit" }} to="/terms">
                Terms and Conditions
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFooter;
