import React from 'react'
import styles from "./ReferenciasHero.module.css"
import grow from "../../../assets/pexels/referencias.jpg"

const ReferenciasHero = () => {
    return (
        <header className={styles.headerHero}>
            <img className={styles.imgHero} src={grow} alt="Máquina de escribir, haciendo referencia al periódico"/>
        </header>
    )
}

export default ReferenciasHero
