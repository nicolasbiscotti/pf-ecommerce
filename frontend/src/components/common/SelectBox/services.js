export const renderBoxData = ({ data, dataSelectBox, setDataSelectBox }) => {
  const handleOnChangeChecks = (e) => {
    const value = parseInt(e.target.value);
    if (dataSelectBox.includes(value)) {
      setDataSelectBox(dataSelectBox.filter((item) => item !== value));
    } else {
      setDataSelectBox([...dataSelectBox, value]);
    }
  };
  return (
    <div>
      {data.map(({ id, name }) => {
        return (
          <span key={name}>
            <input
              id={name}
              type="checkbox"
              value={id}
              onChange={handleOnChangeChecks}
            />
            <label htmlFor={name}>{name}</label>
          </span>
        );
      })}
    </div>
  );
};
