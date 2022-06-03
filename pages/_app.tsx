import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      
        <Component {...pageProps} />
    </Layout>
    


  )
}

export default MyApp
