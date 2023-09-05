import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import logo from "../../assets/logo_main.svg";
import Button from "../Button/Button";
import PasswordInput from "../PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: false, password: false });
  const navigate = useNavigate();

  const handleLogin = () => {
    setError({ username: false, password: false });

    if (!password) {
      setError((prevError) => ({ ...prevError, password: true }));
      return;
    }

    const staticUsername = "admin";
    const staticPassword = "12345";

    if (username === staticUsername && password === staticPassword) {
      const token = "generated_token";
      localStorage.setItem("token", token);
      navigate("/products");
    } else {
      setError({ username: true, password: true });
    }
  };

  return (
    <div className="card-container">
      <div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <Input
        placeholder="User name"
        onChange={(e) => setUsername(e.target.value)}
        isError={error.username}
      />
      {error.username && <p className="error-message">Username is required</p>}
      <PasswordInput
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        isError={error.password}
      />
      {error.password && <p className="error-message">Password is required</p>}
      <Button className="card-btn" text="Login" onClick={handleLogin} />
    </div>
  );
};

export default Card;
