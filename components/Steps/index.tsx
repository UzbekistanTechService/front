import React from "react";
import styles from "./index.module.sass";
import { steps } from "./data";
import { Typography } from "@mui/material";

const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.steps__container}>
        <Typography variant="h2" color={"#FF9A6D"}>ЭТАПЫ РАБОТЫ</Typography>
        <div className={styles.steps__info}>
          <p>
            Мы относимся к проектам, как к собственному бизнесу, поэтому у нас
            есть четкий регламент работы, и мы несем ответственность за их
            выполнения.
          </p>
        </div>
        <ul className={styles.steps__featuresbox}>
          {steps.map((data) => {
            return (
              <li className={styles.steps__feature} key={data.id}>
                <div>
                  <data.icon />
                  <h4>{data.desc}</h4>
                  <p>{data.id}</p>
                </div>
                <article style={{ background: `${data.color}` }}></article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Steps;
