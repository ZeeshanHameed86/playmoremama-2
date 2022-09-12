import React from "react";
import {
  Navbar,
  Header,
  Introduction,
  FeaturedProducts,
  Value,
  Footer,
  MainFooter,
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
      <MainFooter />
    </div>
  );
};

export default HomePage;
