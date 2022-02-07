import { useEffect } from "react";
import { ShowProductStyled } from "../ShowProduct/style";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../redux/reducers/orders/actions";

export default function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state)
  
  useEffect(() => {
    dispatch(getAllOrdersAdmin({ page: 0 }));
  }, [dispatch]);
  return (
    <ShowProductStyled>
      <div>
        <table>
          <caption>ORDERS</caption>
        </table>
        {
          orders
        }
      </div>
    </ShowProductStyled>
  )  
}
