import React from 'react'
import styles from "./spin.module.css"

const Spin = () => {
    return (
        <div className={styles.container}>
            <div style={{marginTop: "6rem"}} className={styles.spinDiv} />
        </div>
    )
}

export default Spin
