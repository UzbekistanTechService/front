import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import Loading from "@/components/loading"
import { useApi } from "@/components/api"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function EmailConfirmation() {
    const [open, setOpen] = useState<boolean>(false)
    const [emailText, setEmailText] = useState<string>("")
    const api = useApi()

    const send = async () => {
        setOpen(true)

        try {
            await axios.post(`${api.baseUrl}api/user/send_mail`, { email: emailText })
            toast.success("A message will be sent to the email")
        } catch (e) {
            console.log(e);
            setOpen(false)
        }
        finally { setOpen(false) }
    }

    return <>
        <Loading open={open} />
        <ToastContainer />

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Box sx={{ border: "1px solid #666", padding: 4, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Email" variant="standard" type="email" onChange={(e) => setEmailText(e.target.value)} />
                <Button variant="contained" color="success" disabled={emailText === ""} onClick={send}>
                    Send
                </Button>
            </Box>
        </Box>
    </>
}