import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import styles from "./ConsejosAcordTitle.module.css"

const ConsejosAcordTitle = () => {
    return (
        <div className={styles.anuncioContainer}>
            <h1 className={styles.h1Anuncio}>
                Más consejos!
                <i>
                <FaLightbulb />
                </i>
            </h1>
        </div>
    )
}

export default ConsejosAcordTitle