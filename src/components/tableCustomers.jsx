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
    <div className="mx-auto flex w-[98%] flex-col">
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
              <TableCell className="text-right">3.600,00</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium">Beto</TableCell>
            <TableCell>2.000</TableCell>
            <TableCell className="text-right">4.550,00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Card className="mt-4">
          <CardContent className="flex items-center gap-2 px-4 py-2">
            <Users className="text-primary h-5 w-5" />
            <span className="text-sm">Total de clientes:</span>
            <span className="text-base font-bold">8</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
