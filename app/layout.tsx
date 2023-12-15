import "./globals.css";
import { Header, Footer } from "@/components";
import SideBar from "@/components/SideBar";
import { CartProvider } from "@/context/CartContext";
import { Quicksand } from "next/font/google";
import { StoreProvider } from "./CartProvider";
import DarkLightThemeProvider from "./ThemeProvider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Heritage Kings",
  description: "Ecommer template 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={quicksand.className}>
          <div>
            <DarkLightThemeProvider>{children}</DarkLightThemeProvider>
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
