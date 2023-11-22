import '@/styles/globals.css'
import type { AppProps } from 'next/app'
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

  useEffect(() => {
    const obj = new Api({
      baseUrl: "https://marketing-uts.onrender.com/",
      tokenName: "userToken",
    });
    setApi(obj);
  }, []);

  useEffect(() => {
    if (api) {
      if (!api.checkToken() && pathname != "/login" && pathname != "/password-recovery" && pathname != "/register") router.push("/login");
    }
  }, [api]);


  return <>
    <CssBaseline />
    <SessionProvider session={session}>
      {api && <ApiProvider value={api}><Component {...pageProps} /></ApiProvider>}
    </SessionProvider>
  </>
}
