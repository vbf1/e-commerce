import "tailwindcss/tailwind.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { SessionProvider, useSession } from "next-auth/react";
import Header from "./components/header/header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
};
export default trpc.withTRPC(MyApp);
