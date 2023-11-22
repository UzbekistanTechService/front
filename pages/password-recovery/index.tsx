import PasswordRecovery from '@/components/passwordRecovery'
import Head from 'next/head'

export default function LoginrPage() {
    return <>
        <Head>
            <title>Password Recovery</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <PasswordRecovery />
    </>

}