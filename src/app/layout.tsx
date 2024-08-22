import type { Metadata } from "next";
import "./globals.css";
import { NotesProvider } from "@/context/notes-context";
import { TasksProvider } from "@/context/tasks-context";
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
        <NotesProvider>
          <Providers>{children}</Providers>
        </NotesProvider>
      </body>
    </html>
  );
}
