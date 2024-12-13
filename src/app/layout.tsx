import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/layout/Container";
import { MainNav } from "@/components/nav/MainNav";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ausbildung in der IT",
  description: "Informationsportal für duale IT-Ausbildungsberufe in Deutschland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={cn(inter.className, "bg-[#F2F0EF]")}>
        <ScrollObserver />
        
        <MainNav />

        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
