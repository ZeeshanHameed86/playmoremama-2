import React from "react";
import { HomePage, ProductsPage, SingleProductsPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, MainFooter } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductsPage />} />
      </Routes>
      <MainFooter />
    </Router>
  );
};

export default App;
