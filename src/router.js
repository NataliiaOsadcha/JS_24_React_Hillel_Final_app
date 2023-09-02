import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import ProductTable from "./containers/ProductTable/ProductTable";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import ChosenProduct from "./components/ChosenProduct/ChosenProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductTable />} />
        <Route path="/products-preview" element={<ProductPreview />} />
        <Route path="/products-preview/:id" element={<ChosenProduct />} />{" "}
        <Route path="*" element={<div>404 | Page is not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
