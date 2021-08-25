import React from 'react'
import {Data} from "./data/data"
import styles from "./Acord.module.css"
import {IconContext} from "react-icons"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import { useState } from 'react'

const Acord = () => {
    const [acordeon, setAcordeon]=useState(false)

    const toggle=(index)=>{
        if (acordeon === index){
            //if acordeon ya está activo, lo cierra
            return setAcordeon(null)
        }
        setAcordeon(index)
    }

    return (
        <IconContext.Provider value={{color: "#fff", size: "25px"}}>
            { /*<div className={styles.accordionSection}> */ }
                <div className={styles.container}>
                <span className={styles.spanTitle}>Datos de importancia 😊</span>
                    {Data.map((item, index)=>{
                        return (
                            <>
                                <div className={styles.wrap} onClick={()=>toggle(index)} key={index}>
                                    <h1 className={styles.title}>
                                        {item.name}
                                    </h1>
                                    <span className={styles.spanIcon}>{acordeon === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                                </div>
                                {acordeon === index ? (
                                    <div className={styles.contenido}>
                                        <h2 className={styles.contentH2}>
                                            {item.titulo}
                                        </h2>
                                        <p className={styles.contentP}>
                                            {item.p}
                                            <br />
                                            {item.p2}
                                            <br />
                                            {item.p3}
                                            <br />
                                            {item.p4}
                                        </p>
                                        <button className={styles.btnAcord}>
                                            {item.btnValue}
                                        </button>
                                    </div>
                                ) : null}
                            </>            
                        )
                    })}
                </div>
           {/*</div>*/}
        </IconContext.Provider>
    )
}

export default Acord
