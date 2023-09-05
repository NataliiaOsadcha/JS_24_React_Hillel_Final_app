import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_main_white.svg";
import Article from "../../components/Article/Article";
import { API_URL } from "../../constants/index";
import "./ProductPreview.css";

function ProductPreview() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
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

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="logo-container">
        <img className="img-logo-white" src={logo} alt="logo" />
      </div>
      <div className="products-flex-box">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products-preview/${product.id}`}
            className="product-link"
          >
            <Article product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPreview;
