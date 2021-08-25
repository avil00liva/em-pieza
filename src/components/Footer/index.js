import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router-dom'
import {FaInstagram, FaTwitterSquare, FaFacebookSquare, FaLinkedin} from "react-icons/fa"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer>
                <div className={styles.vinculosContenedor}>
                    <div className={styles.redes}>
                        <i className={styles.iconRedes}><FaFacebookSquare /></i>
                        <i className={styles.iconRedes}><FaInstagram /></i>
                        <i className={styles.iconRedes}><FaLinkedin /></i>
                        <i className={styles.iconRedes}><FaTwitterSquare /></i>
                    </div>
                    <div className={styles.vinculos}>
                        <Link className={styles.address} to="/">Sobre nosotros</Link>
                        <Link className={styles.address} to="/">Ubicación</Link>
                        <Link className={styles.address} to="/">Términos de uso</Link>
                        <Link className={styles.address} to="/">Contacto</Link>
                    </div>
                </div>
                <span className={styles.logo}>
                    EM-pieza
                    <img src={logo} alt="Logo de la página, un rompecabezas"/>
                </span>
            </footer>
        </div>
    )
}

export default Footer
