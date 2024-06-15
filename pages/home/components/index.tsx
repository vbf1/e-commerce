import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Undo2Icon } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

export default function DetailsItemPage() {
  const router = useRouter();
  const { name } = router.query;

  const toGOBack = () => {
    router.back();
  };

  return (
    <div>
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
        <div
          className="flex  gap-2 col-span-10 cursor-pointer"
          onClick={toGOBack}
          onKeyDown={(e) => e.key === "Enter" && toGOBack()}
        >
          <Undo2Icon />
          Voltar
        </div>
        <div className="col-span-1 py-6" />
        <div className="col-span-1 " />
        <div className="w-[700px] h-[700px] bg-gray-300 col-span-5" />
        <div className="col-span-4 space-y-6">
          <div className="text-lg ">{name}</div>
          <div className="text-4xl">{name}</div>
          <div className="font-bold text-2xl">R$ 40,00</div>
          <div className="">
            Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </div>
          <div className="text-2xl">Descrição</div>
          <div className="">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </div>
          <div className="h-2/6"/>
          <Button className="bg-blue-600 text-white w-full mt-auto">
            Adiciona ao carrinho
          </Button>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  );
}
