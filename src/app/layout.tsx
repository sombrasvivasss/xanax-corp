import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/ui/DarkVeil";

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xanaxx",
  description: "xanaxx official homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`${kodeMono.variable} antialiased w-screen h-screen bg-background text-foreground`}
      >
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <DarkVeil />
        </div>
        {children}
      </body>
    </html>
  );
}