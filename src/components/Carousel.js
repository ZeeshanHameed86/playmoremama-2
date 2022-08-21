import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useProductsContext } from "../context/products_context";
import { filterCategories } from "../helpers";
import product from "../assets/Product.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const { all_products } = useProductsContext();
  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      className="carousel"
      modules={[Navigation]}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      breakpoints={{
        // when window width is >= 1100px
        1100: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {filterCategories(all_products).map((item) => (
        <SwiperSlide>
          <div className="single-slide-container">
            <img src={product} alt="" />
            <h3>{item}</h3>
          </div>
        </SwiperSlide>
      ))}
      <div className="arrows-container">
        <div ref={swiperNavPrevRef} className="swiper-prev">
          <AiOutlineLeft />
        </div>
        <div ref={swiperNavNextRef} className="swiper-next">
          <AiOutlineRight />
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;
