import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo_main_white.svg";
import "./ChosenProduct.css";
import { API_URL } from "../../constants/index";

const ChosenProduct = () => {
  const { id } = useParams(); // Отримуємо параметр id з URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img className="img-logo-white" src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <main className="main-body-color">
        <div className="container height">
          <div className="h2-title-container">
            <div className="back-button">&#8592;</div>
            <h2 className="h2-title">{product.name}</h2>
          </div>
          <div className="image-content-box">
            <div className="image-box">
              <div className="image-chusen-box">
                <img
                  className="image-chusen"
                  src={product.image}
                  alt="content image"
                />
              </div>
            </div>
            <div className="content-box">
              <div className="availability">
                <span className="checkmark">&#10003;</span> Є в наявності
              </div>
              <div className="article-price">{product.price}000₴</div>
              <div className="article-quantity">
                Кількість:{product.quantity}
              </div>
            </div>
          </div>
          <div className="text-content-box">
            <div className="text-title">
              <span className="text-title-dark">Опис</span> Ноутбук Lenovo
              Y50-70 Aluminum Black
            </div>
            <div className="text-main-box">
              <p className="text-main-title">
                15.6-дюймовий дисплей стандарту Full HD
              </p>
              <p className="text-main-simple">
                Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full
                HD (1920 x 1080).
              </p>
              <p className="text-main-title">Динаміки преміум-клас</p>
              <p className="text-main-simple">
                Стереофонічні динаміки JBL, що забезпечують розкішне звучання з
                ефектом присутності, ідеально підходять для відео, ігор і
                музики.
              </p>
              <p className="text-main-title">Dolby Advanced Audio</p>
              <p className="text-main-simple">
                Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці
                можна відтворити кришталево чіткий просторовий звук за допомогою
                вбудованих динаміків.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChosenProduct;
