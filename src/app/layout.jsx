import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import MenubarMobile from "@/components/menubarMobile";

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
      <body>
        <div className="mt-4 mb-13 flex">
          <aside>
            <SideNav />
          </aside>
          <div className="flex-1">{children}</div>
          <MenubarMobile />
        </div>
      </body>
    </html>
  );
}
