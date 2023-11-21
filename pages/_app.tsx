import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
}
