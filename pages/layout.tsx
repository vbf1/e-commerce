import React, { PropsWithChildren } from "react";
import Header from "./components/header";
import { useSession } from "next-auth/react";
import HomePage from "./home";
import LoginPage from ".";
import DetailsPage from "./home/details-page";
import AuthContainer from "./components/auth.container";

export default function AuthenticationLayoutPage({
  children,
}: Readonly<PropsWithChildren>) {
  const session = useSession();
  return (
    <AuthContainer>
      {session.status === "authenticated" && <Header />}
      {children}
    </AuthContainer>
  );
}
