import React from "react";
import styles from "./index.module.scss";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.services__block}>
          <h2 className={styles.services__blockTitle}>НАШИ УСЛУГИ</h2>
          <hr className={styles.services__hr} />

          <div className={styles.services__blockItems}>
            <div className={styles.services__blockItem}>
              <h2 className={styles.services__blockText}>SMM</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>
                  Продвижение бизнеса/блогеров
                </li>
                <li className={styles.services__blockItemDesc}>
                  SMM стратегия
                </li>
                <li className={styles.services__blockItemDesc}>
                  Таргетированная реклама
                </li>
              </ul>
            </div>

            <div className={styles.services__blockItem2}>
              <h2 className={styles.services__blockText}>DESIGN</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>
                  Веб-дизайн сайтов
                </li>
                <li className={styles.services__blockItemDesc}>Моушн-дизайн</li>
                <li className={styles.services__blockItemDesc}>
                  Графический дизайн
                </li>
                <li className={styles.services__blockItemDesc}>
                  Разработка брендбуков
                </li>
                <li className={styles.services__blockItemDesc}>
                  Дизайн логотипов, презентаций и коммерческих предложений
                </li>
              </ul>
            </div>

            <div className={styles.services__blockItem3}>
              <h2 className={styles.services__blockText}>PRODUCING</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>
                  Упаковка, создание онлайн-курсов с нуля, проведение вебинаров,
                  мастер-классов, марафонов и форумов
                </li>
                <li className={styles.services__blockItemDesc}>
                  Разработка, внедрение и поддержка
                </li>
              </ul>
            </div>

            <div className={styles.services__blockItem4}>
              <h2 className={styles.services__blockText}>ADVERT</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>
                  Настройка, оптимизация рекламных компаний
                </li>
                <li className={styles.services__blockItemDesc}>
                  Таргетированная реклама в TikTok, YouTube
                </li>
                <li className={styles.services__blockItemDesc}>
                  Контекстная реклама
                </li>
                <li className={styles.services__blockItemDesc}>
                  Создание Landing page
                </li>
              </ul>
            </div>

            <div className={styles.services__blockItem5}>
              <h2 className={styles.services__blockText}>MARKETING</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>SWOT анализ</li>
                <li className={styles.services__blockItemDesc}>Анализ рынка</li>
                <li className={styles.services__blockItemDesc}>
                  Маркетинговое сопровождение
                </li>
                <li className={styles.services__blockItemDesc}>PR</li>
              </ul>
            </div>
            
            <div className={styles.services__blockItem6}>
              <h2 className={styles.services__blockText}>PRODUCTING</h2>

              <ul className={styles.services__blockItemDescreption}>
                <li className={styles.services__blockItemDesc}>
                  Проведение фотосъемок
                </li>
                <li className={styles.services__blockItemDesc}>
                  Создание рекламных роликов
                </li>
                <li className={styles.services__blockItemDesc}>
                  Разработка, внедрение и поддержка AR масок для Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
