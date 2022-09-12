import React from "react";
import {
  HomePage,
  ProductsPage,
  SingleProductsPage,
  CartPage,
  SuccessPage,
  FailedPage,
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
        <Route path="/success/:id" exact element={<SuccessPage />} />
        <Route path="/failed/:id" exact element={<FailedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
