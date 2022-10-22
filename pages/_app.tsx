import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'
import { UserContextProvider } from '../context/UserContext'
import { supabase } from '../lib/supabase'
import { Toaster } from 'react-hot-toast'
import AuthWrapper from '../components/AuthWrapper'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'inspector'

function MyApp({ Component, pageProps }: AppProps<{
  session:Session
}>) {

  return (
    <SessionProvider session={pageProps.session}>
      
      <RecoilRoot>
        <AuthWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthWrapper>
     
      </RecoilRoot>
    </SessionProvider>
  
  
    


  )
}

export default MyApp
