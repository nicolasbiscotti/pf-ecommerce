import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../../redux/reducers/cart/actions";
import { Button } from "../button/Button";

const AddtoCart = function({product,count,deactive}){
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const [word,setWord] = useState(cart.existProduct(product)?"REMOVE":"ADD");
    const [reload,setReload] = useState(false);

    useEffect(()=>{
        setWord(cart.existProduct(product)?"REMOVE":"ADD")
        setReload(false)
    },[reload,cart,product])

    function handleClic(e){
        if(cart.existProduct(product)){
            dispatch(deleteProduct(product.id));
            if(deactive!==undefined){
                deactive(false);
            }
        }else{
            if(count!==undefined){
                dispatch(addProduct(product.id,product.name,product.mainImg,product.salePrice,count));
            }else{
                dispatch(addProduct(product.id,product.name,product.mainImg,product.salePrice));
            }
            if(deactive!==undefined){
                deactive(true)
            }
        }
        setReload(true)
    }

    return (
        <Button onClick={handleClic}>
            {word} TO CART
        </Button>
    )
}

export default AddtoCart;