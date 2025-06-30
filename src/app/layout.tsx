import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SnowBackground from "@/components/ui/snowbackground";
import { Navbar } from "@/components/common";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify needed weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jovan's Portfolio",
  description: "Jovan's Portfolio Website built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen mx-auto text-white relative">
          <SnowBackground />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
