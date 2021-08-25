import React from 'react'
import styles from "./EjerciciosEnd.module.css"
import brainEjer from "../../assets/brainEjer.png"

const EjerciciosEnd = () => {
    return (
        <div className={styles.endContainer}>
            <div className={styles.endContent}>
                <p className={styles.pEnd}>Como puedes ver son ejercicios simples que puedes realizar de forma diaria o 3 veces por semana. Por favor siempre ten en cuenta tu estado y no te sobre exijas ya que puede traer daños a tu salud.</p>
                <img src={brainEjer} className={styles.imgEnd} alt="Ilustración de un cerebro" width="250px" height="250px"/>
            </div>
        </div>
    )
}

export default EjerciciosEnd
