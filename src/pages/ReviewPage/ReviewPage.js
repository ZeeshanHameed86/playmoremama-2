import React, { useEffect, useState } from "react";
import "./review-page.css";
import { useProductsContext } from "../../context/products_context";
import { useParams } from "react-router-dom";
import { MainFooter, Navbar, Stars } from "../../components";
import { useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getSingleProduct,
    single_product,
    addReview,
    single_product_success,
  } = useProductsContext();
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  console.log(single_product_success);

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  useEffect(() => {
    if (!single_product_success) {
      navigate("/");
    }
  }, [single_product_success]);

  const reviewForm = async (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    addReview(id, name, stars, review, feedback);
    setTimeout(() => {
      setSubmitStatus(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar offset={0} />
      <section className="review-page">
        <h1 className="review-title">
          Review for {single_product.name && single_product.name}
        </h1>
        <div className="review-container">
          <div className="review-img-container">
            <img
              src={single_product.images && single_product.images[0].url}
              alt=""
            />
          </div>
          <div>
            <h3>How satisfied are you with this product?</h3>
            <Stars stars={stars} setStars={setStars} />
            <form onSubmit={(e) => reviewForm(e)} className="review-form">
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <textarea
                name="review"
                id="review"
                rows="10"
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
                placeholder="Please leave a review."
              />
              <textarea
                name="feedback"
                id="feedback"
                rows="10"
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Any feedback to improve the product/company?"
              />
              <button
                type="submit"
                disabled={stars === 0}
                style={
                  stars === 0
                    ? {
                        background: "grey",
                        color: "lightgray ",
                        cursor: "default",
                      }
                    : {}
                }
              >
                {submitStatus ? "Submiting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default ReviewPage;
