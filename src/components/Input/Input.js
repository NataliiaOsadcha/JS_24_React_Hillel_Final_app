import "./Input.css";

const Input = ({ placeholder, onChange, isError }) => {
  return (
    <input
      className={`input ${isError ? "error" : ""}`}
      type="text"
      placeholder={placeholder}
      name="input"
      onChange={onChange}
    />
  );
};

export default Input;
