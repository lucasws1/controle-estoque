import TableDashboard from "@/components/tableDashboard";
import TituloDaPagina from "@/components/tituloDaPagina";
import TopCards from "@/components/topCards";

export default function Home() {
  return (
    <div>
      <TituloDaPagina />
      {/* <div className="hidden md:flex justify-center items-center gap-4 text-3xl">
        <ChartNoAxesCombined /> Painel de Controle
      </div> */}
      <div className="grid grid-cols-1">
        <TopCards />
        <TableDashboard />
      </div>
    </div>
  );
}
