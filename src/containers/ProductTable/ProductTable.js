import "./ProductTable.css";
import logo from "../../assets/logo_main_white.svg";
import Button from "../../components/Button/Button";
import { BsPlusLg, BsPerson } from "react-icons/bs";
import Table from "../../components/Table/Table";

function ProductTable() {
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
        <Table />
      </div>
    </div>
  );
}
export default ProductTable;
