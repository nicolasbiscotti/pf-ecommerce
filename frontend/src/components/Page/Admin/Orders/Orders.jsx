import { useEffect } from "react";
import { ShowProductStyled } from "../ShowProduct/style";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../redux/reducers/orders/actions";
import TableHeader from "./TableHeaders";

export default function Orders() {
  const dispatch = useDispatch();
  const { ordersData, ordersKeys } = useSelector((state) => state.ordersAdmin)
  // const [orderHeaders, setOrderHeaders] = useState([])

  useEffect(() => {
    dispatch(getAllOrdersAdmin({ page: 0 }));
  }, [dispatch]);

  // Object.keys(ordersData.orders[

  return (
    <ShowProductStyled>
      <div>
        <table>
          <caption>ORDERS</caption>
          <thead>
            <TableHeader headers={ordersKeys} />
          </thead>
          <tbody>
            {
              // 
            }
          </tbody>
        </table>
        {
        }
      </div>
    </ShowProductStyled>
  )
}
