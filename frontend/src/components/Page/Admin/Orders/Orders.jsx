import { useEffect } from "react";
import { ShowProductStyled } from "../ShowProduct/style";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../redux/reducers/orders/actions";
import TableHeader from "./TableHeaders";
import {mapOrders} from "./services/mapOrders";

export default function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.ordersAdmin)
  // const [orderHeaders, setOrderHeaders] = useState([])

  useEffect(() => {
    dispatch(getAllOrdersAdmin({ page: 0 }));
  }, [dispatch]);

  return (
    <ShowProductStyled>
      <div>
        <table>
          <caption>ORDERS</caption>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {
              mapOrders(orders)
            }
          </tbody>
        </table>
        {
        }
      </div>
    </ShowProductStyled>
  )
}
