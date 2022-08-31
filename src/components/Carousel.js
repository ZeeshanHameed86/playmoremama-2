import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useProductsContext } from "../context/products_context";
import { filterCategories } from "../helpers";
import product from "../assets/Product.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";

const Carousel = () => {
  const { all_products, filterProducts } = useProductsContext();
  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  return (
    <Swiper
      loop={true}
      className="carousel"
      modules={[Navigation]}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      // breakpoints={{
      //   // when window width is >= 1100px
      //   100: {
      //     slidesPerView: 2,
      //   },
      //   900: {
      //     slidesPerView: 3,
      //   },
      // }}
      breakpoints={{
        100: {
          slidesPerView: 1,
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
      {["ALL", "Sensory Jars", "Sensory Shakers", "Complements"].map(
        (item, index) => (
          <SwiperSlide key={index}>
            <div
              className="single-slide-container"
              onClick={() => filterProducts(item)}
            >
              <img src={product} alt="" />
              <h3>{item}</h3>
            </div>
          </SwiperSlide>
        )
      )}
      <div className="arrows-container">
        <div ref={swiperNavPrevRef} className="swiper-prev">
          <img src={left} alt="" />
        </div>
        <div ref={swiperNavNextRef} className="swiper-next">
          <img src={right} alt="" />
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;
