import React from 'react'
import styles from "./TareasLinkRes.module.css"
import {FaTasks} from "react-icons/fa"
import { Link } from 'react-router-dom'

const TareasLinkRes = () => {
    return (
        <div className={styles.container}>
            <Link to="/tareas" className={styles.taskIcon}><span className={styles.taskSpan}>Añade Tareas</span><FaTasks className={styles.reactTaskIcon}/></Link> 
        </div>
    )
}

export default TareasLinkRes
