import React from "react";
import sideline1 from "../assets/Sideline-1-2.png";
import sideline2 from "../assets/Sideline-2-2.png";
import world from "../assets/World.png";
import brain from "../assets/Brain.png";
import hands from "../assets/Hands.png";

const Introduction = () => {
  return (
    <section className="intro">
      <img src={sideline1} alt="" className="intro-sideline-img-1" />
      <img src={sideline2} alt="" className="intro-sideline-img-2" />
      <div className="intro-details">
        <h1 className="intro-title">Say Hello to Calm, Happy, and</h1>
        <h1 className="intro-title intro-subtitle">Creative Experiences</h1>

        <div className="single-detail">
          <img src={world} alt="" className="img-1" />
          <div className="main-detail-text">
            <h2>Just For You</h2>
            <div>
              <p>
                Sensory rich play is inclusive for everyone in any environment.
                Indoors - check. Outdoors - check. On the moon? Probably. <br />{" "}
                (Just need the right training and equipment!).
              </p>
            </div>
          </div>
        </div>
        <div className="single-detail">
          <div className="main-detail-text">
            <h2>And Your Brain</h2>
            <div>
              <p>
                While you play, connections on the brain's pathways are being
                made which lead to more complex learning tasks. Memory,
                language, and cognitive development improve. High-fives for
                learning!
              </p>
            </div>
          </div>
          <img src={brain} alt="" />
        </div>
        <div className="single-detail">
          <img src={hands} alt="" />
          <div className="main-detail-text">
            <h2>And Your Body</h2>
            <div>
              <p>
                A body is made up of lots of muscles that can become tense or
                agitated. Sensory play helps calm the body while developing fine
                and gross motor skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
