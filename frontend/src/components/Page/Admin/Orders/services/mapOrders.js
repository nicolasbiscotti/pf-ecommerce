import Rows from "../Rows/Rows";

export const mapOrders = (orders) => {
  return orders.map((props) => {
    console.log(props)
    return (
      <Rows 
        key={props.id}
        {...props}
      />
    );
  });
};
