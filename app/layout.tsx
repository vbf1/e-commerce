"use client";
import React, { PropsWithChildren } from "react";
import { trpc } from "@/utils/trpc";
import { SessionProvider } from "next-auth/react";
import "../globals.css";

import AppProvider from "./page";

function Provider({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <SessionProvider>
          <AppProvider>{children}</AppProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

export default trpc.withTRPC(Provider);
