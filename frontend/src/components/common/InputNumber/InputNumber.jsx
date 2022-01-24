const InputNumber = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        id={placeholder}
        type="number"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={placeholder}></label>
    </div>
  );
};

export default InputNumber;
