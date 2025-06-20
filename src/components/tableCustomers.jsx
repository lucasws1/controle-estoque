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
  return (
    <div className="flex flex-col">
      <Table>
        <TableCaption>Lista de clientes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-neutral-400">Nome</TableHead>
            <TableHead className="font-bold text-neutral-400">Mês</TableHead>
            <TableHead className="text-right font-bold text-neutral-400">
              Pendente
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.monthAmount}</TableCell>
              <TableCell className="text-right">
                {customer.pendingAmount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-3 flex justify-end">
        <Card className="">
          <CardContent className="flex gap-2">
            <Users className="h-5 w-5" />
            <span>Clientes:</span>
            <span>{customers.length}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
