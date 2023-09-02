import React from "react";
import { useParams } from "react-router-dom";

const ChosenProduct = () => {
  const { id } = useParams(); // Отримуємо параметр id з URL

  return (
    <div>
      <h2>Chosen Product</h2>
      <p>Chosen product is: {id}</p>
    </div>
  );
};

export default ChosenProduct;
