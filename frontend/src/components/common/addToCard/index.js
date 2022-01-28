import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/reducers/cart/actions";
import { Button } from "../button/Button";

const AddtoCart = function({product}){
    const dispatch = useDispatch();

    function handleClic(e){
        dispatch(addProduct(product.id,product.salePrice))
    }

    return (
        <Button onClick={handleClic}>
            ADD TO CART
        </Button>
    )
}

export default AddtoCart;