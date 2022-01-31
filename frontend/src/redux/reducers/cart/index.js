import CartObj from "../../../components/cart/cartobj";
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_PRODUCT,
    SET_LOCAL_CART
} from "./consts";

const initialState = new CartObj();
  
export const cart = (state = initialState, { type, payload }) => {
    let array=[...state.products];
    let newCart= new CartObj(array);

    switch (type) {
        case SET_LOCAL_CART:
            return new CartObj(payload);
        case ADD_PRODUCT:
            newCart.addProduct(payload);
            return newCart;
        case DELETE_PRODUCT:
            newCart.deleteProduct(payload);
            return newCart;
        case CHANGE_PRODUCT:
            newCart.setCountProduct(payload);
            return newCart;
        default:
            return state;
    }
};
  