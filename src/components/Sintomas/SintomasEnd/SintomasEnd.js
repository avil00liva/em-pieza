import React from 'react'
import styles from "./SintomasEnd.module.css"
import tmasks from "../../../assets/tmasks.png"

const SintomasEnd = () => {
    return (
        <div className={styles.containerEnd}>
            <div className={styles.contentEnd}>
                <h3 className={styles.h3End}>La enfermedad de las mil caras</h3>
                <p className={styles.pEnd}>Como lo habrás notado la esclerosis múltiple es una enfermedad que presenta una extensa variedad de síntomas, los cuales se pueden presentar en una persona o no.<br /> Procura siempre estar al tanto de tu condición tanto física como mental.</p>
            </div>
            {/*<img className={styles.imgEnd} src={tmasks} alt="Imagen de ilustración máscara" />*/}
            <div className={styles.circle}>
                <img className={`${styles.imgEnd} ${styles.mHpp}`} src={tmasks} alt="Imagen de ilustración máscara" />
                <img className={`${styles.imgEnd} ${styles.mSad}`} src={tmasks} alt="Imagen de ilustración máscara" />
            </div>
        </div>
    )
}

export default SintomasEnd
