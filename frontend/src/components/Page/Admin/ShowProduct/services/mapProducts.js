import Rows from "../Rows/Rows";

export const mapProducts = (products) => {
  return products.map(({ id, name, salePrice, discount, stock }) => {
    return (
      <Rows
        key={id}
        id={id}
        name={name}
        salePrice={salePrice}
        discount={discount}
        stock={stock}
      />
    );
  });
};
