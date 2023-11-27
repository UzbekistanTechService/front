import '@/styles/globals.sass'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { createTheme } from "@/theme"
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
