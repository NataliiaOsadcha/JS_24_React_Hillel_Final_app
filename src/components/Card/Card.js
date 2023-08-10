import "./Card.css";
import Input from "../Input/Input";
import logo from "../../assets/logo_main.svg";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="card-container">
      <div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <Input placeholder="User name" />
      <Input placeholder="Password" />
      <Button text="Login" />
    </div>
  );
};

export default Card;
