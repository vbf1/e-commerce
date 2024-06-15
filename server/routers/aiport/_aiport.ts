import { procedure, router } from "../../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const aiportRouter = router({
  aiportData: procedure.query(async () => {
    const data = await prisma.aiport.findMany();
    return data;
  }),
});
