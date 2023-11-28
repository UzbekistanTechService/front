import React from 'react'
import classes from "./index.module.sass"
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

export default function StepWork() {
    return (
        <div className={classes.step}>
            <div className={classes.title}>
                <div className={classes.background}>
                    <h3>ЭТАПЫ РАБОТЫ</h3>
                    <h3>ЭТАПЫ РАБОТЫ</h3>
                    <h3>ЭТАПЫ РАБОТЫ</h3>
                    <h3>ЭТАПЫ РАБОТЫ</h3>
                    <h3>ЭТАПЫ РАБОТЫ</h3>
                </div>
                <div className={classes.front}>
                    <h3>ЭТАПЫ РАБОТЫ </h3>
                    <h3>ЭТАПЫ РАБОТЫ </h3>
                    <h3>ЭТАПЫ РАБОТЫ </h3>
                    <h3>ЭТАПЫ РАБОТЫ </h3>
                </div>
            </div>
            <div className={classes.container}>
                <h4>Мы относимся к проектам, как к собственному бизнесу, поэтому у нас есть четкий регламент работы, и мы несем ответственность за их выполнения.</h4>

                <div className={`row ${classes.row}`}>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                    <Box className={classes.work}>
                        <Image src={"/stepWork/analysis.svg"} alt='' width={40} height={40} />
                        <p>Внедряемся в ваш бизнес и делаем анализ</p>
                        <span>1</span>
                    </Box>
                </div>
            </div>
        </div>
    )
}
