import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GrainEffect from "./components/visualEffects/grain-effect";
import Cursor from "./components/cursor/cursor";
import { FloatingNavDemo } from "./components/nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viv.io",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* <GrainEffect/> */}
        <Cursor/>
        <FloatingNavDemo />
        {children}</body>
    </html>
  );
}
