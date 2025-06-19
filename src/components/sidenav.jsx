import { FileText, HomeIcon, ShoppingCart, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="ml-6 hidden flex-col lg:flex">
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href="/">
          <Button variant="outline" className="w-32">
            <HomeIcon /> Painel
          </Button>
        </Link>
        <Button variant="outline" className="w-32">
          <ShoppingCart />
          Produtos
        </Button>
        <Link href="/customers">
          <Button variant="outline" className="w-32">
            <Users />
            Clientes
          </Button>
        </Link>
        <Button variant="outline" className="w-32">
          <FileText />
          Faturas
        </Button>
      </div>
    </div>
  );
}
