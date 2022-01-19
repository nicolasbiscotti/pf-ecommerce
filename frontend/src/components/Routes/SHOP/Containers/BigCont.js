import React from "react";
import Descriptioner from "../Comp/Descriptioner";
import Paginner from "../Comp/Paginner";
import Sorter from "../Comp/Sorter";
import { BigContStyled } from "../styles";
import Viewcards from "./ViewCards";

export default function BigCont(){
    return (
        <BigContStyled>
            <Descriptioner/>
            <Sorter />
            <Viewcards/>
            <Paginner/>
        </BigContStyled>
    )
}