import React, { useState } from 'react'
import styles from "./Tips.module.css"
import {TipsData} from "./TipsData"
import {FaLightbulb} from "react-icons/fa"
import {IoMdArrowDropdown} from "react-icons/io"
import { Link } from 'react-router-dom'

const Tips = () => {
    const [open, setOpen]=useState("false")

    const Show=()=>{
        setOpen(!open)
    }

    return (
        <div className={styles.anuncioContainer}>
            <h1 className={styles.h1Anuncio}>
                Tips rápidos! <i><FaLightbulb/></i>
            </h1>
            <div className={styles.divTip}>
                <div className={styles.acordTip}>
                    <h2 className={styles.h2Tip}>
                        Resonancia magnética
                    </h2>
                    <i className={styles.iconTip} onClick={Show}>
                        <IoMdArrowDropdown />
                    </i>
                    </div>
                <div className={open ? styles.contentTipactive : styles.contentTip}>
                    <h2>Tener en cuenta...</h2>
                    <ul key="12345">
                        {
                            TipsData.map((item)=>{
                                return(
                                        <li className={styles.liTip} key={item.id}>
                                            <span>{item.spanD}</span> 
                                            <p>{item.phar}</p>
                                        </li>
                                    )
                                })
                            }
                    </ul>
                    {/*<ul>
                        <li className={styles.liTip}>
                            <span>Comer bien antes</span> 
                            <p>Una buena comida ayuda a marcar las venas y así facilitar el proceso.</p>
                        </li>
                        <li className={styles.liTip}>
                            <span>Beber agua de forma moderada</span> 
                            <p>Mantenerse hidratado ayuda a marcar las venas y asi facilitar el proceso.
                            Pero no consumas demaciado porque no podras ir al baño una vez comience el estudio.</p>
                        </li>
                        <li className={styles.liTip}>
                            <span>Cierra los ojos y relájate</span>
                            <p>Piensa en las cosas que quieres hacer una vez termine la resonancia, canta o piensa en recuerdos agradable.</p>
                        </li>
                        <li className={styles.liTip}>
                            <span>Una manta</span> 
                            <p>Al estar en medio de una resonancia debemos permanecer quietos y es normal sentir frío, por eso es recomendable llevar una manta o pedir al enfermero/a que nos proporcione una.</p>
                        </li>
                        <li className={styles.liTip}>
                            <span>Ropa Cómoda</span> 
                            <p>Recuerda que no tienes que llevar metales encima: hebillas, pulseras, etc. Usar ropa ancha y medias siempre son una buena elección.</p>
                        </li>
                    </ul>*/}
                    <span className={styles.spanLink}>
                        <Link to="/consejos" className={styles.address}>Ver más tips</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Tips
