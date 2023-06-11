import type { AppProps } from 'next/app'
import { AnonymousLayout } from 'layouts/anonymous'
import '../styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <AnonymousLayout>
    <Component {...pageProps} />
  </AnonymousLayout>
}

export default MyApp
