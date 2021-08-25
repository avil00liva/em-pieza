import React from 'react'
import styles from "./NoticiasProx.module.css"

const NoticiasProx = () => {
    return (
        <div className={styles.containerProx} style={{padding: "1rem", boxSizing: "border-box"}}>
            <h1 className={styles.proxH1}>
                Nuevas noticias proximamente
            </h1>
            <div className={styles.spinDiv}></div>
        </div>
    )
}

export default NoticiasProx
