import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TopCards() {
  return (
    <div className="grid grid-cols-1 place-items-stretch gap-4 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-neutral-400">Total Bruto (mês)</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">R$ 12.345,67</span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-neutral-400">
            Total Líquido (mês)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">R$ 10.123,45</span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-neutral-400">Estoque Total</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">R$ 8.900,00</span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-neutral-400">Faturas Pendentes</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">R$ 2.000,00</span>
        </CardContent>
      </Card>
    </div>
  );
}
