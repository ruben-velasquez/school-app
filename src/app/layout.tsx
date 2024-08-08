import type { Metadata } from "next";
import "./globals.css";

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
      { children }
    </html>
  );
}
