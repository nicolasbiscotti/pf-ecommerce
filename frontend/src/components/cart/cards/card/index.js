import React from "react";
import { deleteProduct } from "../../../../redux/reducers/cart/actions";
import { Cardstyled } from "./styles";
import { useDispatch } from "react-redux";

const Card = function({idProduct,name,img,price,count}){
    const dispatch = useDispatch();

    const handleClose = function(){
        dispatch(deleteProduct(idProduct))
    }

    return (
        <Cardstyled>
            <section>
                <span onClick={handleClose}>x</span>
            </section>
            <section>
                <img src={img} alt="product-img" />
                <h2 className="name">{name}</h2>
                <span>${price} x {count}</span>
            </section>
        </Cardstyled>
    )
}

export default Card;