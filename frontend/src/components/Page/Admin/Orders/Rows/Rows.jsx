import { BsFillStickyFill } from "react-icons/bs";
import { RowsStyled } from "../../ShowProduct/Rows/style";

export default function Rows({ id, date, status, address, user, details }) {
  const handlerClick = () => {
    console.log("holo")
  }
  return (
    <RowsStyled>
      <td>{id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{date.split('T')[0]}</td>
      <td>{status}</td>
      <td onClick={handlerClick()}>
        <BsFillStickyFill/>
        </td>
    </RowsStyled>
  );
}