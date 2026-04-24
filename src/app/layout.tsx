import type { Metadata } from "next";
import { CopyProtection } from "@/components/CopyProtection";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi Studio | Creative Frontend Portfolio",
  description:
    "Bright, modern portfolio template inspired by editorial developer websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <CopyProtection />
        {children}
      </body>
    </html>
  );
}
