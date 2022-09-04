import React from "react";
import sideline1 from "../assets/Sideline-1-2.png";
import sideline2 from "../assets/Sideline-2-2.png";
import jar1 from "../assets/Jar1.png";
import jar2 from "../assets/Jar2.png";
import jar3 from "../assets/Jar3.png";
import jar4 from "../assets/Jar4.png";
import jar5 from "../assets/Jar5.png";
import bottle1 from "../assets/bottle1.png";
import bottle2 from "../assets/bottle2.png";
import bottle3 from "../assets/bottle3.png";
import dice from "../assets/Dice.png";

const Value = () => {
  return (
    <section className="value">
      <img src={sideline1} alt="" className="intro-sideline-img-1" />
      <img src={sideline2} alt="" className="intro-sideline-img-2" />
      <div className="value-details section-center">
        <div className="value-1">
          <img src={jar1} alt="" className="img-1" />
          <img src={bottle1} alt="" className="img-2" />
          <img src={jar2} alt="" className="img-3" />
          <h1 className="bold">
            At play.more.mama <br /> we do it right, so you can play more <br />{" "}
            and worry less.
          </h1>
        </div>
        <div className="value-2">
          <img src={jar3} alt="" className="img-4" />
          <img src={jar4} alt="" className="img-5" />
          <h1>
            Taste-safe handcrafted playdough made with organic coconut oil and
            oven-baked flour.
          </h1>
        </div>
        <div className="value-3">
          <img src={bottle2} alt="" className="img-6" />
          <img src={bottle3} alt="" className="img-7" />
          <h1>
            Carefully curated products created for meaningful hands-on-learning.
          </h1>
        </div>
        <div className="value-4">
          <img src={jar5} alt="" className="img-8" />
          <img src={dice} alt="" className="img-9" />
          <h1>
            And travel-size, <br /> so fun is never left behind.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Value;
