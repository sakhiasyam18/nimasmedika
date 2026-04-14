// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

// Konfigurasi Font untuk performa maksimal
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

// Konfigurasi Viewport untuk responsivitas mobile
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// METADATA SEO (Sangat penting untuk ranking Google)
export const metadata: Metadata = {
  title: "Nimas Medika - Toko Alat Kesehatan Terlengkap di Madiun",
  description:
    "Nimas Medika Alkes: Toko alat kesehatan terlengkap di Madiun. Menyediakan alat kedokteran, kebidanan, lab, & terapi. Melayani jual, beli, dan sewa oksigen.",
  keywords: [
    "alat kesehatan madiun",
    "alkes madiun",
    "sewa oksigen madiun",
    "nimas medika madiun",
    "alat kedokteran madiun",
    "toko alkes terlengkap",
  ],
  authors: [{ name: "Nimas Medika" }],
  creator: "Nimas Medika",
  publisher: "Nimas Medika",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/logo-nimas-medika-alkes-madiun.ico",
  },
  verification: {
    google: "p71dgnqT2WYzBHldNGas6___BBvsRlazj5J0JwGyVJc",
  },
  alternates: {
    canonical: "https://nimasmedika.com",
  },
  // OpenGraph untuk tampilan share di Media Sosial/WhatsApp
  openGraph: {
    title: "Nimas Medika - Toko Alat Kesehatan Terlengkap di Madiun",
    description:
      "Menyediakan alat kedokteran, kebidanan, lab, & terapi. Jual, beli, dan sewa oksigen di Madiun.",
    url: "https://nimasmedika.com",
    siteName: "Nimas Medika Alkes",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // DATA TERSTRUKTUR (JSON-LD) - Membantu Google mengenali Bisnis Lokal kamu
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Nimas Medika Alkes Madiun",
    image: "https://nimasmedika.com/logo-nimas-medika-alkes-madiun.ico", // Ganti dengan URL logo asli jika ada
    "@id": "https://nimasmedika.com",
    url: "https://nimasmedika.com",
    telephone: "+628123436075", // Masukkan nomor telepon toko kamu di sini
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Kapten Tendean No.68, Demangan, Kec. Taman, Kota Madiun, Jawa Timur 63136, Indonesia",
      addressLocality: "Madiun",
      addressRegion: "Jawa Timur",
      postalCode: "63136",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.6358,
      longitude: 111.5332,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "22:00",
    },
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Schema Markup untuk Google Search Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 - Menggunakan ID valid dari akun kamu */}
        {/* GTM dihapus karena akun belum dibuat di dashboard Google untuk mencegah error */}
        <GoogleAnalytics gaId="G-HYL3TMH3PJ" />
      </head>

      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}

        {/* Insight Performa dari Vercel */}
        <SpeedInsights />
      </body>
    </html>
  );
}
