import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../../common/Productcard/index";
import { ViewcardStyled } from "./ViewCardStyled";

const Celda=function({array}){
    return (
        <tr>
            {array.map((p,i)=><td><ProductCard product={p} key={i}/></td>)}
        </tr>
    )
}
const Filas=function({array,nCeldsForRows}){
    let filas=[];
    let nRows=Math.ceil(array.length/nCeldsForRows)
    for(let i=0;i<nRows;i++){
        filas.push(array.slice(i*nCeldsForRows,(i+1)*nCeldsForRows))
    }
    return (
        <>
            {filas.map((e)=><Celda array={e}/>)}
        </>
    )
}

export default function Viewcards(){
    const products=useSelector((state)=>state.products.isLoading?[]:state.products.products.products) || []
    console.log(products);
    if(products.length===0){
        return (
            <div>
                <h1>Don't have products</h1>
            </div>
        )
    }else{
        return (
            <ViewcardStyled>
                <table>
                    <Filas array={products} nCeldsForRows={2}/>
                </table>
            </ViewcardStyled>
        )
    }
}