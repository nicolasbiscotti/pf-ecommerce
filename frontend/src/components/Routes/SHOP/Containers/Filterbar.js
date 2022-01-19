import React from "react";
import styles from "./Filterbar.module.css";
import Categories from "../Comp/Categories";
import Filter from "../Comp/Filter";

export default function Filterbar(){
    return (
        <div className={styles.fb}>
            Esto va a la izquierda
            <Categories/>
            <Filter/>
        </div>
    )
}