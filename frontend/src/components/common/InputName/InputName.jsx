const InputName = ({ handleChange, value }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </div>
  );
};

export default InputName;
