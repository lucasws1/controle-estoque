import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div>
      <div className="mx-4 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Bruto (mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">R$ 12.345,67</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Líquido (mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">R$ 10.123,45</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Estoque Total</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">R$ 8.900,00</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Faturas Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">R$ 2.000,00</span>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 mx-4 md:mx-auto md:w-[90%]">
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

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 ">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Painel</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Clientes</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Produtos</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Faturas</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
