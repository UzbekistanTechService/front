import React, { useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material"
import styles from "./index.module.sass"
import { FcGoogle } from "react-icons/fc"
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/router"
import Loading from "@/components/loading"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useApi } from "@/components/api";

export default function Register() {
    const [open, setOpen] = useState<boolean>(false);
    const [nameRegister, setNameRegister] = useState<string>("")
    const [emailRegister, setEmailRegister] = useState<string>("")
    const [passwordRegister, setPasswordRegister] = useState<string>("")
    const [eyePassword, setEyePassword] = useState<boolean>(false)
    const api = useApi();
    // const { status } = useSession();

    // console.log(status);


    const handleOpen = async () => {
        setOpen(true);
        // signIn("google", { callbackUrl: '    ', redirect: true })

        try {
            await router.push("https://marketing-uts.onrender.com/api/user/google")

            await axios.get("https://marketing-uts.onrender.com/api/user/google/callback").then((res) => console.log(res.data))
        } catch (e) {
            console.log(e);
        }
    }

    // useEffect(() => {
    //     axios.get('https://marketing-uts.onrender.com/api/user/google/callback')
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }, []);

    const router = useRouter()

    const onFinish = async () => {
        setOpen(true)
        try {
            const res = await axios.post(`${api.baseUrl}api/user/signup`, {
                full_name: nameRegister,
                email: emailRegister,
                password: passwordRegister,
            })

            localStorage.setItem("userToken", res?.data.token);
            router.push("/")
        } catch (e) {
            console.log(e);
            toast.error(`${e}`)
            setOpen(false)
        }
    }

    return <>
        <ToastContainer />

        <Box className={styles.reg}>
            <Box className={styles.reg__right}>
                <img src="/Ellipse 4.png" alt="rasm" />
                <img src="/Ellipse 5.png" alt="rasm" />
                <Box className={styles.reg__form}>
                    <h2>Create an Account</h2>
                    <form action="#">
                        <Typography>Name</Typography>
                        <input type="text" placeholder="Name" onChange={(e) => setNameRegister(e.target.value)} className={styles.reg__inputRegister} />
                        <Typography>Email or Mobile Number</Typography>
                        <input type="email" placeholder="Email" onChange={(e) => setEmailRegister(e.target.value)} className={styles.reg__inputRegister} />
                        <Typography>Password</Typography>
                        <div className={styles.reg__inputPassword}>
                            <input type={eyePassword === true ? "text" : "password"} placeholder="Password" onChange={(e) => setPasswordRegister(e.target.value)} />
                            {eyePassword === true ? <span onClick={() => setEyePassword(false)}>🙉</span> :
                                <span onClick={() => setEyePassword(true)}>🙈</span>}
                        </div>
                    </form>

                    <Box className={styles.reg__footerCard}>
                        <Button variant="contained" onClick={onFinish} disabled={nameRegister === "" || emailRegister === "" || passwordRegister === ""}>Registration</Button>

                        <Typography>-OR-</Typography>

                        <Box>
                            <FcGoogle style={{ width: 50, height: 50, cursor: "pointer" }} onClick={handleOpen} />
                        </Box>

                        <Typography>Don’t have  an account? <Link href="/login">Login</Link></Typography>
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

            {/* <Box className={styles.reg__user}>
                <img src="/young man walking with coffee.png" alt="userImage" />
                <img src="/paper confetti.png" alt="fireworks" />
                <img src="/confetti and stars.png" alt="fireworks2" />
                <div className={styles.reg__linkButton}>
                    <h2>Woohooo!</h2>
                    <Typography>Registration complete! Get ready to have the best shopping experiences of your life.</Typography>
                    <Button variant="contained">Let the shopping begin</Button>
                </div>
            </Box> */}
        </Box>

        <Loading open={open} />
    </>
}