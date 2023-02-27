import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans `}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
