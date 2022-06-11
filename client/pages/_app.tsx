import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Slider />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
