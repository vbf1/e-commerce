import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession, signOut } from "next-auth/react";
import React from "react";

export default function Header() {
  const { data } = useSession();

  const nameUppercase = data?.user?.name
    ? data.user.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

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
        <AvatarImage src={"https://github.com/vbf1.png"} />
      </Avatar>
    </div>
  );
}
