import React from "react";
import "./introduction.css";
import world from "../../assets/World.png";
import brain from "../../assets/Brain.png";
import hands from "../../assets/Hands.png";

const Introduction = () => {
  return (
    <section className="intro">
      <div className="intro-details">
        <h1 className="intro-title">Say Hello to Calm, Happy, and</h1>
        <h1 className="intro-title intro-subtitle">Creative Experiences</h1>

        <div className="single-detail">
          {console.log(world.split(".").pop())}
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

        <div className="single-detail single-detail-oposite">
          <div className="main-detail-text">
            <h2>And Your Brain</h2>
            <div>
              <p>
                While you play, connections on the brain's pathways are being
                made which lead to improved cognitive development, memory, and
                language.
              </p>
            </div>
          </div>
          <img src={brain} alt="" />
        </div>
        <div className="single-detail single-detail-mobile">
          <img src={brain} alt="" />
          <div className="main-detail-text">
            <h2>And Your Brain</h2>
            <div>
              <p>
                While you play, connections on the brain's pathways are being
                made which lead to improved cognitive development, memory, and
                language.
              </p>
            </div>
          </div>
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
