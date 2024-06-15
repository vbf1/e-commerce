"use client";

import React from "react";

import { trpc } from "../../utils/trpc";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  const aiports = trpc.aiport.aiportData.useQuery();
  console.log("Aeroportos", aiports);
  return (
    <div>
      <Label>Pagina Home</Label>

      <Label>{aiports.data?.map((aiport) => aiport.name)}</Label>
    </div>
  );
}
