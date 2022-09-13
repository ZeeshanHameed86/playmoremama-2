import React, { useState } from "react";
import { Navbar, MainFooter } from "../components";
import { faq } from "../data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const FAQPage = () => {
  const [isToggle, setIsToggle] = useState(false);

  const answerAnim = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const toggle = (index) => {
    if (isToggle === index) {
      return setIsToggle(null);
    }
    setIsToggle(index);
  };

  return (
    <>
      <Navbar offset={0} />
      <section className="faq-page">
        <div className="faq-container section-center">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <h1 className="faq-title-description">
            For customer support and/or media inquiries contact us at
            playmoremama@gmail.com. I also respond within 24 hours to all
            Instagram direct messages.
          </h1>
          {faq.map((item, index) => {
            return (
              <div key={item.id} className="question-answer-container">
                <div
                  className="question"
                  style={
                    isToggle === index
                      ? {}
                      : {
                          borderBottomLeftRadius: "1rem",
                          borderBottomRightRadius: "1rem",
                        }
                  }
                  onClick={() => toggle(index)}
                >
                  {isToggle === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  <h2>{item.question}</h2>
                  {isToggle === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                <AnimatePresence>
                  {isToggle === index && (
                    <motion.div
                      variants={answerAnim}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="answer"
                    >
                      <h2>{item.answer}</h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default FAQPage;
