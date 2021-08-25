import React from 'react'
import styles from "./ConsejosHero.module.css"
import imgHero from "../../../assets/pexels/sillon1920.jpg"

const ConsejosHero = () => {
    return (
        <header className={styles.consejosHero}>
            <img className={styles.imgHero} src={imgHero} alt="Sillón de color naranja, apartado de consejos" />
        </header>
    )
}

export default ConsejosHero
