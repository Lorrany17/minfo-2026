import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// AQUI ESTÁ O SEGREDO ⬇️
export const metadata: Metadata = {
  title: "5ª MINFO | IFPI Campus Picos",
  description: "Participe da 5ª Mostra de Informática do IFPI Picos. Inovação, tecnologia e projetos incríveis dos alunos de Informática e ADS.",
  
  openGraph: {
    title: "5ª MINFO - 5 Anos de Inovação",
    description: "Conheça os projetos da Mostra de Informática do IFPI Campus Picos.",
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}