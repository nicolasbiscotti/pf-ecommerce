import { corsAxiosGet } from "../../../services/corsAxios";
import { actionCreator } from "../products/actions";
import { GET_ORDERS_LIST } from "./const";

export const getAllOrdersAdmin = ({ page }) => {
  return async (dispatch) => {
    const allOrdersAdmin = await corsAxiosGet(`/orders?page=${page}`);
    dispatch(actionCreator(GET_ORDERS_LIST, allOrdersAdmin));
  };
};

export const getAllOrdersUser = (id,page = false) => {
  return async function (dispatch){
    let allOrdersUser;
    if(page){
      allOrdersUser = await corsAxiosGet(`/user/orders?page=${page}`);
    }else{
      allOrdersUser = await corsAxiosGet("/user/orders");
    }
    dispatch(actionCreator(GET_ORDERS_LIST, allOrdersUser))
  }
}