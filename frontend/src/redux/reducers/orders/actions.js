import { corsAxiosGet, corsAxiosPut } from "../../../services/corsAxios";
import { actionCreator } from "../products/actions";
import { GET_ONE_ORDER, GET_ORDERS_LIST } from "./const";

export const getAllOrdersAdmin = ({ page, status }) => {
  return async (dispatch) => {
    const allOrdersAdmin = await corsAxiosGet(`/orders?page=${page || "0"}&status=${status || ""}`);
    dispatch(actionCreator(GET_ORDERS_LIST, allOrdersAdmin));
  };
};

export const getOrderDetailAdmin = ({ id }) => {
  return async (dispatch) => {
    const orderDetail = await corsAxiosGet(`/orders/${id}`);
    dispatch(actionCreator(GET_ONE_ORDER, orderDetail));
  };
};

export const updateOrderStatusDetailAdmin = ({ id, status }) => {
  return async (dispatch) => {
    const isUpdated = await corsAxiosPut(`/orders/${id}`, {id, status});
    console.log(isUpdated.msg)
     dispatch(getAllOrdersAdmin({ page:0, status:"" }));
    // dispatch(actionCreator(UPDATE_STATUS_ONE_ORDER, isUpdated));
  };
};

export const getAllOrdersUser = ({id, page}) => {
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

export const getOrderDetailUser = ({ id }) => {
  return async (dispatch) => {
    const orderDetail = await corsAxiosGet(`/user/orders/${id}`);
    dispatch(actionCreator(GET_ONE_ORDER, orderDetail));
  };
};
