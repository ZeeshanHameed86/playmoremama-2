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
  const { all_products, filterProducts, also_like_products } =
    useProductsContext();
  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  return (
    <Swiper
      loop={true}
      modules={[Navigation]}
      slidesPerView={5}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
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
        1600: {
          slidesPerView: 4,
        },
        1800: {
          slidesPerView: 5,
        },
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {also_like_products.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="single-product-slide-container">
            <img src={item.fields.images[0].url} alt="" />
            <h3>{item.fields.name}</h3>
            <p>${item.fields.price}.00</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="single-arrows-container">
        <div ref={swiperNavPrevRef} className="single-swiper-prev">
          <AiOutlineLeft />
        </div>
        <div ref={swiperNavNextRef} className="single-swiper-next">
          <AiOutlineRight />
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;
