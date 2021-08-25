import React from 'react'
import styles from "./SintomasHero.module.css"
import sint from "../../../assets/pexels/sintomashero.jpg"


const SintomasHero = () => {
    return (
        <header className={styles.headerHero}>
            <img className={styles.imgHero} src={sint} alt="Máquina de escribir, haciendo referencia al periódico"/>
        </header>
    )
}

export default SintomasHero
