import { TableHeaderStyled } from "./style";

export default function TableHeader() {
  return (
    <TableHeaderStyled>
      <th>NAME</th>
      <th>PRICE</th>
      <th>STOCK</th>
      <th>%</th>
      <th></th>
    </TableHeaderStyled>
  );
}
