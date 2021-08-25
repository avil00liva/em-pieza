import React, { useEffect, useState } from 'react'
import styles from "./Aviso.module.css"
import {AiFillCloseCircle} from "react-icons/ai"

const Aviso = () => {
    const [show, setShow]=useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3000);
    }, [])
    
    const toggle=()=>{
        setShow(false)
    }

    return (
        <>
            {show && (
            <div className={styles.blurContainer}>
                <div className={styles.avisoContainer}>
                    <i className={styles.avisoIcon} onClick={toggle}><AiFillCloseCircle /></i>
                    <h1 className={styles.avisoH1}>Aviso importante!!</h1>
                    <p className={styles.avisoP}>Esta es una página de ejemplo, no se pretende sustituir el conocimiento de un profesional, si en algún momento no se encuentra bien por favor no dude en buscar ayuda profesional.</p>
                </div>
            </div>
            )}
        </>
    )
}

export default Aviso
