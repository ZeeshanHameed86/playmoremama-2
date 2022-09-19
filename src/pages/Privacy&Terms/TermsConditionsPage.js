import React from "react";
import "./privacy-terms.css";
import { MainFooter, Navbar } from "../../components";
import { terms } from "../../data";

const TermsConditionsPage = () => {
  return (
    <>
      <Navbar offset={0} />
      <section className="privacy-page">
        <h1 className="terms-title">TERMS OF SERVICE</h1>
        {terms.map((item) => {
          return (
            <>
              <h1 className="terms-section">{item.title}</h1>
              <h1 className="terms-details">{item.description}</h1>
            </>
          );
        })}
        <h1>play.more.mama</h1>
        <h1>playmoremama@gmail.com</h1>
        <h1>P.O. BOX 3282, Monterey, CA 93942</h1>
      </section>
      <MainFooter />
    </>
  );
};

export default TermsConditionsPage;
