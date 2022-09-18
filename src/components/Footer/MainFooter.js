import React from "react";
import "./footer.css";

const MainFooter = () => {
  return (
    <div className="footer-bottom">
      <section className=" footer-bottom-container">
        <div className="footer-bottom-main">
          <div className="footer-bottom-left">
            <h3>Privacy Policy</h3>
          </div>
          <div className="footer-bottom-middle">
            <h3>Copyright &copy; 2022, play.more.mama</h3>
          </div>
          <div className="footer-bottom-mobile">
            <h3>Privacy Policy & Terms and Conditions</h3>
          </div>
          <div className="footer-bottom-right">
            <h3>Terms and Conditions</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFooter;
