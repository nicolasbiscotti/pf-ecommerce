import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeSort } from "../../../../../redux/reducers/filters/actions";
import { SorterStyled } from "./SorterStyled";

export default function Sorter(){
    const nproduct=useSelector((state)=>state.products.isLoading?0:state.products.products.productCount);
    const dispatch=useDispatch();

    function handleSelect(e){
        dispatch(selectTypeSort(e.target.value))
    }

    return (
        <SorterStyled>
            <span>There are {nproduct?nproduct:0} products</span>
            <div>
                <span>Sort By: </span>
                <select name='sort' onChange={handleSelect} defaultValue={''}>
                    <option disabled={true} value={''}>Select one</option>
                    <option value='cheap'>Price, low to high</option>
                    <option value='expensive'>Price, high to low</option>
                </select>
            </div>
        </SorterStyled>
    )
}