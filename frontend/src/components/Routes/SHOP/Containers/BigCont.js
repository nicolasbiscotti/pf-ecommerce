import styles from "./BigCont.module.css";
import React from "react";
import Descriptioner from "../Comp/Descriptioner";
import Paginner from "../Comp/Paginner";
import Sorter from "../Comp/Sorter";
import Viewcards from "./ViewCards";

export default function BigCont({products}){
    return (
        <div className={styles.bc}>
            Esto va a la derecha
            <Descriptioner/>
            <Sorter />
            <Viewcards products={products}/>
            <Paginner/>
        </div>
    )
}