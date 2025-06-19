import TableDashboard from "@/components/tableDashboard";
import TopCards from "@/components/topCards";

export default function Home() {
  return (
    <div className="space-y-4">
      <TopCards />
      <TableDashboard />
    </div>
  );
}
