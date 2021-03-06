import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../../../redux/reducers/productsAdmin/actions";
import Paged from "./Paged/Paged";
import { mapProducts } from "./services/mapProducts";
import { ShowProductStyled } from "./style";
import TableHeader from "./TableHeader.jsx/TableHeader";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsAdmin);

  useEffect(() => {
    dispatch(getAllProductsAdmin({ page: 0 }));
  }, [dispatch]);
  return (
    <ShowProductStyled>
      <div>
        <table>
          <caption>PRODUCTS</caption>
          <thead>
            <TableHeader />
          </thead>
          <tbody>{mapProducts(products)}</tbody>
        </table>
        <Paged nameReducer={"productsAdmin"} />
      </div>
    </ShowProductStyled>
  );
}
