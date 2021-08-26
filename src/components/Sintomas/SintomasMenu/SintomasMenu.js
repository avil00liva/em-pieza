import React from 'react'
import styles from "./SintomasMenu.module.css"
import SintomasCard from '../SintomasCard/SintomasCard'
import {cards1,cards3} from "../SintomasCard/SintomasData"

const SintomasMenu = () => {

    return (
        <div className={styles.menuContainer}>
            <SintomasCard cards={cards1}/>
            <SintomasCard cards={cards3}/>
        </div>
    )
}

export default SintomasMenu
