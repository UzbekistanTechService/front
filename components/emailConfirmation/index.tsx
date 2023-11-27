import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import Loading from "@/components/loading"
import { useApi } from "@/components/api"
import { useRouter } from "next/router"

export default function EmailConfirmation() {
    const [open, setOpen] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const api = useApi()
    const router = useRouter()

    const send = async () => {
        setOpen(true)
        try {
            const { data } = await axios.post(`${api.baseUrl}api/user/send_mail`, { email })
            if (data?.token) {
                localStorage.setItem("userEmail", data?.user.email)
                localStorage.setItem("userToken", data?.token)
                // router.push("/password-recovery")
            }
        } catch (e) {
            console.log(e);
            setOpen(false)
        }
    }

    return <>
        <Loading open={open} />

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Box sx={{ border: "1px solid #666", padding: 4, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Email" variant="standard" type="email" onChange={(e) => setEmail(e.target.value)} />
                <Button variant="contained" color="success" disabled={email === ""} onClick={send}>
                    Send
                </Button>
            </Box>
        </Box>
    </>
}