import { Link } from "react-router-dom";
import { ButtonAdmin } from "../../../../common/button/Button";
export default function Rows({ id, name, salePrice, stock, discount }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{salePrice}</td>
      <td>{stock}</td>
      <td>{discount}</td>
      <td>
        <ButtonAdmin>
          <Link to={`/admin/update/product/${id}`} style={{ color: "white" }}>
            Edit
          </Link>
        </ButtonAdmin>
      </td>
    </tr>
  );
}
