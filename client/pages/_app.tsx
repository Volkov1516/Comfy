import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import PromoCategories from '../components/PromoCategories'
import ProductsCarusel from '../components/ProductsCarusel'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Slider />
      <PromoCategories />
      <ProductsCarusel />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
