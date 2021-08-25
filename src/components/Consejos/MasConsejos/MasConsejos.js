import React, { useState } from "react";
import styles from "./MasConsejos.module.css";
import { MasConsejosData } from "./MasConsejosData";
import { FaLightbulb } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const MasConsejos = () => {
  const [open, setOpen]= useState(false);

  const toggle=(index)=>{
    if (open === index){
        //if acordeon ya está activo, lo cierra
        return setOpen(null)
    }
    setOpen(index)
}

  return (
    <div className={styles.anuncioContainer}>
        <h1 className={styles.h1Anuncio}>
            Más consejos!
            <i>
            <FaLightbulb />
            </i>
        </h1>
        {MasConsejosData.map((item, index) => {
            return (
            <div className={styles.divTip} key={index}>
                <div className={styles.acordTip}>
                <h2 className={styles.h2Tip}>{item.title}</h2>
                <i className={styles.iconTip} onClick={()=>toggle(index)}>
                    <IoMdArrowDropdown />
                </i>
                </div>
                {open === index ? (
                    <div className={styles.contentTip}>
                    <h2>Tener en cuenta...</h2>
                    <ul key="12345">
                        <li className={styles.liTip}>
                        <span>{item.spanD}</span>
                        <p>{item.phar}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD2}</span>
                        <p>{item.phar2}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD3}</span>
                        <p>{item.phar3}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD4}</span>
                        <p>{item.phar4}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD5}</span>
                        <p>{item.phar5}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD6}</span>
                        <p>{item.phar6}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD7}</span>
                        <p>{item.phar7}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{item.spanD8}</span>
                        <p>{item.phar8}</p>
                        </li>
                    </ul>
                    </div>
                ) : null}
            </div>
            );
        })}
    </div>
  );
};

export default MasConsejos;
