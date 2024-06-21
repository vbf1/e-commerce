import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const list = [
  {
    name: "Aeroporto Pampulha",
  },
  {
    name: "Aeroporto Rio de Janeiro",
  },
  {
    name: "Aeroporto Salvador/Bahia",
  },
];

list.map(async (a) => {
  await prisma.aiport.createMany({
    data: [{ name: a.name }],
  });
});
