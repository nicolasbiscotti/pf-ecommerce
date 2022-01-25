export const renderBoxData = ({
  data,
  dataSelectBox,
  setDataSelectBox,
  init,
}) => {
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
              checked={init.includes(id)}
            />
            <label htmlFor={name}>{name}</label>
          </span>
        );
      })}
    </div>
  );
};
