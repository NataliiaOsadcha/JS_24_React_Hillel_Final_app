import { useEffect, useState } from "react";
import "./ProductTable.css";
import logo from "../../assets/logo_main_white.svg";
import Button from "../../components/Button/Button";
import { BsPlusLg, BsPerson } from "react-icons/bs";
import Table from "../../components/Table/Table";
import { API_URL } from "../../constants/index";

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="container">
      <div>
        <img className="img-logo-white" src={logo} alt="logo" />
      </div>
      <div className="pT-buttons-container">
        <Button className="pT-btn" text="Preview" icon={<BsPlusLg />} />
        <Button className="pT-btn" text="Add product" icon={<BsPerson />} />
      </div>
      <div>
        <h2>Products</h2>
        <Table products={products} />
      </div>
    </div>
  );
}
export default ProductTable;
