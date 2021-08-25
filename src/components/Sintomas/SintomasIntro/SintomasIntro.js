import React from 'react'
import styles from "./SintomasIntro.module.css"

const SintomasIntro = () => {
    return (
        <div className={styles.introContainer}>
            <p className={styles.pIntro}>"Los signos y síntomas de la esclerosis múltiple varían mucho según la magnitud de la lesión a los nervios y cuáles de ellos están afectados. Algunas personas con esclerosis múltiple grave pueden perder la capacidad de caminar sin ayuda o de caminar por completo, mientras que otras pueden experimentar largos períodos de remisión sin que aparezca ningún síntoma nuevo."</p>
            <a className={styles.address} href="https://www.mayoclinic.org/es-es/diseases-conditions/multiple-sclerosis/symptoms-causes/syc-20350269" target="_blank" rel="noopener noreferrer">ver mas</a>
        </div>
    )
}

export default SintomasIntro
