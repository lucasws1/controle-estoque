import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TopCards() {
  return (
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
  );
}
