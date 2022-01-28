import CartObj from "../../../components/cart/cartobj";
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_PRODUCT,
    SET_LOCAL_CART
} from "./consts";

const initialState = new CartObj();
  
export const cart = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOCAL_CART:
            return new CartObj(payload);
        case ADD_PRODUCT:
            state.addProduct(payload);
            return state;
        case DELETE_PRODUCT:
            state.deleteProduct(payload);
            return state;
        case CHANGE_PRODUCT:
            state.setCountProduct(payload);
            return state;
        default:
            return state;
    }
};
  