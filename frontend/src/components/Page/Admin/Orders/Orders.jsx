import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../redux/reducers/orders/actions";
import Paged from "./Paged/Paged"
import {mapOrders} from "./services/mapOrders";
import { ShowProductStyled } from "../ShowProduct/style";
import TableHeader from "./TableHeaders";

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
            {mapOrders(orders)}
          </tbody>
        </table>
        <Paged nameReducer={"ordersAdmin"} />
      </div>
    </ShowProductStyled>
  )
}
