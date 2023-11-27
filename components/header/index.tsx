import { Box, Button } from "@mui/material";
import { useApi } from '@/components/api';
import { useRouter } from 'next/router';
import styles from "./index.module.sass"
import Loading from "@/components/loading";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const api = useApi()
    const router = useRouter()

    const login = () => {
        setOpen(true)
        router.push("/login")
    }

    const register = () => {
        setOpen(true)
        router.push("/register")
    }

    return <>
        <Box className={styles.header}>
            <Button color="error" variant="contained" onClick={() => { api.logOut(); router.push("/login") }}>Exit</Button>
            <Box className={styles.header__register}>
                <Button variant="outlined" onClick={login}>Sign in</Button>
                <Button variant="outlined" onClick={register}>Sign up</Button>
            </Box>
        </Box>

        <Loading open={open} />
    </>
}