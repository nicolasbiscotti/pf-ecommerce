const InputFile = ({ handleChange, multiple }) => {
  return (
    <div>
      {multiple ? (
        <input type="file" onChange={handleChange} multiple />
      ) : (
        <input type="file" onChange={handleChange} />
      )}
    </div>
  );
};

export default InputFile;
