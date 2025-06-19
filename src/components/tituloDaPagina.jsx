"use client";

import { User } from "lucide-react";
import { Package } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TituloDaPagina() {
  const pathname = usePathname();

  const titles = {
    "/": {
      label: "Painel",
      icon: <ChartNoAxesCombined />,
    },
    "/customers": {
      label: "Clientes",
      icon: <User />,
    },
    "/products": {
      label: "Produtos",
      icon: <Package />,
    },
  };

  const title = titles[pathname] || { label: "Controle Estoque", icon: null };

  return (
    <div className="flex items-center justify-center gap-2 text-3xl text-neutral-200">
      {title.icon} {title.label}
    </div>
  );
}
