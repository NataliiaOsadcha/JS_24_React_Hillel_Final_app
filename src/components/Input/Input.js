import "./Input.css";

const Input = ({ placeholder }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      name="input"
    />
  );
};

export default Input;
