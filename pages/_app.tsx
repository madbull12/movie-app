import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "../components/AuthWrapper";
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { trpc } from '../utils/trpc';

const MyApp: AppType<{ session: Session | null}> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <AuthWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthWrapper>
      </RecoilRoot>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
