import TableDashboard from "@/components/tableDashboard";
import TopCards from "@/components/topCards";

export default function Home() {
  return (
    <div className="mx-auto max-w-[90%] space-y-4">
      <TopCards />
      <TableDashboard />
    </div>
  );
}
