import styles from "./NoticiasHero.module.css"
import news from "../../assets/pexels/news1920.jpg"

const NoticiasHero = () => {
    return (
        <header className={styles.headerHero}>
            <img className={styles.imgHero} src={news} alt="Máquina de escribir, haciendo referencia al periódico"/>
        </header>
    )
}

export default NoticiasHero