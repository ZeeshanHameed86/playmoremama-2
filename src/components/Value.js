import React from "react";
import sideline1 from "../assets/Sideline-1-2.png";
import sideline2 from "../assets/Sideline-2-2.png";

const Value = () => {
  return (
    <section className="value">
      <img src={sideline1} alt="" className="intro-sideline-img-1" />
      <img src={sideline2} alt="" className="intro-sideline-img-2" />
      <div className="value-details section-center">
        <div className="value-1">
          <h1>
            At play.more.mama we do it right, so you can play more and worry
            less.
          </h1>
        </div>
        <div className="value-2">
          <h1>
            Taste-safe handcrafted playdough made with organic coconut oil and
            oven-baked flour.
          </h1>
        </div>
        <div className="value-3">
          <h1>
            Carefully curated products created for meaningful hands-on-learning.
          </h1>
        </div>
        <div className="value-4">
          <h1>And travel-size, so fun is never left behind.</h1>
        </div>
      </div>
    </section>
  );
};

export default Value;
