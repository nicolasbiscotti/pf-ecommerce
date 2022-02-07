import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { RowsStyled } from "../../ShowProduct/Rows/style";
export default function Rows({ id, date, status, adress, user, details }) {
  // console.log({ id, date, status, adress, user, details })
  return (
    <RowsStyled>

      <td>{id}</td>
      <td>{user}</td>
      <td>{status}</td>
      <td>{adress}</td>
    </RowsStyled>
  );
}