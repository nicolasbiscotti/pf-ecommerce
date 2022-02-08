import { CreateProductStyled } from '../../CreateProduct/style'
import {InputNameStyled} from '../../../../common/InputName/style'
export default function Details() {
  return (
    <CreateProductStyled>
      <form>
        <InputNameStyled>
          <label htmlFor="">Date</label>
          <input type="date" value="2022-01-31" disabled />
        </InputNameStyled>
      </form>
    </CreateProductStyled>
  )
}
