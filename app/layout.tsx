import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siti Nurhasanah, S.Kom. | Portofolio Profesional 2026",
  description:
    "Portofolio Profesional Siti Nurhasanah - Fresh Graduate S1 Teknik Informatika IIB Darmajaya (IPK 3.81 / Cumlaude). Information Technology, Data Processing, Web Development.",
  keywords: [
    "Siti Nurhasanah",
    "Portofolio",
    "Pranata Komputer",
    "MagangHub",
    "Teknik Informatika",
    "Web Developer",
    "Data Scientist",
    "C4.5",
    "Darmajaya"
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
