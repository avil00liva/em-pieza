import React from 'react'
import styles from "./ConsejosInfo.module.css"
import {ListData} from "./ListData"


const ConsejosList = () => {
    return (
        <ul className={styles.container__ul} key="12345">
            {
                ListData.map((item)=>{
                    return (
                        <li className={styles.container__li} key={item.id}>
                            <div className={styles.li__content}>
                                <h2 className={styles.li__title}>
                                    {item.title}
                                </h2>
                                <p className={styles.li__texto}>
                                    {item.phar}
                                </p>
                            </div>
                            <i className={styles.li__icon}>{item.icon}</i>
                        </li>
                    )
                })
            }
           {/*<li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        Ejercicio moderado a diario
                    </h2>
                    <p className={styles.li__texto}>
                        Es la mejor manera de mantener la salud física, emocional y de prevenir otras enfermedades. Se recomienda hacer algunos ejercicios de fuerza, estiramientos, yoga y tai-chi tambien son muy recomendables.
                    </p>
                </div>
                <i className={styles.li__icon}><BiSwim /></i>
           </li>
            <li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        Evitar el sobrepeso
                    </h2>
                    <p className={styles.li__texto}>
                        Seguir una dieta equilibrada y mantenerse activo: aumentar el consumo de frutas y verduras, moderar las porciones de comida, algunas recomendaciones extras, no consumir mucha azúcar y/o sal.
                    </p>
                </div>
                <i className={styles.li__icon}><IoFastFoodSharp /></i>
            </li>
            <li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        Actividades intelectuales o cognitivas
                    </h2>
                    <p className={styles.li__texto}>
                        Mantén la mente ágil, lee, aprendre algun idioma, juega juegos de memoria o asociación.
                    </p>
                </div>
                <i className={styles.li__icon}><GiRead /></i>
            </li>
            <li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        Reúnete con amigos, participa en actividades
                    </h2>
                    <p className={styles.li__texto}>
                        Tener una buena vida social es muy importante a la hora de mantener una salud mental buena.
                    </p>
                </div>
                <i className={styles.li__icon}><HiUserGroup /></i>
            </li>
            <li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        No fumar, ni beber
                    </h2>
                    <p className={styles.li__texto}>
                        El alcohol y el tabaco podrían acelerar los síntomas de la EM.
                    </p>
                </div>
                <i className={styles.li__icon}><BiDrink /></i>
            </li>
            <li className={styles.container__li}>
                <div className={styles.li__content}>
                    <h2 className={styles.li__title}>
                        Mantente positivo
                    </h2>
                    <p className={styles.li__texto}>
                        Algunos dias pueden ser duros, pueden sentirse pesados y sofocantes pero recuerda que eres muchos más fuerte que la enfermedad, mantén la mirada en alto, no estas solo!!.
                    </p>
                </div>
                <i className={styles.li__icon}><GiTwirlyFlower /></i>
            </li>*/}
        </ul>
    )
}

export default ConsejosList
