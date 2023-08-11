import "./Article.css";
import picture from "../../assets/lenovo-laptop-y50-cover-6_01 2.png";
import { BiCart } from "react-icons/bi";

const Article = () => {
  return (
    <div className="article-box">
      <div className="article-img" src={picture} alt="picture">
        <img src={picture} alt="picture" />
      </div>
      <h3>Ноутбук Lenovo Y50-70 Aluminum Black</h3>
      <div className="article-body">
        <div className="article-price">25000₴</div>
        <div className="article-quantity">Кількість: 5</div>
      </div>
      <div className="article-footer">
        <div className="article-footer-text">Готовий до відправки</div>
        <div className="bye-icon">
          <BiCart size={28} />
        </div>
      </div>
    </div>
  );
};

export default Article;
