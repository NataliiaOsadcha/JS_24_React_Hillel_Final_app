import "./Table.css";
import { FaPen, FaBox } from "react-icons/fa";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table-main">
        <tr className="table-tr-main">
          <td>ID</td>
          <td>Category</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price (₴)</td>
          <td></td>
        </tr>

        <tbody>
          <tr>
            <td>0</td>
            <td>PC</td>
            <td>Lenovo Y50-70</td>
            <td>5</td>
            <td>25,000.00</td>
            <td className="td-icon-cell">
              <FaPen />
              <FaBox />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Clothes</td>
            <td>Nike M Nk Df Acd21</td>
            <td>22</td>
            <td>4,000.00</td>
            <td className="td-icon-cell">
              <FaPen />
              <FaBox />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Plumbing</td>
            <td>CERSANIT MITO 17</td>
            <td>1337</td>
            <td>5,000.00</td>
            <td className="td-icon-cell">
              <FaPen />
              <FaBox />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
