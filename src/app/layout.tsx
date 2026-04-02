// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"; // Library modern untuk performa 100

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
    google: "p71dgnqT2WYzBHldNGas6___BBvsRlazj5J0JwGyVJc", // Token verifikasi sesuai GSC Anda
  },
  alternates: {
    canonical: "https://nimasmedika.com", // Kunci agar AI Google fokus ke domain utama .com
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* SINKRONISASI 1: GTM ID (GTM-T8B4XNZV) */}
      <GoogleTagManager gtmId="GTM-T8B4XNZV" />

      {/* SINKRONISASI 2: GA4 ID (G-5M3G96S5S4) */}
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
