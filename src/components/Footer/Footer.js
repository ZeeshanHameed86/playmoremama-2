import React from "react";
import "./footer.css";
import img1 from "../../assets/Footer-Image-1.jpeg";
import img2 from "../../assets/Footer-Image-2.jpeg";
import hearts from "../../assets/Hearts.png";
import flowers from "../../assets/Flowers.png";
import { useProductsContext } from "../../context/products_context";
import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Footer = () => {
  const { reviews } = useProductsContext();

  return (
    <footer>
      <div className="footer-title-container">
        <div className="footer-title-img-container">
          <img src={hearts} alt="" />
        </div>
        <div className="footer-title-middle">
          <h1 className="footer-title">How Do You Sensory?</h1>
          <h1 className="footer-title">
            Tag Us{" "}
            <span>
              <a href="https://www.instagram.com/play.more.mama/">
                @play.more.mama
              </a>
            </span>
          </h1>
        </div>
        <div className="footer-title-img-container">
          <img src={hearts} alt="" />
        </div>
      </div>
      <div className="insta-posts">
        <div className="footer-img-left">
          <img src={img1} alt="" />
        </div>
        <div className="footer-img-middle">
          <Swiper
            className="footer-carousel"
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
          >
            {reviews.map((item, index) => {
              const { fields } = item;
              return (
                <SwiperSlide key={item.id}>
                  <h3>{fields.name}</h3>
                  <div className="footer-stars">
                    {["", "", "", "", ""].map((__, index) => {
                      return (
                        <div key={index}>
                          {index + 1 <= item.fields.rating ? (
                            <FaStar size={20} color={colors.orange} />
                          ) : (
                            <FaStar size={20} color={colors.grey} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <p>{fields.review}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* {reviews.map((item, index) => {
            return (
              <div key={item.id} className="home-reviews">
                <h1>{item.fields.name}</h1>
                {["", "", "", "", ""].map((__, index) => {
                  return (
                    <div>
                      {index + 1 <= item.fields.rating ? (
                        <FaStar color={colors.orange} />
                      ) : (
                        <FaStar color={colors.grey} />
                      )}
                    </div>
                  );
                })}
                <h1>{item.fields.review}</h1>
              </div>
            );
          })} */}
        </div>
        <div className="footer-img-right">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="footer-brand-container">
        <div className="footer-brand-img-container">
          <img src={flowers} alt="" />
        </div>
        <h1 className="footer-brand">play.more.mama</h1>
        <div className="footer-brand-img-container">
          <img src={flowers} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
