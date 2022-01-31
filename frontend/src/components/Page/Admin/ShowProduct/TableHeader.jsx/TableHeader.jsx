import { TableHeaderStyled } from "./style";

export default function TableHeader() {
  return (
    <TableHeaderStyled>
      <th>NAME</th>
      <th>SALE PRICE</th>
      <th>STOCK</th>
      <th>DISCOUNT</th>
      <th>*</th>
    </TableHeaderStyled>
  );
}
