import React from "react";
import "./footer.css";
import img1 from "../../assets/Footer-Image-1.jpeg";
import img2 from "../../assets/Footer-Image-2.jpeg";
import hearts from "../../assets/Hearts.png";
import flowers from "../../assets/Flowers.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title-container">
        <div className="footer-title-img-container">
          <img src={hearts} alt="" />
        </div>
        <div className="footer-title-middle">
          <h1 className="footer-title">How Do You Sensory?</h1>
          <h1 className="footer-title">
            Tag Us{" "}
            <span>
              <a href="https://www.instagram.com/play.more.mama/">
                @play.more.mama
              </a>
            </span>
          </h1>
        </div>
        <div></div>
      </div>
      <div className="insta-posts">
        <div className="footer-img-left">
          <img src={img1} alt="" />
        </div>
        <div className="footer-img-middle"></div>
        <div className="footer-img-right">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="footer-brand-container">
        <div></div>
        <h1 className="footer-brand">play.more.mama</h1>
        <div className="footer-brand-img-container">
          <img src={flowers} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
