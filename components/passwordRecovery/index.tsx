import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useApi } from "@/components/api"
import { useRouter } from "next/router"
import Loading from "@/components/loading"

export default function PasswordRecovery() {
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const api = useApi()
    const router = useRouter()

    const onFinish = async () => {
        setOpen(true)
        try {
            const userEmail = localStorage.getItem("userEmail")

            await axios.post(`${api.baseUrl}api/user/forgot_password/`, {
                email: userEmail,
                new_password: newPassword,
                confirm_new_password: newPassword,
                token: api.getToken()
            })
            api.logOut()
            router.push("/login")
        } catch (e) {
            console.log(e);
            setOpen(false)
        }
    }



    return <>
        <Loading open={open} />

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Box sx={{ border: "1px solid #666", padding: 4, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField label="New password" variant="standard" onChange={(e) => setNewPassword(e.target.value)} type="password" />
                </Box>
                <TextField label="Confirm new password" variant="standard" onChange={(e) => setConfirmNewPassword(e.target.value)} type="password" />
                <Button variant="contained" color="success" disabled={newPassword === "" || confirmNewPassword === ""} onClick={onFinish}>
                    Save
                </Button>
            </Box>
        </Box>
    </>
}