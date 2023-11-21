import React from "react";
import styles from "./index.module.sass";
import { prices } from "./data";
import { Button, Typography } from "@mui/material";

export const Prices = () => {
  return (
    <section className={styles.prices}>
      <div className={styles.prices__box}>
        {prices.map((data) => {
          return (
            <article key={data.id} style={{ background: data.isSupport ? "#349C4B0D" : "", borderRadius: data.isSupport ? "0 0 4px 4px" : "4px" }}>
              {data.isSupport ? (
                <div className={styles.recomended}>
                  <Typography variant="caption">Recomended</Typography>
                </div>
              ) : (
                ""
              )}
              <Typography variant="h6">{data.name}</Typography>
              <Typography variant="caption">{data.desc}</Typography>
              <div className={styles.prices__pricesbox}>
                {typeof data.price === "string" ? (
                  <Typography variant="h5">{data.price}</Typography>
                ) : (
                  <div className={styles.prices__numberbox}>
                    <Typography variant="caption">
                      $ <Typography variant="h5">{data.price}</Typography>/month
                    </Typography>
                  </div>
                )}
              </div>
              <Button

                variant={data.isSupport == true ? "contained" : "outlined"}
              >
                Purchase
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
};
