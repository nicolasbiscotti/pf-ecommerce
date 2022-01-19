import styles from "./index.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCategories, fetchAllProducts } from "../../../redux/reducers/products/actions";
import BigCont from "./Containers/BigCont";
import Filterbar from "./Containers/Filterbar";

export default function Shop(){
    const dispatch=useDispatch();

    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());

    return (
        <div className={styles.shop}>
            <Filterbar/>
            <BigCont/>
        </div>
    )
}