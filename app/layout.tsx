import { Bowlby_One_SC, DM_Mono } from "next/font/google";

import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import { Header } from "@/components/Header";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <Header />
        <main>{children}</main>
        <SVGFilters />
      </body>
    </html>
  );
}
