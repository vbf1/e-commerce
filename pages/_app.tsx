import "tailwindcss/tailwind.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { SessionProvider, useSession } from "next-auth/react";
import AuthenticationLayoutPage from "./layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <AuthenticationLayoutPage>
        <Component {...pageProps} />
      </AuthenticationLayoutPage>
    </SessionProvider>
  );
};
export default trpc.withTRPC(MyApp);
