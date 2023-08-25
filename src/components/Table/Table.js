import "./Table.css";
import { FaPen, FaBox } from "react-icons/fa";

const products = [
  {
    id: 0,
    category: "PC",
    name: "Lenovo Y50-70",
    quantity: 5,
    price: 25000.0,
  },
  {
    id: 1,
    category: "Clothes",
    name: "Nike M Nk Df Acd21",
    quantity: 22,
    price: 4000.0,
  },
  {
    id: 2,
    category: "Plumbing",
    name: "CERSANIT MITO 17",
    quantity: 1337,
    price: 5000.0,
  },
  {
    id: 3,
    category: "Plumbing",
    name: "CERSANIT MITO 17",
    quantity: 1337,
    price: 5000.0,
  },
];

const Table = ({ products }) => {
  return (
    <div className="table-container">
      <table className="table-main">
        <thead>
          <tr className="table-tr-main">
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (₴)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price.toFixed(2)}</td>
              <td className="td-icon-cell">
                <FaPen />
                <FaBox />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
