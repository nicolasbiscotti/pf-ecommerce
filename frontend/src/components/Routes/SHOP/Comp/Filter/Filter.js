import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterStyled } from "./FilterStyled";
import { setPriceRange } from "../../../../../redux/reducers/filters/actions"

const defaultMin=0;
const defaultMax=10000;

export default function Filter(){
    const rangePrice=useSelector((state)=>state.filters.isDefault?{default:true}:state.filters.priceRange) || {default:true}
    const dispatch=useDispatch();

    const [range,setRange]=useState({
        min:rangePrice.default?defaultMin:rangePrice.min,
        max:rangePrice.default?defaultMax:rangePrice.max
    });

    function handleChance(e){
        setRange({
            ...range,
            [e.target.id]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(setPriceRange(range))
    }


    return (
        <FilterStyled>
            <h1>Filter By</h1>
            <h3>Price</h3>
            <form onSubmit={handleSubmit}>
                <span>Min: </span>
                <input type={'number'} name='priceMin' value={range.min} onChange={handleChance} id="min" /><br/>
                <span>Max: </span>
                <input type={'number'} name='priceMax' value={range.max} onChange={handleChance} id="max" /><br/>
                <input type={'submit'} name='Get Products' value={'Get Products'} id='button' />
            </form>
        </FilterStyled>
    )
}