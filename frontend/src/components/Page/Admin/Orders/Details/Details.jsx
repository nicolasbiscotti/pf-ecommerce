import { CreateProductStyled } from '../../CreateProduct/style'
import { InputNameStyled } from '../../../../common/InputName/style'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonAdmin, Button } from '../../../../common/button/Button'
import ProductsList from '../ProductsList/ProductsList'
import { updateOrderStatusDetailAdmin } from '../../../../../redux/reducers/orders/actions'
import { FaTimes } from 'react-icons/fa'
export default function Details({ closeModal }) {
  const dispatch = useDispatch()
  const { ordersDetails } = useSelector((state) => state.ordersAdmin)
  const { status } = ordersDetails
  const handleSubmitUpdateStatus = (e) => {
    e.preventDefault();
    const { status: { value: newStatus }, id: { value: id } } = e.target
    if (status === newStatus) return false
    dispatch(updateOrderStatusDetailAdmin({ status: newStatus, id }))
    console.log(status, newStatus, id)
    handlerCloseClick()
  }

  const handlerCloseClick = () => {
    closeModal(false)
  }
  return (
    <CreateProductStyled onSubmit={handleSubmitUpdateStatus} className="modalContent">
      {
        !ordersDetails.id
          ? <div>No hay info</div>
          : (
            <div style={{position: "relative"}}>
              <Button
                onClick={handlerCloseClick}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px"
                }}
                radius="50%"
                width="40px"
                height="40px"
                bgColor="#5168F4"
              ><FaTimes /></Button>

              <form className="orders">
                <section className="price">
                  <InputNameStyled>
                    <label htmlFor="id">ID</label>
                    <input name="id" type="text" disabled value={ordersDetails.id} />
                  </InputNameStyled>
                  <InputNameStyled>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" disabled value={ordersDetails.user.username} />
                  </InputNameStyled>
                  <InputNameStyled>
                    <label htmlFor="date">Date</label>
                    <input name="date" type="date" disabled value={ordersDetails.date.split('T')[0]} />
                  </InputNameStyled>
                </section>

                <InputNameStyled>
                  <label htmlFor="address">Address</label>
                  <input name="address" type="text" disabled value={ordersDetails.address} />
                </InputNameStyled>
                <InputNameStyled>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="text" disabled value={ordersDetails.user.email} />
                </InputNameStyled>

                <ProductsList orderList={ordersDetails.details} />

                <InputNameStyled>
                  <label htmlFor="status">Status</label>
                  {
                    (ordersDetails.status === "pending") ? (
                      <select className="selectinput" name="status" type="text">
                        <option defaultValue value="pending">Pending</option>
                        <option value="done">Done</option>
                      </select>
                    ) : (ordersDetails.status === "done") && (
                      <select className="selectinput" name="status" type="text" disabled>
                        <option defaultValue value="done">Done</option>
                      </select>
                    )
                  }
                </InputNameStyled>
                {(ordersDetails.status === "pending") && (
                  <ButtonAdmin>Update Status</ButtonAdmin>
                )}
              </form>
            </div>

          )
      }

    </CreateProductStyled>
  )
}
