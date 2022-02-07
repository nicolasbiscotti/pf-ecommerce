import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { RowsStyled } from "../../ShowProduct/Rows/style";
export default function Rows({ id, date, status, adress, user, details }) {
  // console.log({ id, date, status, adress, user, details })
  return (
    <RowsStyled>

      <td>{id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td><MdExpandMore/></td>
    </RowsStyled>
  );
}