import TableCustomers from "@/components/tableCustomers";
import TituloDaPagina from "@/components/tituloDaPagina";

export const metadata = {
  title: "Clientes",
};

export default function Clientes() {
  return (
    <div className="flex flex-col">
      <TituloDaPagina />
      <TableCustomers />
    </div>
  );
}
