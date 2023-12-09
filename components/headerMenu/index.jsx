import React from "react";
import styles from "./index.module.scss";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function HeaderMenu() {
  const [value, setValue] = useState("");

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__left}>
          <div className={styles.header__sanbar}>
            <h2 className={styles.header__sanbarTitle}>SAN</h2>
            <h2 className={styles.header__sanbarTitle}>BER</h2>
          </div>

          <div className={styles.header__titleBlock}>
            <h2 className={styles.header__rightTitle}>
              SMM <br />
              АГЕНТСТВО <br />
              ПОЛНОГО <br />
              ЦИКЛА
            </h2>
            <p className={styles.header__rightDesc}>
              Находим решения под ваши ЗАДАЧИ. Качественно упакуем, продвинем и
              поможем добиться результата! Наша цель – это Ваш успех!
            </p>
          </div>
        </div>

        <div className={styles.header__right}>
          <p className={styles.header__leftDesc}>
            Sanber – те самые крутые ребята, которые внедряются в ваш бизнес,
            готовы провести тщательный анализ и найти лучшее решение для вашего
            бизнеса. Мы готовы реализовать все ваши смелые идеи и вывести ваш
            профиль на новый уровень!
          </p>

          <div className={styles.header__rightBlock}>
            <p className={styles.header__rightBlockDesc}>
              Получите консультацию и коммерческое предложение в 2 клика,
              оставьте заявку!
            </p>

            <div className={styles.header__rightBlockRequest}>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className={styles.customPhoneInput}
              />

              <button className={styles.header__rightBtn}>
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
