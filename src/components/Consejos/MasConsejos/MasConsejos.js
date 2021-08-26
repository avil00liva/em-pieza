import React, { useState } from "react";
import styles from "./MasConsejos.module.css";
import { IoMdArrowDropdown } from "react-icons/io";


const MasConsejos = ({acord}) => {
    const [show, setShow]=useState(true)
    const Mostrar=()=>{
        setShow(!show)
    }

  return (
        <div className={styles.anuncioContainer}>
                <div className={styles.divTip}>
                    <div className={styles.acordTip}>
                    <h2 className={styles.h2Tip}>{acord.title}</h2>
                    <i className={styles.iconTip} onClick={Mostrar}>
                        <IoMdArrowDropdown />
                    </i>
                </div>
                    <div className={show ? styles.contentTipactive : styles.contentTip }>
                    <h2>Tener en cuenta...</h2>
                    <ul key="12345">
                        <li className={styles.liTip}>
                        <span>{acord.spanD}</span>
                        <p>{acord.phar}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD2}</span>
                        <p>{acord.phar2}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD3}</span>
                        <p>{acord.phar3}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD4}</span>
                        <p>{acord.phar4}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD5}</span>
                        <p>{acord.phar5}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD6}</span>
                        <p>{acord.phar6}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD7}</span>
                        <p>{acord.phar7}</p>
                        </li>
                        <li className={styles.liTip}>
                        <span>{acord.spanD8}</span>
                        <p>{acord.phar8}</p>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
  );
};

export default MasConsejos;
