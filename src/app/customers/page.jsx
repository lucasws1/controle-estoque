import TableCustomers from "@/components/tableCustomers";

export const metadata = {
  title: "Clientes",
};

export default function Clientes() {
  return (
    <div className="mx-auto">
      <TableCustomers />
    </div>
  );
}
