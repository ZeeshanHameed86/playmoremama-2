import React from "react";
import "./header.css";
import sideline1 from "../../assets/sideline-left.png";
import sideline2 from "../../assets/sideline-right.png";
import headerImg1 from "../../assets/Header-image-1.jpg";
import headerImg2 from "../../assets/Header-image-2.jpeg";
import rainbowimg from "../../assets/Rainbow.png";
import buttonbtnimg from "../../assets/Header-btn-background.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <img src={sideline1} alt="" className="header-sideline-img-1" />
      <img src={sideline2} alt="" className="header-sideline-img-2" /> */}
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
