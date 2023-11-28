import { Box, Typography } from "@mui/material";
import styles from "./index.module.sass"

export default function Reason() {
    return <Box className={styles.reason}>
        <h2>ПОЧЕМУ НАС ВЫБИРАЮТ?</h2>

        <ul className={styles.reason__ul}>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>01</h3>
                    <Typography>ГЛУБОКОЕ ПОГРУЖЕНИЕ В ТЕМАТИКУ БИЗНЕСА</Typography>
                </div>
                <Typography>Каждый проект – уникален. Мы исследуем ситуацию на рынке, анализируем конкурентов заказчика, определяем цели бизнеса и составляем концепцию и план работы для достижения результата.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>02</h3>
                    <Typography>KPI – ОБЯЗАТЕЛЬНАЯ ЧАСТЬ НАШЕГО ДОГОВОРА</Typography>
                </div>
                <Typography>Мы работаем по ключевым показателям эффективности ER, ERR, RR. В конце месяца наша команда получает обратную связь от вас, где вы можете поставить оценку работы в течение месяца. От этой оценки зависят бонусы команды. Это значит, что мы мах заинтересованы в результате.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>03</h3>
                    <Typography>НАША РАБОТА ПРОЗРАЧНА И ПОНЯТНА КЛИЕНТУ</Typography>
                </div>
                <Typography>Задачи и сроки их исполнения заранее согласовываются с заказчиком. Процессы работы видны как на ладони. У заказчика есть возможность подключиться к нашей CRM системе, чтобы наблюдать за ходом работы.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>04</h3>
                    <Typography>ЕЖЕНЕДЕЛЬНЫЕ ОТЧЁТЫ О ПРОДЕЛАННОЙ РАБОТЕ ОТ АНАЛИТИКА</Typography>
                </div>
                <Typography>Наш клиент ежемесячно получает отчеты, где может увидеть результаты и может оценить эффективность работы на всех этапах: что было сделано, сколько потрачено, охват, переходы, лиды и конверсия.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>05</h3>
                    <Typography>ЛИЧНЫЙ МЕНЕДЖЕР, НА 100% ЗАИНТЕРЕСОВАННЫЙ В УСПЕХЕ ПРОЕКТА</Typography>
                </div>
                <Typography>За каждым проектом закреплён специалист, который проводит предварительную аналитику и выявляет цели и задачи клиента в социальных сетях. Менеджер контролирует все этапы работы над проектом и отчитывается о результатах.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>06</h3>
                    <Typography>НАШИ СОТРУДНИКИ ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА</Typography>
                </div>
                <Typography>Наша компания выделяет огромные средства для постоянного обучения и повышения квалификации наших специалистов. Кроме того, в компании имеется своя градация специалистов.</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>07</h3>
                    <Typography>КОМАНДНАЯ РАБОТА</Typography>
                </div>
                <Typography>За стоимость, равную зарплате одного профессионального специалистов, вы получаете 6 профессионалов в проектной команде</Typography>
            </li>
            <li className={styles.reason__li}>
                <div className={styles.reason__number}>
                    <h3>08</h3>
                    <Typography>ЛОЯЛЬНОСТЬ</Typography>
                </div>
                <Typography>Мы всегда готовы делать больше, чем мы предлагаем. В компании так же предоставляется скидка до 15% на все остальные услуги нашего агентства, что является очень выгодным предложением между партнерами.</Typography>
            </li>
        </ul>
    </Box>
}