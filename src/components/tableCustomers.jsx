import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function TableCustomers() {
  const customers = await prisma.customer.findMany();

  return (
    <div className="mx-auto flex flex-col">
      <Table>
        <TableCaption>Lista de clientes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Mês R$</TableHead>
            <TableHead className="text-right">Pendente R$</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>3.600</TableCell>
              <TableCell className="text-right">14.550</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Card className="mt-4">
          <CardContent className="flex items-center gap-2 px-4 py-2">
            <Users className="text-primary h-5 w-5" />
            <span className="text-sm">Total de clientes:</span>
            <span className="text-base font-bold">{customers.length}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
