import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WalletProvider from "../components/WalletProvider";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqalisa.id — 3D Web3 Shop",
  description: "Style muslimah elegan tanpa ribet.", openGraph: { images: ["/og.png"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <Nav />
          <main className="container py-8"><SmoothScroll />
          {children}</main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
