const InputNumber = ({ id, placeholder }) => {
  return (
    <div>
      <input id={id} type="number" placeholder={placeholder} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default InputNumber;
