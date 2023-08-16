import "./Article.css";
import { BiCart } from "react-icons/bi";

const Article = ({ product }) => {
  return (
    <div className="article-box">
      <div className="article-img">
        <img src={product.img} alt="picture" />
      </div>
      <h3>{product.name}</h3>
      <div className="article-body">
        <div className="article-price">{product.price}</div>
        <div className="article-quantity">{product.quantity}</div>
      </div>
      <div className="article-footer">
        <div className="article-footer-text">{product.basket}</div>
        <div className="bye-icon">
          <BiCart size={28} />
        </div>
      </div>
    </div>
  );
};

export default Article;
