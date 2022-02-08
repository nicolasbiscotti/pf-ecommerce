import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { RowsStyled } from "../../ShowProduct/Rows/style";
export default function Rows({ id, date, status, address, user, details }) {
  return (
    <RowsStyled>
      <td>{id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{date.split('T')[0]}</td>
      <td>{status}</td>
      <td><MdExpandMore/><MdExpandLess/></td>
    </RowsStyled>
  );
}