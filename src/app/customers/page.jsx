import TableCustomers from "@/components/tableCustomers";
import prisma from "@/lib/prisma";
import { startOfMonth, endOfMonth } from "date-fns";
import { formatCurrencyBRL } from "@/utils/formatCurrencyBRL";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Clientes",
};

export default async function Clientes() {
  const customers = await prisma.customer.findMany();

  const now = new Date();
  const firstDay = startOfMonth(now);
  const lastDay = endOfMonth(now);

  const customersPendingAndMonth = await Promise.all(
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
      return {
        ...customer,
        pendingAmount: formatCurrencyBRL(pending._sum.amount || 0),
        monthAmount: formatCurrencyBRL(monthValue._sum.amount || 0),
      };
    }),
  );

  return (
    <div>
      <div className="mx-auto max-w-[90%]">
        <div className="mb-2 text-end">
          <Button size="sm">
            <Plus />
            Adicionar Cliente
          </Button>
        </div>
        <TableCustomers customers={customersPendingAndMonth} />
      </div>
    </div>
  );
}
