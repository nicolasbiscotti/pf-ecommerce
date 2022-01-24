export const renderBoxData = (data) => {
  return (
    <div>
      {data.map(({ id, name }) => {
        return (
          <span key={id}>
            <input id={id} type="checkbox" value={id} />
            <label htmlFor={id}>{name}</label>
          </span>
        );
      })}
    </div>
  );
};
