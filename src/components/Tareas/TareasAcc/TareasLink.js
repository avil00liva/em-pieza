import React from 'react'
import styles from './TareasLink.module.css'
import {FaTasks} from "react-icons/fa"
import { Link } from 'react-router-dom'

const TareasLink = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.tooltip}>Añade tareas</div>
            <Link to="/tareas" className={styles.taskIcon}><FaTasks /></Link> 
        </div>
        </>
    )
}

export default TareasLink
