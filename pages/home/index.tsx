import { trpc } from "../../utils/trpc";
import { Label } from "@/components/ui/label";

import { PaginationDemo } from "../../components/pagination";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const aiports = trpc.aiport.aiportData.useQuery();

  const getDetailsProduct = (aiport: string) => {
    router.push({ pathname: "/home/details-page", query: { name: aiport } });
  };

  return (
    <div className="">
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
