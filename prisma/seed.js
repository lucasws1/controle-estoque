import { PrismaClient, Prisma } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

const customerData = [
  {
    name: "Beto",
    email: "beto@gmail.com",
    phone: "55 999995734",
  },
  {
    name: "Paulinho",
    phone: "53 938291039",
  },
  {
    name: "Irondina",
    email: "",
    phone: "53 938291039",
  },
  {
    name: "Preto",
    phone: "51 934231039",
  },
  {
    name: "Cris",
    email: "cris@yahoo.com.br",
    phone: "53 929438102",
  },
  {
    name: "Imperial",
    email: "imperial@gmail.com",
  },
];

export async function main() {
  for (const c of customerData) {
    await prisma.customer.create({ data: c });
  }
}

main();
