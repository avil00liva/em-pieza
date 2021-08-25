import React from 'react'
import styles from "./Elementos.module.css"
import {elements} from "./ElementosData"
import { Link } from 'react-router-dom' 

const Elementos = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.btnElements}>
            {elements.map((item, index)=>{
                    return (
                        <div className={styles.btnCard} key={index}>
                            <Link className={styles.link} to={item.path}>
                                <img className={styles.imgBtn} src={item.elementImg} alt="Boton de Menú de Actividades" />
                                <span>{item.info}</span>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}

export default Elementos
