import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Carol Cárdenas | Portfolio",
  description:
    "Portfolio de Carol Cárdenas, desarrolladora frontend enfocada en React, JavaScript y Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${mono.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
