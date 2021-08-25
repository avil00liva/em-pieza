import React from 'react'
import styles from "./EjerciciosEjemplo.module.css"
import { EjerData2 } from './EjerData'

const EjemplosVarios = () => {
    return (
        <>
        {
            EjerData2.map((item)=>{
                return (
                    <div className={styles.divLiEjemplos} key={item.id}>
                        <ul className={styles.ulEquilibrio} key={item.id}>
                            <li className={styles.liEquilibrio}>
                                <h3 className={styles.h3LiEquilibrio}>{item.h3Title}</h3>
                            </li>
                            <li className={styles.liEquilibrio}><span className={styles.spanLiEquilibrio}>{item.spanEj1}</span>{item.pText1}</li>
                            <li className={styles.liEquilibrio}><span className={styles.spanLiEquilibrio}>{item.spanEj2}</span>{item.pText2}</li>
                            <li className={styles.liEquilibrio}><span className={styles.spanLiEquilibrio}>{item.spanEj3}</span>{item.pText3}</li>
                            <li className={styles.liEquilibrio}><span className={styles.spanLiEquilibrio}>{item.spanEj4}</span>{item.pText4}<br /><br />{item.pText4br}<br /><br />{item.pText4br2}</li>
                        </ul>
                    </div>
                )
            })
        }
        </>
    )
}

export default EjemplosVarios
