import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import NoImage from "../assets/No-Image.jpg";

const SingleProductsPage = () => {
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(1);
  const { loading, getSingleProduct, single_product } = useProductsContext();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  if (loading) {
    return <section className="single-product-layout">Loading...</section>;
  }

  return (
    <section className="single-product-layout">
      <div className="product-image-gallery-container">
        <div className="image-gallery">
          <img
            className="main-gallery-image"
            src={
              single_product.images
                ? single_product.images[imageIndex].url
                : NoImage
            }
            alt=""
          />
          <div className="sub-images">
            {single_product.images ? (
              single_product.images.map((image, index) => {
                if (index > 0) {
                  return (
                    <img
                      style={{
                        border: index === imageIndex && "1px solid grey",
                      }}
                      src={image.url}
                      alt=""
                      onClick={() => {
                        setImageIndex(index);
                      }}
                    />
                  );
                }
                return;
              })
            ) : (
              <img src={NoImage} />
            )}
          </div>
        </div>
      </div>
      <div className="single-product-details">
        <h1>{single_product && single_product.name}</h1>
        <h3>${single_product && single_product.price}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          iure, cum officia laborum, dolorem ad odio quas fugit in eius eos
          laudantium aspernatur mollitia sit. Labore vitae dolore quisquam.
          Totam nemo quam quasi reiciendis labore ratione dolorem ipsa similique
          doloribus ipsam, odit necessitatibus reprehenderit consectetur nulla.
          Hic repellat sint impedit.
        </p>
      </div>
    </section>
  );
};

export default SingleProductsPage;
