import '@/styles/globals.sass'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { createTheme } from "@/theme"
import 'swiper/css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Api, ApiProvider } from "@/components/api";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [api, setApi] = useState<Api | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const theme = createTheme()

  useEffect(() => {
    const obj = new Api({
      baseUrl: "https://marketing-uts.onrender.com/",
      tokenName: "userToken",
    });
    setApi(obj);
  }, []);

  useEffect(() => {
    if (api) {
      if (!api.checkToken() && pathname != "/login" && pathname != "/password-recovery" && pathname != "/register" && pathname != "/email-confirmation") router.push("/login");
    }
  }, [api]);


  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SessionProvider session={session}>
        {api && <ApiProvider value={api}><Component {...pageProps} /></ApiProvider>}
      </SessionProvider>
    </ThemeProvider>
  </>
}
