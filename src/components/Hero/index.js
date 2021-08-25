import React from 'react'
import styles from "./Hero.module.css"
import brain from "../../assets/brain.png"
import TareasLink from '../Tareas/TareasAcc/TareasLink'
import TareasLinkRes from '../Tareas/TareasAccRes/TareasLinkRes'

const Hero = () => {
    return (
        <header className={styles.headerHero}>

            <div>
                <h1 className={styles.heroH1}>
                    Esclerosis Múltiple
                </h1>
                <p className={styles.pHero}>
                La esclerosis multiple (EM) es una enfermedad autoinmunitaria que afecta el cerebro y la médula espinal (sistema nervioso central).
                </p>
            </div>
            <img src={brain} className={styles.imgHero} alt="Imagen de cerebro" />
            <TareasLink />
            <TareasLinkRes />
        </header>
    )
}

export default Hero
