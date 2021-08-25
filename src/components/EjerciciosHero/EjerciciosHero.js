import React from 'react'
import styles from "./EjerciciosHero.module.css"
import walk2 from "../../assets/training/walk2.jpg"

const EjerciciosHero = () => {
    return (
        <header className={styles.headerHero}>
            <img className={styles.imgHero} src={walk2} alt="Persona preparando la caminata" />
        </header>
    )
}

export default EjerciciosHero
