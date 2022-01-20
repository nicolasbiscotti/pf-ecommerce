import React from "react";
import { useSelector } from "react-redux";
import { PaginnerStyled } from "./PaginnerStyled";

export default function Paginner(){
    const pageCount = useSelector((state)=>state.products.isLoading?null:state.products.products.pageCount);
    var page = useSelector((state)=>state.products.isLoading?null:state.products.products.page);

    page=page+1;

    return (
        <PaginnerStyled>
            <span>Showing page {page} of {pageCount} </span>
        </PaginnerStyled>
    )
}