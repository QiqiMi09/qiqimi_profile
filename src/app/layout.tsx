import type { Metadata } from "next";
import { connection } from "next/server";

import { CopyProtection } from "@/components/CopyProtection";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi Studio | Creative Frontend Portfolio",
  description:
    "Bright, modern portfolio template inspired by editorial developer websites.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();
  return (
    <html lang="zh-CN">
      <body>
        <span hidden id="deploy-marker">
          build-contact-v3-mail-only
        </span>
        <CopyProtection />
        {children}
      </body>
    </html>
  );
}
