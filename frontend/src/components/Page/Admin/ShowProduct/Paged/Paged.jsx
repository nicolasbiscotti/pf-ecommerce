import ReactPaginate from "react-paginate";
import { PagedStyled } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../../../../redux/reducers/productsAdmin/actions";

export default function Paged({ nameReducer }) {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state[nameReducer]);
  const handleOnPageChange = ({ selected }) => {
    console.log(selected);
    dispatch(getAllProductsAdmin({ page: selected }));
  };
  return (
    <PagedStyled>
      <ReactPaginate
        previousLabel={<FaAngleDoubleLeft />}
        nextLabel={<FaAngleDoubleRight />}
        breakLabel="..."
        pageCount={pageCount ? pageCount : 0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handleOnPageChange}
        /* containerClassName="paged"
        pageLinkClassName="page-item-link"
        previousClassName="paged-item"
        nextClassName="paged-item"
        breakClassName="paged-item"
         */
        activeClassName="active"
        /* forcePage={page ? page : 0} */
      />
    </PagedStyled>
  );
}
