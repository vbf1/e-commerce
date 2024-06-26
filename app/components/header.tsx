"use client";

import { useSession, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { EAppRoutes } from "../../config/routes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { data } = useSession();
  const session = useSession();

  const nameUppercase = data?.user?.name
    ? data.user.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  useEffect(() => {
    router.push(EAppRoutes.SIGN_IN);
  }, [signOut]);

  return (
    <div className=" bg-white p-4  gap-2 shadow-md flex justify-between">
      <Label className="text-2xl font-bold">Logo</Label>
      <div className="grow" />
      <div className="flex items-center gap-10 ">
        <Input
          className="w-96"
          type="search"
          placeholder="Pesquise um aeroporto"
        />
        <div className="flex items-center gap-2">
          <Label>Bem vindo, {nameUppercase}</Label>
          <Button className="p-1" onClick={() => signOut()}>
            Sair
          </Button>
        </div>
      </div>

      <Avatar>
        <AvatarImage src={data?.user?.image || ""} />
      </Avatar>
    </div>
  );
}
