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

  console.log(single_product);

  return (
    <>
      <Navbar offset={0} />
      <section className="review-page"></section>
      <MainFooter />
    </>
  );
};

export default ReviewPage;
