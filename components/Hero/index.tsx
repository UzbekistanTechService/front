import React from "react";
import styles from "./index.module.sass";
import { Typography } from "@mui/material";

const words: string[] = ["Fintech", "Crypto", "Software", "B2B"];

const Hero = () => {
  return (
    <main className={styles.hero_bg}>
      <div className={styles.hero}>
        <div className={styles.hero__box}>
          <Typography
            textAlign={"center"}
            variant="h3"
            className={styles.hero__title}
          >
            Your Full Service Digital Marketing Company
          </Typography>
          <div className={styles.hero__animation}>
            <Typography variant="h3">For</Typography>
            <div className={styles.hero__animationbox}>
              <ul>
                {words.map((word, i) => {
                  return (
                    <li key={i}>
                      <Typography variant="h3">{word}</Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Typography variant="caption" className={styles.hero__subtitle} textAlign={'center'}>
          A leading digital marketing agency dedicated to elevating your brand
          through multi-channel marketing solutions, branding and creative
          design.
        </Typography>
      </div>
    </main>
  );
};

export default Hero;
