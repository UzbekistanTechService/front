import { Box, Button, Typography } from "@mui/material"
import styles from "./index.module.sass"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import { useRouter } from "next/router";
import UserLottie from "@/components/lottie"
import Loading from "@/components/loading"
import { useState } from "react"

export default function Login() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);

    const router = useRouter()

    return <>
        <Box className={styles.reg}>
            <Box className={styles.reg__left}>
                <Box className={styles.reg__info}>
                    <h1>Join Us</h1>
                    <Typography>Let’s make your dream in reality</Typography>
                    <img src="/Fundraising for charity.png" alt="rasm" />
                </Box>
            </Box>

            <Box className={styles.reg__right}>
                <img src="/Ellipse 4.png" alt="rasm" />
                <img src="/Ellipse 5.png" alt="rasm" />
                <Box className={styles.reg__form}>
                    <h2>Hello ! Welcome Back</h2>
                    <form action="#">
                        <Typography>Email or Mobile Number</Typography>
                        <input type="text" />
                        <Typography>Password</Typography>
                        <input type="password" />
                    </form>
                    <Box className={styles.reg__checkboxAndLink}>
                        <Box>
                            <input id="remember" type="checkbox" />
                            <label htmlFor="remember">Remember me</label>
                        </Box>
                        <a href="#">Forgot Password?</a>
                    </Box>

                    <Box className={styles.reg__footerCard}>
                        <Button variant="contained">Login</Button>

                        <Typography>-OR-</Typography>

                        <Box>
                            <FcGoogle style={{ width: 50, height: 50, cursor: "pointer" }} onClick={() => { handleOpen(); router.push("http://192.168.1.48:3001/api/user/google") }} />
                        </Box>

                        <Typography>Don’t have  an account? <Link href="/register" onClick={handleOpen}>Create Account</Link></Typography>
                    </Box>
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