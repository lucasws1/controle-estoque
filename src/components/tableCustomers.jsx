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

export default async function TableCustomers({ customers }) {
  console.log(customers);

  return (
    <div className="flex flex-col">
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
              <TableCell>{customer.monthAmount}</TableCell>
              <TableCell className="text-right">
                {customer.pendingAmount}
              </TableCell>
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
