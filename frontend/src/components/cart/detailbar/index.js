import React from "react";
import { DetailbarStyled } from "./styles";

const Detailtbar = function({cart}){
    return (
        <DetailbarStyled>
            <ul>
                <li key={0}>Subtotal: ${cart.getSubtotalPrice()}</li>
                <li key={1}>Shipping: $7.00</li>
            </ul>
        </DetailbarStyled>
    )
}

export default Detailtbar;