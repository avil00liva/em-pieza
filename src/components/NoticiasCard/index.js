import React from "react";
import styles from "./NoticiasCard.module.css";
import {CardData} from "./CardData"
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
      <div className={styles.maxContainer}>
        <div className={styles.container}>
                <h1 className={styles.newsTitle}>
                    Noticias relevantes 😊
                </h1>
                <div className={styles.newsPrinc}>
                    <div className={styles.newsContent}>
                        <h1 className={styles.newsH1}>
                            Vacunación Covid-19
                        </h1>
                        <p className={styles.newsP}>
                            Desde EMA (Esclerosis Múltiple Argentina) comentan: 'Se recomienda brindar información a los pacientes sobre el beneficio que ofrece la vacunación en relación al potencial riesgo de recibirla'...
                        </p>
                        <Link className={styles.address} to="/noticias">
                            Ver más
                        </Link>
                    </div>
                </div>

                <aside className={styles.asideContainer} style={{marginTop: "1rem"}}>
                {CardData.map((item, index)=>{
                    return (
                        <div className={styles.newsSecond} style={{backgroundImage: `url(${item.imgCard})`}} key={index}>
                        <div className={styles.newsContent}>
                            <h1 className={styles.newsAsH1}>
                                {item.title}
                            </h1>
                            <p className={styles.newsAsP}>
                                {item.phar}
                            </p>
                            <Link className={styles.address} to="/noticias">
                                Ver más
                            </Link>
                        </div>
                    </div>
                    )
                })}

{/*
                    <div className={styles.newsSecond}>
                        <div className={styles.newsContent}>
                            <h1 className={styles.newsAsH1}>
                                Noticia Secundaria 2
                            </h1>
                            <p className={styles.newsAsP}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque voluptatum deserunt provident ipsum aperiam consequuntur eveniet non architecto aliquam architecto aliquam architecto'...
                            </p>
                            <Link className={styles.address} to="/noticias">
                                Ver más
                            </Link>
                        </div>
                    </div>

                    <div className={styles.newsSecond}>
                        <div className={styles.newsContent}>
                            <h1 className={styles.newsAsH1}>
                                Noticia Secundaria 3
                            </h1>
                            <p className={styles.newsAsP}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque voluptatum deserunt provident ipsum aperiam consequuntur eveniet non architecto aliquam architecto aliquam architecto'...
                            </p>
                            <Link className={styles.address} to="/noticias">
                                Ver más
                            </Link>
                        </div>
                    </div>
*/}
                </aside>
            </div>
        </div>
  );
};

export default NewsCard;
