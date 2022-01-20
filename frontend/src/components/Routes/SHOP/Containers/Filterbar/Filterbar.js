import React from "react";
import Categories from "../../Comp/Category/Categories";
import Filter from "../../Comp/Filter/Filter";
import { FilterbarStyled } from "./FilterbarStyled";

export default function Filterbar(){
    return (
        <FilterbarStyled>
            {/* Esto va a la izquierda */}
            <Categories/>
            <Filter/>
        </FilterbarStyled>
    )
}