import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../common/Productcard";
import { ViewcardStyled } from "../styles";

export default function Viewcards(){
    const products=useSelector((state)=>state.products.isLoading?[]:state.products.products.products) || []
    
    if(products.length===0){
        return (
            <div>
                Aun no
            </div>
        )
    }else{
        return (
            <ViewcardStyled>
                {products.map((p,i)=><ProductCard product={p} key={i}/>)}
            </ViewcardStyled>
        )
    }
}