import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useApi } from "../api"
import { useRouter } from "next/router"

export default function PasswordRecovery() {
    const [email, setEmail] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
    const [isEmail, setisEmail] = useState<boolean>(true)
    const api = useApi()
    const router = useRouter()

    const send = async () => {
        try {
            await axios.post(`${api.baseUrl}api/user/send_mail`, { email })
            setisEmail(false)
        } catch (e) {
            console.log(e);
        }
    }

    const onFinish = async () => {
        try {
            await axios.post(`${api.baseUrl}api/user/forgot_password/`, {
                email,
                new_password: newPassword,
                confirm_new_password: confirmNewPassword
            })
            router.push("/login")
        } catch (e) {
            console.log(e);
        }
    }



    return <>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            {isEmail === true ? <Box sx={{ border: "1px solid #666", padding: 4, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Email" variant="standard" type="email" onChange={(e) => setEmail(e.target.value)} />
                <Button variant="contained" color="success" disabled={email === ""} onClick={send}>
                    Send
                </Button>
            </Box> :
                <Box sx={{ border: "1px solid #666", padding: 4, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="New password" variant="standard" onChange={(e) => setNewPassword(e.target.value)} />
                    <TextField label="Confirm new password" variant="standard" onChange={(e) => setConfirmNewPassword(e.target.value)} />
                    <Button variant="contained" color="success" disabled={newPassword === "" || confirmNewPassword === ""} onClick={onFinish}>
                        Save
                    </Button>
                </Box>}
        </Box>
    </>
}