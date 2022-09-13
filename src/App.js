import React from "react";
import {
  HomePage,
  ProductsPage,
  SingleProductsPage,
  CartPage,
  FAQPage,
  SuccessPage,
  FailedPage,
  DigitalPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/success/:id" exact element={<SuccessPage />} />
        <Route path="/failed/:id" exact element={<FailedPage />} />
        <Route path="/digital" exact element={<DigitalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
