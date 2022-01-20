import React from "react";
import Descriptioner from "../../Comp/Descriptioner/Descriptioner";
import Paginner from "../../Comp/Paginner/Paginner";
import Sorter from "../../Comp/Sorter/Sorter";
import { BigContStyled } from "./BigContStyled";
import Viewcards from "../ViewCards/ViewCards";

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