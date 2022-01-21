import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesStyled } from "./CategoryStyle";
import { selectCategory } from "../../../../../redux/reducers/filters/actions";

export default function Categories(){
    const categories=useSelector((state)=>state.products.categories);
    const dispatch=useDispatch()
    
    function clicCategory(e){
        const id=Number(e.target.id);
        if(id===-1){
            dispatch(selectCategory({id:-1,name:'All'}));
        }else{
            dispatch(selectCategory(categories[id]))
        }
    }

    return (
        <CategoriesStyled>
            <h1>Categories</h1>
            <h3 onClick={clicCategory} id={-1}>All products</h3>
            {categories.map((c,i)=><h3 key={i} onClick={clicCategory} id={i}>{c.name[0].toUpperCase()+c.name.slice(1)}</h3>)}
        </CategoriesStyled>
    )
}