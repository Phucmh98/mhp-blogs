import type { Metadata } from "next";
import {  Kanit } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/commons/providers/app-provider/approvider";



const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phuc-MH",
  description: "MHP-Portfolio",
  icons: {
    icon: "/image/logo_mhp_head.svg",
    shortcut: "/image/logo_mhp_head.svg",
    apple: "/image/logo_mhp_head.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${kanit.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
