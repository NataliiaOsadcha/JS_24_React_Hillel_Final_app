import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import "./PasswordInput.css";

const PasswordInput = ({ placeholder, onChange, isError }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`password-container ${isError ? "error" : ""}`}>
      <input
        className={`input ${isError ? "error" : ""}`}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name="password"
        onChange={onChange}
      />
      <div className="toggle-container" onClick={handleToggle}>
        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
      </div>
    </div>
  );
};

export default PasswordInput;
