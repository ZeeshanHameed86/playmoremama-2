import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useProductsContext } from "../../context/products_context";
import left from "../../assets/left-arrow.svg";
import right from "../../assets/right-arrow.svg";
import all from "../../assets/All-slider.webp";
import jar from "../../assets/Jar1.webp";
import bottle from "../../assets/bottle1-slider.webp";
import dice from "../../assets/Dice.webp";

const Carousel = () => {
  const { filterProducts } = useProductsContext();
  const [active, setActive] = useState("ALL");
  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  useEffect(() => {
    filterProducts(active);
  }, [active]);

  return (
    <Swiper
      loop={true}
      className="carousel"
      modules={[Navigation]}
      centeredSlides={true}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      breakpoints={{
        100: {
          slidesPerView: 1.8,
        },
        800: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },

        1800: {
          slidesPerView: 4,
        },
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <div className="arrows-container">
        <div ref={swiperNavPrevRef} className="swiper-prev">
          <img src={left} alt="" />
        </div>
        <div ref={swiperNavNextRef} className="swiper-next">
          <img src={right} alt="" />
        </div>
      </div>
      {[
        { category: "ALL", image: all },
        { category: "Sensory Jars", image: jar },
        { category: "Sensory Shakers", image: bottle },
        { category: "Complements", image: dice },
      ].map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => {
            return (
              <div
                className={
                  isActive
                    ? "single-slide-container single-slide-active"
                    : "single-slide-container"
                }
              >
                {isActive && setActive(item.category)}
                <img src={item.image && item.image} alt="" />
                <h3>{item.category}</h3>
              </div>
            );
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
