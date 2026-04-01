// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"; // 1. Import komponen

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
  // Tambahkan bagian verification ini:
  verification: {
    google: "p71dgnqT2WYzBHldNGas6___BBvsRlazj5J0JwGyVJc",
  },
  // Di dalam metadata layout.tsx
  alternates: {
    canonical: "https://nimasmedika.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HYL3TMH3PJ"
        strategy="lazyOnload"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HYL3TMH3PJ');
        `}
      </Script>

      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        {/* 2. Tambahkan komponen ini di sini */}
        <SpeedInsights />
      </body>
    </html>
  );
}
