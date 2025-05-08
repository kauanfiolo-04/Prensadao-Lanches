import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Prensadão Lanches | Lanchonete",
  description: "Prensadão lanches, uma lanchonete onde a especialidade da casa é vender dogão prensado, mas vendemos tudo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
