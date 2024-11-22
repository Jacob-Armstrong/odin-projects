import "../styles/Input.css";

function Input({ type, label, id, value, onChange, placeholder }) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
