import React from 'react'
import styles from "./Sintomas.module.css"
import SintomasEnd from './SintomasEnd/SintomasEnd'
import SintomasHero from './SintomasHero/SintomasHero'
import SintomasIntro from './SintomasIntro/SintomasIntro'
import SintomasMenu from './SintomasMenu/SintomasMenu'

const Sintomas = () => {
    return (
        <div className={styles.container}>
            <SintomasHero />
            <h1 className={styles.title}>Síntomas</h1>
            <SintomasIntro />
            <main className={styles.mainSect}>
                <SintomasMenu />
            </main>
            <section className={styles.sectEnd}>
                <SintomasEnd />
            </section>
        </div>
    )
}

export default Sintomas
