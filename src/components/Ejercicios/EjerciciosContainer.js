import React from 'react'
import styles from "./EjerciciosContainer.module.css"
import roll1 from "../../assets/training/roll1.jpg"
import medi from "../../assets/training/meditation.png"
import EjerciciosEjemplo from '../EjerciciosExtras/EjerciciosEjemplo'

const EjerciciosContainer = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.titlePrinc}>Ejercicio y esclerosis múltiple</h1>
            <section className={styles.sectionPrinc}>
                <p className={styles.pPrinc}>El ejercicio físico si tienes esclerosis múltiple es muy beneficioso, tanto a nivel físico como psicológico, con lo cual, debe formar parte de la rutina diaria. Ayuda a mejorar las funciones que se han deteriorado como consecuencia de la inactividad y ayuda a manejar mejor los síntomas.</p>
                <img src={roll1} className={styles.imgSect} alt="Persona sosteniendo una botella hidratante y una colchoneta para ejercitar y/o yoga" />
            </section>
            <section className={styles.sectionPrinc}>
                <div className={styles.contentSect2}>
                    <h2 className={styles.h2Section2}>La importancia del ejercicio</h2>
                    <p className={styles.pSection2}>La realización regular de ejercicio físico te proporciona una mejoría a nivel de fuerza y equilibrio y también mejora el sistema cardiovascular y respiratorio. También ayuda a aliviar el estrés y a mejorar la sensación de la fatiga y el estado de ánimo.</p>
                </div>
                <img src={medi} className={styles.imgSect} alt="Ilustracion de persona en posición de meditación" />
            </section>
            <div className={styles.listaContainer}>
                <EjerciciosEjemplo />
            </div>
        </main>
    )
}

export default EjerciciosContainer
