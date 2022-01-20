import React from "react";
import Categories from "../Comp/Categories";
import Filter from "../Comp/Filter";
import { FilterbarStyled } from "../styles";

export default function Filterbar(){
    return (
        <FilterbarStyled>
            {/* Esto va a la izquierda */}
            <Categories/>
            <Filter/>
        </FilterbarStyled>
    )
}