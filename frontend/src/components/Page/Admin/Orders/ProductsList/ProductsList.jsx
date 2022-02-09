import styled from "styled-components"

const ProductsListStyled = styled.div`
  /* color: red;  */
  td, th {
    background-color : #25262A;
  }
`
export default function ProductsList({ orderList }) {
  return (
    <ProductsListStyled>
      <label>Products</label>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </ProductsListStyled>
  )
}
