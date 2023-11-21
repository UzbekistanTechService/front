import { Box, Button, Typography } from "@mui/material"
import styles from "./index.module.sass"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/router";
import UserLottie from "@/components/lottie"
import Loading from "@/components/loading"
 
export default function Register() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);

    const router = useRouter()

    return <>
        <Box className={styles.reg}>
            <Box className={styles.reg__right}>
                <img src="/Ellipse 4.png" alt="rasm" />
                <img src="/Ellipse 5.png" alt="rasm" />
                <Box className={styles.reg__form}>
                    <h2>Create an Account</h2>
                    <form action="#">
                        <Typography>Name</Typography>
                        <input type="text" />
                        <Typography>Email or Mobile Number</Typography>
                        <input type="text" />
                        <Typography>Password</Typography>
                        <input type="password" />
                    </form>

                    <Box className={styles.reg__footerCard}>
                        <Button variant="contained">Registration</Button>

                        <Typography>-OR-</Typography>

                        <Box>
                            <FcGoogle style={{ width: 50, height: 50, cursor: "pointer" }} onClick={() => { handleOpen(); router.push("http://192.168.1.48:3001/api/user/google") }} />
                        </Box>

                        <Typography>Don’t have  an account? <Link href="/login" onClick={handleOpen}>Login</Link></Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={styles.reg__left}>
                <Box className={styles.reg__info}>
                    <h1>Join Us</h1>
                    <Typography>Let’s make your dream in reality</Typography>
                    <img src="/Fundraising for charity.png" alt="rasm" />
                </Box>
            </Box>

            <Box className={styles.reg__user}>
                <img src="/paper confetti.png" alt="fireworks" />
                <img src="/confetti and stars.png" alt="fireworks" />
                <UserLottie />
            </Box>
        </Box>

        <Loading open={open} />
    </>
}