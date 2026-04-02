// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"; // Metode modern & cepat

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Nimas Medika - Toko Alat Kesehatan Terlengkap di Madiun",
  description:
    "Nimas Medika Alkes: Toko alat kesehatan terlengkap di Madiun. Menyediakan alat kedokteran, kebidanan, lab, & terapi. Melayani jual, beli, dan sewa oksigen.",
  icons: {
    icon: "/logo-nimas-medika-alkes-madiun.ico",
  },
  verification: {
    google: "p71dgnqT2WYzBHldNGas6___BBvsRlazj5J0JwGyVJc", // Token GSC Anda
  },
  alternates: {
    canonical: "https://nimasmedika.com", // Kunci SEO ke domain utama
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* SINKRONISASI TOTAL: Menggunakan ID asli dari hasil audit dashboard Anda */}
      <GoogleTagManager gtmId="GTM-T8B4XNZV" />
      <GoogleAnalytics gaId="G-5M3G96S5S4" />

      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
