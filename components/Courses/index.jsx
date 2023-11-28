import React, { Fragment, useEffect, useState } from "react";
import styles from "./index.module.sass";
import axios from "@/utils/axios.config";
import MuxPlayer from "@mux/mux-player-react";
import { Typography, useTheme } from "@mui/material";

const Courses = () => {
  const url = "https://marketing-uts.onrender.com/api/video/stream/";
  const [course, setCourse] = useState([]);
  const theme = useTheme();
  const getCourses = async () => {
    try {
      const { data } = await axios.get("/course");
      console.log(data);
      setCourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <section className={styles.courses}>
      <div className={styles.courses__box}>
        {course.map((data) => (
          <Fragment key={data.id}>
            <Typography variant="h5">{data.name}</Typography>
            <div className={styles.courses__videobox}>
              {data.videos.map((video) => {
                return (
                  <MuxPlayer
                    key={data.id}
                    streamType="on-demand"
                    src={`${url}${video.id}`}
                    accent-color={theme.palette.primary.main}
                  />
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Courses;
