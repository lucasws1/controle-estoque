import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import MenubarMobile from "@/components/menubarMobile";
import TituloDaPagina from "@/components/tituloDaPagina";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Controle Estoque",
    template: "%s | Controle Estoque",
  },
  description: "Controle de estoque",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      lang="en"
    >
      <body className="mb-14">
        <div className="mx-auto mt-2 flex w-full flex-col gap-4">
          <TituloDaPagina />
          <div className="mx-2 flex gap-4">
            <SideNav />
            <div className="flex-1">{children}</div>
            <MenubarMobile />
          </div>
        </div>
      </body>
    </html>
  );
}
