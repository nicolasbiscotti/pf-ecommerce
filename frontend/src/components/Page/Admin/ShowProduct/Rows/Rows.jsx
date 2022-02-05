import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { RowsStyled } from "./style";
export default function Rows({ id, name, salePrice, stock, discount }) {
  return (
    <RowsStyled>
      <td className="name">
        <span>{name}</span>
        <Link to={`/admin/update/product/${id}`}>
          <MdModeEditOutline />
        </Link>
      </td>
      <td>{salePrice}</td>
      <td>{stock}</td>
      <td>{discount}</td>
    </RowsStyled>
  );
}
