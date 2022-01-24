const InputNumber = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        id={placeholder}
        type="number"
        placeholder={placeholder}
        onChange={handleChange ? (e) => handleChange(e) : null}
      />
      <label htmlFor={placeholder}></label>
    </div>
  );
};

export default InputNumber;
