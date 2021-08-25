import React from 'react'
import styles from "./NoticiasContent.module.css"
import { NoticiasData } from './NoticiasData'
import { Link } from 'react-router-dom'

const NoticiasContent = () => {

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
            {NoticiasData.map((item)=>{
                return (
                    <div className={styles.divNoticia} key={item.id}>
                        <img src={item.imgCard} className={styles.imgNoticia} alt="Imagen ilustrativa vacunación covid-19"/>
                        <div className={styles.divText}>
                            <h3 className={styles.h3Text}>Cuidados</h3>
                            <h1 className={styles.h1Text}>
                                <Link className={styles.address}  to="/noticias"/*to={`/noticia/${item.id}`}*/>{item.title}</Link> 
                            </h1>
                        </div>
                        <div className={styles.linkContainer}>
                            <h3 className={styles.spanText}><a href={item.nLink} className={styles.textA} target="_blank" rel="noopener noreferrer">noticia original</a></h3>
                            <span className={styles.spanText}>ver más</span>
                        </div>
                    </div>
                )
            })}
            {/* 
                <div className={styles.divNoticia}>
                    <img src={newsImg} className={styles.imgNoticia} alt="Imagen ilustrativa vacunación covid-19"/>
                    <div className={styles.divText}>
                        <h3 className={styles.h3Text}>Cuidados</h3>
                        <h1 className={styles.h1Text}>
                            <Link className={styles.address} to="/noticias">Vacunación Covid-19</Link> 
                        </h1>
                    </div>
                    <h3 className={styles.spanText}>Noticia original</h3>
                </div>

                <div className={styles.divNoticia}>
                    <img src={newsImg2} className={styles.imgNoticia} alt="Imagen ilustrativa vacunación covid-19"/>
                    <div className={styles.divText}>
                        <h3 className={styles.h3Text}>Cuidados</h3>
                        <h1 className={styles.h1Text}>
                            <Link className={styles.address} to="/noticias">Remielinización: diferentes ensayos</Link> 
                        </h1>
                    </div>
                    <h3 className={styles.spanText}>Noticia original</h3>
                </div>
            */}
            </main>
        </div>
    )
}

export default NoticiasContent
