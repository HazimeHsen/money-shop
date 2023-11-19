import "./globals.css";
import { Header, Footer } from "@/components";
import SideBar from "@/components/SideBar";
import { CartProvider } from "@/context/CartContext";
import { Quicksand } from "next/font/google";
import { StoreProvider } from "./CartProvider";
import DarkLightThemeProvider from "./ThemeProvider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "XOCO",
  description: "Ecommer template 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DarkLightThemeProvider>
        <body className={quicksand.className}>
          <div>
            <StoreProvider>{children}</StoreProvider>
          </div>
        </body>
      </DarkLightThemeProvider>
    </html>
  );
}
