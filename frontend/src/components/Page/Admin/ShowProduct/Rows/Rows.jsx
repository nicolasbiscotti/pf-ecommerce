import { Link } from "react-router-dom";
export default function Rows({ id, name, salePrice, stock, discount }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{salePrice}</td>
      <td>{stock}</td>
      <td>{discount}</td>
      <td>
        <Link to={`/admin/update/product/${id}`}>Edit</Link>
      </td>
    </tr>
  );
}
