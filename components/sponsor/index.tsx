import React from 'react'
import classes from "./index.module.sass"
import { Box, Grid } from "@mui/material"
import Image from 'next/image';

export default function Sponsors() {


    const workersTeam = [
        {
            img: "dicks-x2.webp"
        },
        {
            img: "edible-x2b.webp",
        },
        {
            img: "floor-decor-x2.webp"
        },
        {
            img: "netapp-x2.webp"
        },
        {
            img: "paccar-x2.webp"
        },
        {
            img: "samsung-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
        {
            img: "dicks-x2.webp"
        },
        {
            img: "edible-x2b.webp",
        },
        {
            img: "floor-decor-x2.webp"
        },
        {
            img: "netapp-x2.webp"
        },
        {
            img: "paccar-x2.webp"
        },
        {
            img: "samsung-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
        {
            img: "dicks-x2.webp"
        },
        {
            img: "edible-x2b.webp",
        },
        {
            img: "floor-decor-x2.webp"
        },
        {
            img: "netapp-x2.webp"
        },
        {
            img: "paccar-x2.webp"
        },
        {
            img: "samsung-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
        {
            img: "dicks-x2.webp"
        },
        {
            img: "edible-x2b.webp",
        },
        {
            img: "floor-decor-x2.webp"
        },
        {
            img: "netapp-x2.webp"
        },
        {
            img: "paccar-x2.webp"
        },
        {
            img: "samsung-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
        {
            img: "dicks-x2.webp"
        },
        {
            img: "edible-x2b.webp",
        },
        {
            img: "floor-decor-x2.webp"
        },
        {
            img: "netapp-x2.webp"
        },
        {
            img: "paccar-x2.webp"
        },
        {
            img: "samsung-x2.webp"
        },
        {
            img: "tgi-x2.webp"
        },
    ]

    return (
        <Box className={classes.sponsors}>
            <Box className={classes.container}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        workersTeam.map((item, index) => (
                            <Grid item xs={3} sm={2} key={index} className={classes.item_spons}>
                                <Box className={classes.item_worker}>
                                    <Image src={`/sponsors/${item.img}`} alt="" fill />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
