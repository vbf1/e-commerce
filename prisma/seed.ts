import { PrismaClient } from "@prisma/client";
const fs = require("fs");
const prisma = new PrismaClient();

// const imageBuffer = fs.readFileSync("path/to/image.jpg");

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
