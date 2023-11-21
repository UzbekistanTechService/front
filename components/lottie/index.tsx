import Lottie from "react-lottie";
import React from "react";
import user from "@/lotties/Animation - 1700546350663.json";
import styles from "./index.module.sass"

export default function UserLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: user,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className={styles.lottie}>
            <Lottie options={defaultOptions} style={{ width: 400, height: 400 }} />
        </div>
    );
}