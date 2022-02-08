import Rows from "../Rows/Rows";

export const mapOrders = (orders) => {
  return orders.map((props) => {
    return <Rows key={props.id} {...props} />;
  });
};
