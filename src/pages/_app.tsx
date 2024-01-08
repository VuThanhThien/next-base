import GlobalLayout from '@/components/layout/GlobalLayout'
import AppProvider from '@/providers/AppProvider.provider'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import '../index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalLayout>
        <NextNProgress color="#b63d5b" />
        <Component {...pageProps} />
      </GlobalLayout>
    </AppProvider>
  )
}
