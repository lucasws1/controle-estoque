import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

const invoiceData = [
  {
    customerId: 1,
    amount: 100.0,
    status: "Pendente",
    purchaseDate: new Date("2023-10-01"),
  },
  {
    customerId: 2,
    amount: 3200.0,
    status: "Pendente",
    purchaseDate: new Date("2023-10-01"),
  },
  {
    customerId: 3,
    amount: 6800.0,
    status: "Pago",
    purchaseDate: new Date("2023-10-01"),
  },
  {
    customerId: 4,
    amount: 10400.0,
    status: "Pendente",
    purchaseDate: new Date("2023-10-01"),
  },
  {
    customerId: 5,
    amount: 1200.0,
    status: "Pago",
    purchaseDate: new Date("2023-10-01"),
  },
  {
    customerId: 6,
    amount: 1400.0,
    status: "Pago",
    purchaseDate: new Date("2023-10-01"),
  },
];

const productData = [
  {
    name: "Caixa LP",
    price: 360.0,
    description: "Cartela Pequena",
  },
  {
    name: "Caixa LG",
    price: 360.0,
    description: "Cartela Grande",
  },
  {
    name: "Caneta",
    price: 80.0,
    description: "Caneta hidrocor avulsa",
  },
  {
    name: "Bolinha",
    price: 3600.0,
    description: "Jogo de bolinhas coloridas",
  },
  {
    name: "Caixa de Canetas",
    price: 3800.0,
    description: "Caixa de canetas coloridas",
  },
];

const invoiceItemData = [
  {
    invoiceId: 1,
    productId: 1,
    unitPrice: 360.0,
    quantity: 2,
  },
  {
    invoiceId: 1,
    productId: 2,
    unitPrice: 420.0,
    quantity: 1,
  },
  {
    invoiceId: 2,
    productId: 3,
    unitPrice: 80.0,
    quantity: 5,
  },
  {
    invoiceId: 2,
    productId: 4,
    unitPrice: 3600.0,
    quantity: 1,
  },
  {
    invoiceId: 3,
    productId: 5,
    unitPrice: 3800.0,
    quantity: 2,
  },
  {
    invoiceId: 3,
    productId: 1,
    unitPrice: 360.0,
    quantity: 3,
  },
  {
    invoiceId: 4,
    productId: 2,
    unitPrice: 420.0,
    quantity: 4,
  },
  {
    invoiceId: 4,
    productId: 3,
    unitPrice: 3600.0,
    quantity: 2,
  },
  {
    invoiceId: 5,
    productId: 4,
    unitPrice: 420.0,
    quantity: 1,
  },
  {
    invoiceId: 5,
    productId: 5,
    unitPrice: 3800.0,
    quantity: 3,
  },
];

const stockMovementData = [
  {
    productId: 1,
    quantity: 100,
    date: new Date("2023-10-01"),
    reason: "COMPRA",
  },
  {
    productId: 2,
    quantity: 50,
    date: new Date("2023-10-01"),
    reason: "COMPRA",
  },
  {
    productId: 1,
    quantity: 10,
    date: new Date("2023-10-01"),
    reason: "VENDA",
  },
  {
    productId: 2,
    quantity: 10,
    date: new Date("2023-10-01"),
    reason: "VENDA",
  },
  {
    productId: 3,
    quantity: 10,
    date: new Date("2023-10-01"),
    reason: "VENDA",
  },
  {
    productId: 4,
    quantity: 10,
    date: new Date("2023-10-01"),
    reason: "COMPRA",
  },
  {
    productId: 5,
    quantity: 10,
    date: new Date("2023-10-01"),
    reason: "COMPRA",
  },
];

export async function main() {
  for (const i of invoiceData) {
    await prisma.invoice.create({ data: i });
  }

  for (const p of productData) {
    await prisma.product.create({ data: p });
  }

  for (const item of invoiceItemData) {
    await prisma.invoiceItem.create({ data: item });
  }

  for (const sm of stockMovementData) {
    await prisma.stockMovement.create({ data: sm });
  }

  console.log(
    "Invoices, Products, Invoice Items, and Stock Movements seeded successfully.",
  );
}

main();

// const customerData = [
//   {
//     name: "Beto",
//     email: "beto@gmail.com",
//     phone: "55 999995734",
//   },
//   {
//     name: "Paulinho",
//     phone: "53 938291039",
//   },
//   {
//     name: "Irondina",
//     email: "",
//     phone: "53 938291039",
//   },
//   {
//     name: "Preto",
//     phone: "51 934231039",
//   },
//   {
//     name: "Cris",
//     email: "cris@yahoo.com.br",
//     phone: "53 929438102",
//   },
//   {
//     name: "Imperial",
//     email: "imperial@gmail.com",
//   },
// ];
