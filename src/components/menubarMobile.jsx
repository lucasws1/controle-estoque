import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function MenubarMobile() {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 transform lg:hidden">
      <Menubar className="justify-between gap-2">
        <Link href="/">
          <MenubarMenu>
            <MenubarTrigger>Painel</MenubarTrigger>
          </MenubarMenu>
        </Link>
        <Link href="/customers">
          <MenubarMenu>
            <MenubarTrigger>Clientes</MenubarTrigger>
          </MenubarMenu>
        </Link>
        <MenubarMenu>
          <MenubarTrigger>Produtos</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Faturas</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
