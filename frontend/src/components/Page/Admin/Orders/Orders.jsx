import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../redux/reducers/orders/actions";
import Paged from "./Paged/Paged"
import { MapOrders } from "./services/mapOrders";
import { ShowProductStyled } from "../ShowProduct/style";
import TableHeader from "./TableHeaders";
import Details from "./Details/Details";

export default function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.ordersAdmin)
  const [showDetails, setShowDetails] = useState(false)
  useEffect(() => {
    dispatch(getAllOrdersAdmin({ page: 0 }));
  }, [dispatch]);


  return (
    <ShowProductStyled className="orders">
      <div>
        <table>
          <caption>
            ORDERS
            <div>

              <label htmlFor="">Filter by Status</label>
              <select name="" id="">
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
              </select>
            </div>
          </caption>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            <MapOrders orders={orders} openModal={setShowDetails} />
          </tbody>
        </table>
        <Paged nameReducer={"ordersAdmin"} />
        {
          showDetails && <Details closeModal={setShowDetails} />
        }
      </div>
    </ShowProductStyled>
  )
}
