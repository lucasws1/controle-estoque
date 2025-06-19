import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableDashboard() {
  return (
    <div className="flex mt-6 mx-4 md:mx-auto md:w-[90%]">
      <Table>
        <TableCaption>Lista de transações recentes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Cliente</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Qtd</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead className="text-right">R$</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Verônica</TableCell>
            <TableCell>LP</TableCell>
            <TableCell>10</TableCell>
            <TableCell>100</TableCell>
            <TableCell className="text-right">3.600,00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Verônica</TableCell>
            <TableCell>Caneta</TableCell>
            <TableCell>26</TableCell>
            <TableCell>260</TableCell>
            <TableCell className="text-right">550,00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
