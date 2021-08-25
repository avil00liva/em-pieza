import React from 'react'
import styles from "./ConsejosContent.module.css"
import train from "../../assets/train.png"

const ConsejosContent = () => {
    return (
        <header className={styles.headerHero}>
            <div>
                <h1 className={styles.heroH1}>
                    Consejos generales
                </h1>
                <p className={styles.pHero}>
                    A continuación se mostraran algunos consejos generales bastante efectivos.
                </p>
            </div>
            <img src={train} className={styles.imgHero} alt="Imagen explicative de la importancia que tiene el ejercicio físico" />
        </header>
    )
}

export default ConsejosContent
