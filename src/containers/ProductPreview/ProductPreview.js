import "./ProductPreview.css";
import logo from "../../assets/logo_main_white.svg";
import Article from "../../components/Article/Article";

function ProductPreview() {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="img-logo-white" src={logo} alt="logo" />
      </div>
      <div className="products-flex-box">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}

export default ProductPreview;
