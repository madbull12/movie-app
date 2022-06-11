import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'
import { UserContextProvider } from '../context/UserContext'
import { supabase } from '../lib/supabase'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserContextProvider>

      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </UserContextProvider>
  
  
    


  )
}

export default MyApp
