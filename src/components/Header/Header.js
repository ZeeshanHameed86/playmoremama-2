import React from "react";
import "./header.css";
import headerImg1 from "../../assets/Header-image-1.webp";
import headerImg2 from "../../assets/Header-image-2.webp";
import rainbowimg from "../../assets/Rainbow.webp";
import buttonbtnimg from "../../assets/Header-btn-background.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="image-container">
          <img src={headerImg1} alt="" className="header-img header-desktop" />
          <img src={headerImg2} alt="" className="header-img header-mobile" />
        </div>
        <h3>Monterey Bay, CA</h3>
        <div className="rainbow-img-container">
          <img src={rainbowimg} alt="" className="rainbow-img" />
        </div>
        <div className="header-info">
          <h1 className="heading-1">Hi.</h1>
          <h1 className="heading-2">Hi.</h1>
          <h2>
            Sensory Play{" "}
            <span>
              <br />{" "}
            </span>
            for All Ages
          </h2>
          <div className="header-btn-background">
            <button type="button" className="header-btn">
              <img src={buttonbtnimg} alt="" />
              <Link to="/products" style={{ color: "white" }}>
                Shop Now!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
