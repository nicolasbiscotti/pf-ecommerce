import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_PRODUCT,
  SET_LOCAL_CART,
  DELETE_CART,
} from "./consts";

const creator = function (type, payload) {
  return {
    type,
    payload,
  };
};

export const addProduct = function (id, name, img, price, count = null) {
  return async function (dispatch) {
    if (count === null) {
      await dispatch(
        creator(ADD_PRODUCT, { product: { id, price, name, img } })
      );
    } else {
      await dispatch(
        creator(ADD_PRODUCT, {
          product: { id, price, name, img },
          count: count,
        })
      );
    }
  };
};

export const deleteProduct = function (id) {
  return async function (dispatch) {
    await dispatch(creator(DELETE_PRODUCT, { id }));
  };
};

export const changeCountProduct = function (id, count) {
  return async function (dispatch) {
    await dispatch(
      creator(CHANGE_PRODUCT, { product: { id: id }, count: count })
    );
  };
};

export const setLocalCart = function (localCart) {
  return async function (dispatch) {
    let cart = JSON.parse(localCart);
    await dispatch(creator(SET_LOCAL_CART, cart.products));
  };
};

export const deleteCart = function () {
  return {
    type: DELETE_CART,
  };
};
