import React from "react";
import style from "./index.module.sass";
import { Typography } from "@mui/material";

const Solutions = () => {
  return (
    <section className={style.solutions}>
      <div className={style.solutions__left}>
        <Typography variant="h6">WHAT WE DO</Typography>
        <Typography variant="h4">AI-powered solutions for your business.</Typography>
        <Typography typography={'caption'}>
          Our suite of AI solutions is designed to make your life easier and
          more impactful. From managing talent to ensuring potential
          collaborations are a cultural fit, we make the power of AI work for
          you. Check out our solutions for enterprise, entrepreneurs, and
          creators below.
        </Typography>
      </div>
      <div className={style.solutions__right}>
        <div>
          <video autoPlay loop muted>
            <source
              src="https://www.viralnation.com/wp-content/uploads/2023/10/ViralNation_DemoVideo_optimize.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
