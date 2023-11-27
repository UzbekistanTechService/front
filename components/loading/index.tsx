import Backdrop from '@mui/material/Backdrop';
import styles from "./index.module.sass"

export default function Loading({ open }: Record<string, any>) {

    return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
    >
        <div className={styles.three_body}>
            <div className={styles.three_body__dot}></div>
            <div className={styles.three_body__dot}></div>
            <div className={styles.three_body__dot}></div>
        </div>
    </Backdrop>
}