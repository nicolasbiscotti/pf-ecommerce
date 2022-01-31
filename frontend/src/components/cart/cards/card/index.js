import React from "react";
import { deleteProduct } from "../../../../redux/reducers/cart/actions";
import { Cardstyled } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = function({idProduct,name,img,price,count}){
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClose = function(){
        dispatch(deleteProduct(idProduct))
    }

    function redirect(){
        navigate(`/detailts/${idProduct}`);
    }

    return (
        <Cardstyled>
            <section className="close">
                <span onClick={handleClose}>x</span>
            </section>
            <section onClick={redirect}>
                <img src={img} alt="product-img" />
                <h2 className="name">{name}</h2>
                <span>${price} x {count}</span>
            </section>
        </Cardstyled>
    )
}

export default Card;