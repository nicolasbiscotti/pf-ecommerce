import ReactPaginate from "react-paginate";
import { PagedStyled } from "../../ShowProduct/Paged/style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAdmin } from "../../../../../redux/reducers/orders/actions";

export default function Paged({ nameReducer }) {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state[nameReducer]);
  const handleOnPageChange = ({ selected }) => {
    dispatch(getAllOrdersAdmin({ page: selected }));
  };
  return (
    <PagedStyled>
      <ReactPaginate
        previousLabel={<FaAngleDoubleLeft />}
        nextLabel={<FaAngleDoubleRight />}
        breakLabel="..."
        pageCount={pageCount ? pageCount : 0}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handleOnPageChange}
        activeLinkClassName="active"
        previousClassName="previous"
        nextClassName="next"
      />
    </PagedStyled>
  );
}
