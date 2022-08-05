import React from "react";
import img1 from "../assets/Footer-Image-1.png";
import img2 from "../assets/Footer-Image-2.jpg";

const Footer = () => {
  return (
    <footer>
      <h1 className="footer-title">How Do You Sensory?</h1>
      <h1 className="footer-title">Tag Us @play.more.mama</h1>
      <div className="insta-posts">
        <div className="footer-img-left">
          <img src={img1} alt="" />
        </div>
        <div className="footer-img-middle"></div>
        <div className="footer-img-right">
          <img src={img2} alt="" />
        </div>
      </div>
      <h1 className="footer-brand">play.more.mama</h1>
      <div className="footer-bottom">
        <section className=" footer-bottom-container">
          <div className="footer-bottom-main section-center">
            <div className="footer-bottom-left">Privacy Policy</div>
            <div className="footer-bottom-middle">
              Copyright &copy; 2022, play.more.mama
            </div>
            <div className="footer-bottom-right">Terms and Conditions</div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
