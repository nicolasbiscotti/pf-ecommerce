import Rows from "../Rows/Rows";

export const MapOrders = ({orders, openModal}) => {
  return (
    <>
    {orders.map((props) => 
      <Rows key={props.id} {...props} openModal={openModal}/>)}
    </>
    )
};
