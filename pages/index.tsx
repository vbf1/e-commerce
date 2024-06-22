import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { EAppRoutes } from "../config/routes";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "admin" && password === "admin") {
      router.push("/home");
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace(EAppRoutes.HOME);
    }
  }, [session.status, router]);

  return (
    <div className="flex bg-slate-100 items-center justify-center h-screen">
      <div className="space-y-4 w-4/12 bg-white border rounded-xl p-16 shadow-lg">
        <div className="flex flex-col  space-y-8">
          <div className="flex flex-col gap-4 items-center">
            <Label className="text-3xl font-semibold ">Sign in</Label>
            <Label className="">Digite seu email e senha para acessar</Label>
          </div>

          <form onSubmit={handleClick} className="space-y-6 ">
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-8 justify-between">
              <Button
                type="submit"
                className="text-blue-700"
                onClick={() => signIn("google")}
              >
                Google
              </Button>
              <Button
                className="bg-blue-700 text-white hover:text-slate-200"
                type="submit"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
