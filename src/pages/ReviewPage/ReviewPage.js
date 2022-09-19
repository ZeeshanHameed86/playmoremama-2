import React, { useEffect } from "react";
import "./review-page.css";
import { useProductsContext } from "../../context/products_context";
import { useParams } from "react-router-dom";
import { MainFooter, Navbar } from "../../components";

const ReviewPage = () => {
  const { id } = useParams();
  const { getSingleProduct, single_product } = useProductsContext();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  const reviewForm = (e) => {
    e.preventDefault();
    console.log(e.target.email);
  };

  return (
    <>
      <Navbar offset={0} />
      <section className="review-page">
        {/* <form onSubmit={(e) => reviewForm(e)}>
          <input type="email" name="email" />
          <input type="text" name="name" />
          <textarea name="review" id="review" cols="30" rows="10"></textarea>
          <input type="submit" name="submit" value="submit" />
        </form> */}
      </section>
      <MainFooter />
    </>
  );
};

export default ReviewPage;
