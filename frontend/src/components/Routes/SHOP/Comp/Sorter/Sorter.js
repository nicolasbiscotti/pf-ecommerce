import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeSort } from "../../../../../redux/reducers/filters/actions";
import { SorterStyled } from "./SorterStyled";

export default function Sorter(){
    const nproduct=useSelector((state)=>state.products.isLoading?0:state.products.products.productCount);
    const sort=useSelector((state)=>state.filters.isDefault&&state.filters.sort===undefined?[false,null]:[true,state.filters.sort]);
    const dispatch=useDispatch();

    const [sorted,setSorted]=useState({
        sort:sort[0],
        cheap:sort[0]&&sort[1]==='cheap'?true:false,
        expensive:sort[0]&&sort[1]==='expensive'?true:false
    })

    function handleSelect(e){
        setSorted({
            sort:true,
            cheap:e.target.value==='cheap'?true:false,
            expensive:e.target.value==='expensive'?true:false,
        })
        dispatch(selectTypeSort(e.target.value))
    }

    return (
        <SorterStyled>
            <span>There are {nproduct?nproduct:0} products</span>
            <div>
                <span>Sort By: </span>
                <select name='sort' onChange={handleSelect}>
                    <option disabled={true} value={false} selected={sorted.sort?false:true}>Select one</option>
                    <option value='cheap' selected={sorted.cheap?true:false}>Price, low to high</option>
                    <option value='expensive' selected={sorted.expensive?true:false}>Price, high to low</option>
                </select>
            </div>
        </SorterStyled>
    )
}