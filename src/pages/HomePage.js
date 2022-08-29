import React from "react";
import {
  Navbar,
  Header,
  Introduction,
  FeaturedProducts,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar offset={0} />
      <Header />
      <Introduction />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
