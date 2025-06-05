import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniket Ingole - Full Stack Developer",
  description:
    "Portfolio of Aniket Ingole, a passionate Full Stack Developer and Backend Engineer specializing in MERN stack, Elixir/Phoenix, and AWS.",
  keywords:
    "Full Stack Developer, Backend Engineer, React, Node.js, Elixir, Phoenix, AWS, MERN Stack",
  authors: [{ name: "Aniket Ingole" }],
  openGraph: {
    title: "Aniket Ingole - Full Stack Developer",
    description:
      "Passionate about building scalable applications and solving real-world problems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
