import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useProductsContext } from "../context/products_context";
import Soon from "../assets/Coming Soon.png";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";
import { useState } from "react";
import { useEffect } from "react";

const Carousel = () => {
  const { filterProducts } = useProductsContext();
  const [active, setActive] = useState("ALL");
  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  useEffect(() => {
    if (active !== "ALL") {
      console.log("caro", active);
      filterProducts(active);
    }
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
      {["ALL", "Sensory Jars", "Sensory Shakers", "Complements"].map(
        (item, index) => (
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
                  {isActive && setActive(item)}
                  <img src={Soon} alt="" />
                  <h3>{item}</h3>
                </div>
              );
            }}
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Carousel;
