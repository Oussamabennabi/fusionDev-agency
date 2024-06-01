import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Code Killers Studio",
  description: "oussama bennabi agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
