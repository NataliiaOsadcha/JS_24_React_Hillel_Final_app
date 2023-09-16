import React, { useState, useEffect } from "react";
import "./ProductTable.css";
import logo from "../../assets/logo_main_white.svg";
import Button from "../../components/Button/Button";
import { BsPlusLg, BsPerson } from "react-icons/bs";
import Table from "../../components/Table/Table";
import ProductFormModal from "../../components/ProductFormModal/ProductFormModal";
import { API_URL } from "../../constants/index";
import { useNavigate } from "react-router-dom";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const handlePreviewClick = () => {
    navigate("/products-preview");
  };

  const handleAddProductClick = () => {
    setIsModalOpen(true);
    setIsEditMode(false);
  };

  const handleEditProductClick = () => {
    setIsModalOpen(true);
    setIsEditMode(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container height">
      <div>
        <img className="img-logo-white" src={logo} alt="logo" />
      </div>
      <div className="pT-buttons-container">
        <Button
          className="pT-btn"
          text="Preview"
          icon={<BsPlusLg />}
          onClick={handlePreviewClick}
        />
        <Button
          className="pT-btn"
          text="Add product"
          icon={<BsPerson />}
          onClick={handleAddProductClick}
        />
      </div>
      <div>
        <h2 className="pT-h2">Products</h2>
        <Table
          products={products}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProductClick}
        />
      </div>
      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default ProductTable;
