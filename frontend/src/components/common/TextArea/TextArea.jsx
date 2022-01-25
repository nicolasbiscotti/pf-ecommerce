const TextArea = ({ handleChange, value }) => {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="description"
      value={value}
      onChange={handleChange ? (e) => handleChange(e) : null}
    ></textarea>
  );
};

export default TextArea;
