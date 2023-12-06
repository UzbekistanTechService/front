import { Box, Button } from "@mui/material";
import styles from "./index.module.sass";
import { PatternFormat } from "react-number-format";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#323232" }}>
        <Box className={styles.footer}>
          <Box className={styles.footer__text}>
            <Box className={styles.footer__left}>
              <h3>Контакты</h3>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <Box>
                  <p>Звоните</p>
                  <a href="tel: 8-708-220-5951">8-708-220-5951</a>
                </Box>
                <Box>
                  <p>Пишите</p>
                  <a href="#">Whatsapp</a>
                </Box>
              </Box>
              <p>Приходите</p>
              <a href="#">
                <span>Алматы:</span> Жибек Жолы 135, БЦ Zhibek Zholy Блок 1,
                этаж 10 офис 5
              </a>
              <br />
              <br />
              <a href="#">
                <span>Нур-Султан:</span> ул. Динмухамеда Кунаева, 4, БЦ
                Казмедиа, 2 этаж кабинет B2.115/4 , B2.115/2
              </a>
            </Box>

            <Box className={styles.footer__right}>
              <img src="/4757012.png" alt="rasm" />
              <Button variant="contained">Подпишись на наш инстаграм</Button>
            </Box>
          </Box>

          <Box className={styles.footer__questions}>
            <Box>
              <h4>Остались вопросы?</h4>
              <p>Оставьте номер телефона и мы ответим на все Ваши вопросы</p>
            </Box>
            <Box className={styles.footer__send}>
              <PatternFormat
                format="+998 (##) ### ## ##"
                allowEmptyFormatting
                placeholder="+99895625358"
              />
              <button>Оставить заявку</button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#262626",
        }}
      >
        <Box className={styles.footerLink}>
          <p>Sanber Agency 2022</p>
          <a href="#">Сайт создал daulet.web</a>
        </Box>
      </Box>
    </>
  );
}
