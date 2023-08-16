import "./Card.css";
import Input from "../Input/Input";
import logo from "../../assets/logo_main.svg";
import Button from "../Button/Button";
import PasswordInput from "../PasswordInput/PasswordInput";

const Card = () => {
  return (
    <div className="card-container">
      <div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <Input placeholder="User name" />
      <PasswordInput placeholder="Password" />
      <Button className="card-btn" text="Login" />
    </div>
  );
};

export default Card;
