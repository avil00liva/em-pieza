import React from 'react'
import styles from "./ReferenciasContent.module.css"
import ReferenciasHero from './ReferenciasHero/ReferenciasHero'
import instal from "../../assets/instagram-logo.png"

const ReferenciasContent = () => {
    return (
        <>
            <ReferenciasHero />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.refH1}>Referencias</h1>
                        <h2 className={styles.refH2}>Info tomada de: </h2>
                        <ul className={`${styles.list} ${styles.webs}`}>

                            <li>
                                <a className={styles.address} href="https://ema.org.ar/" target="_blank" rel="noopener noreferrer">EMA</a>
                            </li>
                            <li>
                                <a className={styles.address} href="https://www.observatorioesclerosismultiple.com" target="_blank" rel="noopener noreferrer">Observatorio esclerosis multiple</a>
                            </li>
                            <li>
                                <a className={styles.address} href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer">MayoClinic</a>
                            </li>

                        </ul>
                    <section className={styles.socialM}>
                            <h3>Redes sociales recomendadas: </h3>
                            <div className={styles.socialContent}>
                                <img className={styles.imgLogo} src={instal} alt="logo de la red social instagram" />
                                <span className={styles.socialSpan}>@esclero.amigos</span>
                            </div>
                            <div className={styles.socialContent}>
                                <img className={styles.imgLogo} src={instal} alt="logo de la red social instagram" />
                                <span className={styles.socialSpan}>@alcem.esclerosismultiple</span>
                            </div>
                            <div className={styles.socialContent}>
                                <img className={styles.imgLogo} src={instal} alt="logo de la red social instagram" />
                                <span className={styles.socialSpan}>@emstrongs</span>
                            </div>
                    </section>
                    </div>
                    <div className={styles.comentario}>
                        <h2 className={styles.comentH2}>Conclusi??n</h2>
                        <p className={styles.comentP}>Esta p??gina no busca reemplazar la opini??n de un profesional, por favor acude a tu m??dico/neur??logo de confianza. Esta p??gina fue creada para practicar el uso de React, y el desarrollo de PWA. Adem??s como paciente con esclerosis m??ltiple el informarme m??s sobre m?? condici??n me ayud?? bastante. Nunca se sabe quiz??s esta aplicaci??n pueda lanzarse de forma oficial en el futuro.</p>
                    </div>
            </div>
        </>
    )
}

export default ReferenciasContent
