const InputName = ({ handleChange, value }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange ? (e) => handleChange(e) : null}
        value={value}
      />
    </div>
  );
};

export default InputName;
