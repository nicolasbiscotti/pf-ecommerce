import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
} from "../../../redux/reducers/cart/actions";
import { Button } from "../button/Button";

const AddtoCart = function ({ product, count, deactive }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleClic(e) {
    if (cart.existProduct(product)) {
      dispatch(deleteProduct(product.id));
      if (deactive !== undefined) {
        deactive(false);
      }
    } else {
      if (count !== undefined) {
        dispatch(
          addProduct(
            product.id,
            product.name,
            product.mainImg,
            product.salePrice,
            count
          )
        );
      } else {
        dispatch(
          addProduct(
            product.id,
            product.name,
            product.mainImg,
            product.salePrice
          )
        );
      }
      if (deactive !== undefined) {
        deactive(true);
      }
    }
  }

  return (
    <Button onClick={handleClic} padding="10px" width="auto">
      {cart.existProduct(product) ? "REMOVE" : "ADD"} TO CART
    </Button>
  );
};

export default AddtoCart;
