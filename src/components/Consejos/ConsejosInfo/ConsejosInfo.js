import React from 'react'
import styles from "./ConsejosInfo.module.css"
import ConsejosList from './ConsejosList'

const ConsejosInfo = () => {
    return (
        <div className={styles.container}>
            <p className={styles.container__texto}>
                <span className={styles.container__span}>Convivir con EM</span>: 
                se debe ser positivo, hacer ejercicio físico con frecuencia y participar en actividades de grupo, son algunos de los consejos más frecuentes pero a la vez más importantes que tienes que tener en cuenta durante el día.
            </p>
            <ConsejosList />
        </div>
    )
}

export default ConsejosInfo
