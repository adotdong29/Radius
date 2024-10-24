import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Themes } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radius",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <script data-wisp-store data-transport-store src="/chemical.js"></script>
      </head>
      <body className={inter.className}>
        <Themes>
          <Navbar />
          <div className="pt-14">{children}</div>
        </Themes>
      </body>
    </html>
  );
}
