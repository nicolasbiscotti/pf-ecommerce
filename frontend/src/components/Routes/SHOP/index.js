import styles from "./index.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../../redux/reducers/products/actions";
import BigCont from "./Containers/BigCont";
import Filterbar from "./Containers/Filterbar";

export default function Shop(){
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.products.products)

    useEffect(()=>{
        dispatch(fetchAllProducts());
    },[])
    
    console.log(products)
    return (
        <div className={styles.shop}>
            <Filterbar/>
            <BigCont products={products}/>
        </div>
    )
}