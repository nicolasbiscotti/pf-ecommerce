import ReactPaginate from "react-paginate";
import { PagedStyled } from "../../../Page/Admin/ShowProduct/Paged/style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersUser } from "../../../../redux/reducers/orders/actions";

export default function Paged({ nameReducer }) {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state[nameReducer]);
  const handleOnPageChange = ({ selected }) => {
    dispatch(getAllOrdersUser({ page: selected }));
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
