import React from "react";
import { useSelector } from "react-redux"; 
import { CartStyled } from "./styles";
import Cards from "./cards";
import Detailtbar from "./detailbar";

const Cart = function(){
    const cart = useSelector(state=>state.cart);

    console.log(cart)
    
    return (
        <CartStyled>
            <h1>SHOPPING CART</h1>
            <div>
                <Cards {...cart} />
                <Detailtbar />
            </div>
        </CartStyled>
    )
}

export default Cart;