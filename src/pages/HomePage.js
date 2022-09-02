import React from "react";
import {
  Navbar,
  Header,
  Introduction,
  FeaturedProducts,
  Value,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar offset={0} />
      <Header />
      <Value />
      <Introduction />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
