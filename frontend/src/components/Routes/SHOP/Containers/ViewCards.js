import React from "react";
import ProductCard from "../../../common/Productcard";

export default function Viewcards({products}){
    if(products.length>0){
        return (
            <div>
                {products.map((p)=><ProductCard product={p}/>)}
            </div>
        )
    }else{
        return (
            <div>
                Aun no
            </div>
        )
    }
    
}