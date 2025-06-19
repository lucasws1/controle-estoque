import TableCustomers from "@/components/tableCustomers";
import prisma from "@/lib/prisma";
import { startOfMonth, endOfMonth } from "date-fns";

export const metadata = {
  title: "Clientes",
};

export default async function Clientes() {
  const customers = await prisma.customer.findMany();

  const customersWithPending = await Promise.all(
    customers.map(async (customer) => {
      const pending = await prisma.invoice.aggregate({
        where: {
          customerId: customer.id,
          pending: true,
        },
        _sum: {
          amount: true,
        },
      });
      return { ...customer, pendingAmount: pending._sum.amount || 0 };
    }),
  );

  const now = new Date();
  const firstDay = startOfMonth(now);
  const lastDay = endOfMonth(now);

  const customersPendingAndMonth = await Promise.all(
    customersWithPending.map(async (customer) => {
      const monthValue = await prisma.invoice.aggregate({
        where: {
          customerId: customer.id,
          purchaseDate: {
            gte: firstDay,
            lte: lastDay,
          },
        },
        _sum: {
          amount: true,
        },
      });
      return { ...customer, monthAmount: monthValue._sum.amount || 0 };
    }),
  );

  return (
    <div className="mx-auto max-w-[90%]">
      <TableCustomers customers={customersPendingAndMonth} />
    </div>
  );
}
