import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../../redux/reducers/filters/actions";
import { PaginnerStyled } from "./PaginnerStyled";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function Paginner(){
    const pageCount = useSelector((state)=>state.products.isLoading?null:state.products.products.pageCount) || 0;
    const page = useSelector((state)=>state.products.isLoading?null:state.products.products.page) || 0;
    const dispatch = useDispatch();

    const handlePreviusPage = function(e){
        if(pageCount>0){
            if(page===0){
                dispatch(changePage(pageCount-1))
            }else{
                dispatch(changePage(page-1))
            }
        }
    }

    const handleNextPage = function(e){
        if(pageCount>0){
            if((page+1)===pageCount){
                dispatch(changePage(0))
            }else{
                dispatch(changePage(page+1))
            }
        }
    }

    return (
        <PaginnerStyled>
            <AiFillCaretLeft onClick={handlePreviusPage} />
            <span>Showing page {pageCount!==0?(page+1):page}  of  {pageCount} </span>
            <AiFillCaretRight onClick={handleNextPage} />
        </PaginnerStyled>
    )
}