"use client";

import React, { PropsWithChildren } from "react";

import AuthContainer from "./components/auth.container";
import Header from "./components/header";
import { useSession } from "next-auth/react";

export default function AppProvider({ children }: PropsWithChildren) {
  const session = useSession();
  return (
    <AuthContainer>
      {session.status === "authenticated" && <Header />}
      {children}
    </AuthContainer>
  );
}
