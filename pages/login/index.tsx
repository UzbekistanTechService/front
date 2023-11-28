import Login from "@/components/login"
import Head from 'next/head'

export default function LoginrPage() {
    return <>
        <Head>
            <title>Login</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login />
    </>

}