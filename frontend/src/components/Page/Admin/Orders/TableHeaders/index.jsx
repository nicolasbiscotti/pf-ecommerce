import { TableHeaderStyled } from "../../ShowProduct/TableHeader.jsx/style";

export default function TableHeader({ headers }) {
  return (
    <TableHeaderStyled>
      {headers.map((header) =>
        <th key={header}>{header.toUpperCase()}</th>
      )}
    </TableHeaderStyled>
  );
}
