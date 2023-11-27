import React from "react";
import { portfolio } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import { Typography } from "@mui/material";
import { IconArrow } from "@/icons";
import { useRouter } from "next/navigation";
import styles from "./index.module.sass";
import Image from "next/image";

const Portfolio = () => {
  const router = useRouter()

  return (
    <section className={styles.portfolio}>
      <div className={`${styles.portfolio__swiper_button} image-swiper-button-next`}>
        <IconArrow fill="white"/>
      </div>
      <Swiper
        spaceBetween={30}
        modules={[Autoplay, Navigation]}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          }
        }}
        navigation={{
          nextEl: ".image-swiper-button-next"
        }}
      >
        {portfolio.map((data) => {
          return (
            <SwiperSlide key={data.id} onClick={() => router.push(data.url)}>
              <div className={styles.portfolio__box}>
                <div>
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={300}
                    height={300}
                    className={styles.portfolio__image}
                  />
                </div>
                <div className={styles.portfolio__footer}>
                  <div className={styles.portfolio__title}>
                    <Typography variant="h6">{data.name}</Typography>
                    <IconArrow />
                  </div>
                  <div>
                    <Typography variant="caption" fontWeight={400} className={styles.portfolio__desc}>
                      {data.desc}
                    </Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
