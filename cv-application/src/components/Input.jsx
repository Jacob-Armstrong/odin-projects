import "../styles/Input.css";

function Input({ type, label, id, value, onChange }) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
