import React from "react";
import sideline1 from "../assets/Sideline-1.png";
import sideline2 from "../assets/Sideline-2.png";
import headerimg from "../assets/Header-image.jpg";

const Header = () => {
  return (
    <header>
      <img src={sideline1} alt="" className="header-sideline-img-1" />
      <img src={sideline2} alt="" className="header-sideline-img-2" />
      <div className="header-container">
        <div className="image-container">
          <img src={headerimg} alt="" className="header-img" />
        </div>
        <div className="header-info">
          <h1>Welcome</h1>
          <h2>Sensory Play for All Ages</h2>
          <button type="button" className="header-btn">
            Shop Now!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
