import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const PasswordInput = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-container">
      <input
        className="input"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name="password"
      />
      <div className="toggle-container" onClick={handleToggle}>
        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
      </div>
    </div>
  );
};

export default PasswordInput;
