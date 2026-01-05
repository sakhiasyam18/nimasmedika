// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // Pastikan ini mengimpor file CSS global kita
import Script from "next/script";

// Konfigurasi font Inter untuk teks biasa
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Ini akan menghubungkan ke tailwind.config.ts
});

// Konfigurasi font Plus Jakarta Sans untuk judul
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", // Ini akan menghubungkan ke tailwind.config.ts
});

export const metadata: Metadata = {
  title: "Nimas Medika - Toko Alat Kesehatan Terlengkap di Madiun", // Judul SEO kita
  description:
    "Nimas Medika Alkes: Toko alat kesehatan terlengkap di Madiun. Menyediakan alat kedokteran, kebidanan, lab, & terapi. Melayani jual, beli, dan sewa oksigen.", // Deskripsi SEO kita
  icons: {
    icon: "/logo-nimas-medika-alkes-madiun.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HYL3TMH3PJ"
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
      </body>
    </html>
  );
}
