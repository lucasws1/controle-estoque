import TableDashboard from "@/components/tableDashboard";
import TituloDaPagina from "@/components/tituloDaPagina";
import TopCards from "@/components/topCards";

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col gap-4">
      <TituloDaPagina />
      <div className="grid w-full grid-cols-1">
        <TopCards />
        <TableDashboard />
      </div>
    </div>
  );
}
