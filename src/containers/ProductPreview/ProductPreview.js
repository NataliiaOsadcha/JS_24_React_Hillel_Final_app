import "./ProductPreview.css";
import logo from "../../assets/logo_main_white.svg";
import Article from "../../components/Article/Article";

const arr = [
  {
    id: 1,
    img: "../../assets/lenovo-laptop-y50-cover-6_01 2.png",
    name: "Ноутбук Lenovo Y50-70 Aluminum Black",
    price: "25000₴",
    quantity: "Кількість: 5шт",
    logo: "",
    basket: "Готовий до відправки",
  },
  {
    id: 2,
    img: "../../assets/lenovo-laptop-y50-cover-6_01 2.png",
    name: "Ноутбук Lenovo Y50-70 Aluminum Black",
    price: "25000₴",
    quantity: "Кількість: 5шт",
    logo: "",
    basket: "Готовий до відправки",
  },
  {
    id: 3,
    img: "../../assets/lenovo-laptop-y50-cover-6_01 2.png",
    name: "Ноутбук Lenovo Y50-70 Aluminum Black",
    price: "25000₴",
    quantity: "Кількість: 5шт",
    logo: "",
    basket: "Готовий до відправки",
  },
];

function ProductPreview() {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="img-logo-white" src={logo} alt="logo" />
      </div>
      <div className="products-flex-box">
        {arr.map((product) => (
          <Article key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPreview;
