import React from "react";
import { useDispatch } from "react-redux"
import { fetchAllCategories, fetchAllProducts } from "../../../redux/reducers/products/actions";
import BigCont from "./Containers/BigCont/BigCont";
import Filterbar from "./Containers/Filterbar/Filterbar";
import { ShopStyled } from "./styles";

export default function Shop(){
    const dispatch=useDispatch();

    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());

    return (
        <ShopStyled>
            <Filterbar/>
            <BigCont/>
        </ShopStyled>
    )
}