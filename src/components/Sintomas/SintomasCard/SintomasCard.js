import React, { useState } from 'react'
import styles from "./SintomasCard.module.css"

const SintomasCard = ({cards}) => {
    const [show, setShow]=useState(true)
    const Mostrar=()=>{
        setShow(!show)
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.row} style={{backgroundColor: `${cards.bgColor}`}} onClick={Mostrar}>
            <i className={styles.iconMenu} title="Muscular">{cards.icon}</i>
            <h3 className={styles.cardH3}>{cards.cH3}</h3> 
            </div>
            <div className={show ? styles.cardContentActive : styles.cardContent} onClick={Mostrar}>
                <h1 className={styles.cardTitle}>{cards.cH3}</h1>
                <ul className={styles.cardList} key="9865">
                    <li className={styles.cardItem}><p className={styles.cardP}>{cards.li1}</p></li>
                    <li className={styles.cardItem}><p className={styles.cardP}>{cards.li2}</p></li>
                    <li className={styles.cardItem}><p className={styles.cardP}>{cards.li3}</p></li>
                    <li className={styles.cardItem}><p className={styles.cardP}>{cards.li4}</p></li>
                    <li className={styles.cardItem}><p className={styles.cardP}>{cards.li5}</p></li>
                    {cards.li6 ? (
                        <>
                        <li className={styles.cardItem}><p className={styles.cardP}>{cards.li6}</p></li>
                        <li className={styles.cardItem}><p className={styles.cardP}>{cards.li7}</p></li>
                        <li className={styles.cardItem}><p className={styles.cardP}>{cards.li8}</p></li>
                        </>
                    ) : " "}
                </ul>
            </div>
        </div>
    )
}

export default SintomasCard
