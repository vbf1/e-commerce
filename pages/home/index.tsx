"use client";

import React, { useState } from "react";

import { trpc } from "../../utils/trpc";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PaginationDemo } from "../../components/pagination";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const aiports = trpc.aiport.aiportData.useQuery();
  const [name, setName] = useState("");

  const getDetailsProduct = (aiport: string) => {
    router.push({ pathname: "/home/components", query: { name: aiport } });
  };

  return (
    <div className="">
      <div className=" bg-white p-4  gap-2 shadow-md flex justify-between">
        <Label className="text-2xl font-bold">Home</Label>
        <div className="grow" />
        <div className="flex items-center gap-10">
          <Input
            className="w-96"
            type="search"
            placeholder="Pesquise um aeroporto"
          />

          <Label>Bem vindo, Victor</Label>
        </div>

        <Avatar>
          <AvatarImage src={"https://github.com/vbf1.png"} />
        </Avatar>
      </div>
      <div className="grid grid-cols-12 py-8">
        <div className="col-span-1" />
        <div className="flex col-span-10 justify-between">
          <div className="flex gap-6 col-span-7">
            <div className="font-bold border-b-2 border-orange-600 cursor-pointer">
              TODOS OS PRODUTOS
            </div>
            <div>CAMISETAS</div>
            <div>CANECAS</div>
          </div>

          <div>
            <PaginationDemo />
          </div>
        </div>

        <div className="col-span-1" />
      </div>
      <div className="grid grid-cols-12 py-12">
        <div className="col-span-1" />
        <div className="col-span-10">
          <div className="grid grid-cols-10 gap-10">
            {aiports.data?.map((aiport) => {
              return (
                <div
                  key={aiport.id}
                  className="col-span-2 cursor-pointer"
                  onClick={() => getDetailsProduct(aiport.name)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && getDetailsProduct(aiport.name)
                  }
                >
                  <div className="w-full h-72 bg-slate-200 rounded-md" />
                  <div className="flex flex-col space-y-4 mt-2">
                    <Label>{aiport.name}</Label>
                    <Label className="font-bold">R$ 40,00</Label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  );
}
