import React from 'react'
import classes from "./index.module.sass"
import { Box, Grid } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';


export default function Workers() {
 
    const workersTeam = [
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
        {
            img: "y9.webp",
            title: "Comedy"
        },
    ]

    return (
        <Box className={classes.workers}>
            <Box className={classes.container}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        workersTeam.map((item, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <Link href="/" className={classes.worker_link}>
                                    <Box className={classes.item_worker}>
                                        <div className={classes.image_worker}>
                                            <Image src={`/workers/${item.img}`} alt="" fill />
                                        </div>
                                        <div className={classes.title}>
                                            <h2>{item.title}</h2>
                                        </div>
                                    </Box>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
