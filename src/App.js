import React from "react";
import { HomePage, ProductsPage, SingleProductsPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainFooter } from "./components";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <MainFooter />
    </Router>
  );
};

export default App;
