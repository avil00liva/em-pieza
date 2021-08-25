import React from 'react'
import styles from "./EjerciciosEjemplo.module.css"
import equilibrio from "../../assets/pexels/equilibrio.jpg"
import stretch from "../../assets/pexels/estiramientos1920.jpg"
import fuerza from "../../assets/pexels/fuerza.jpg"
import EjemplosEquilibrio from './EjemplosEquilibrio'
import EjemplosVarios from './EjemplosVarios'
import EjemplosFuerza from './EjemplosFuerza'

const EjerciciosEjemplo = () => {

    return (
        <div className={styles.anuncioContainer}>
                <section className={styles.sectEjemplos}>
                    <h2 className={styles.h2Ejemplos}>Ejercicios simples que puedes hacer en tu hogar</h2>
                    <p className={styles.pEjemplos}>A continuación se listarán los distintos tipos de ejercicios que puedes realizar para hacer mejor tu fuerza, equilibrio y movilidad:</p>
                    <ul className={styles.ulEjemplos} key="5678">
                        {/*EJERCICIOS DE EQUILIBRIO*/}
                        <li className={styles.liEjemplos}>
                            <h3 className={styles.h3LiEjemplos}>Ejercicios de equilibrio</h3>
                            <img src={equilibrio} className={styles.imgLiEjemplos} alt="Piedras acomododas una encima de otra"/>
                            {/*EJERCICIOS DE EQUILIBRIO FIN*/}
                            <EjemplosEquilibrio />
                            {/*EJERCICIOS DE MOVILIDAD Y FUERZA*/}
                        </li>

                        <li className={styles.liEjemplos}>
                            <h3 className={styles.h3LiEjemplos}>Ejercicios de movilidad y estiramiento</h3>
                            <img src={stretch} className={styles.imgLiEjemplos} alt="Personas realizando estiraciones"/>
                            <EjemplosVarios />
                        </li>

                        <li className={styles.liEjemplos}>
                            <h3 className={styles.h3LiEjemplos}>Ejercicios de fuerza</h3>
                            <img src={fuerza} className={styles.imgLiEjemplos} alt="Persona ejercitando con una mancuerna"/>
                            <EjemplosFuerza />
                        </li>
                    </ul>
                </section>
        </div>
    )
}

export default EjerciciosEjemplo
