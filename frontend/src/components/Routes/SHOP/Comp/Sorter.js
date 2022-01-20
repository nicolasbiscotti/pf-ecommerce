import React from "react";
import { useSelector } from "react-redux";
import { SorterStyled } from "../styles";

export default function Sorter(){
    const nproduct=useSelector((state)=>state.products.isLoading?0:state.products.products.productCount);
    return (
        <SorterStyled>
            <span>There are {nproduct} products</span>
            <div>
                <span>Sort By: </span>
                <select>
                    <option value='cheap'>Price, low to high</option>
                    <option value='expensive'>Price, high to low</option>
                </select>
            </div>
        </SorterStyled>
    )
}