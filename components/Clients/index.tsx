import React from "react";
import styles from "./index.module.sass";
import { clients } from "./data";
import Image from "next/image";

const Clients = () => {
  return (
    <main className={styles.clients}>
      <div className={styles.clients__box}>
        {clients.map((data) => {
          return (
            <div className={styles.clients__imagecontainer} key={data.id}>
              <div className={styles.clients__imagebox}>
                <Image src={data.url} alt="client" width={200} height={200} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Clients;
