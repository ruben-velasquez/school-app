import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "School Management",
  description: "Useful tool for improve your workflow in studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex font-main">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
