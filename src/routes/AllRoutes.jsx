import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
