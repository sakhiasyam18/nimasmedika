// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

// Konfigurasi Font
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// METADATA SEO & AEO
export const metadata: Metadata = {
  metadataBase: new URL("https://nimasmedika.com"), // Penting untuk absolute URL resolve
  title: "Nimas Medika - Toko Alat Kesehatan & Tabung Oksigen di Madiun", // Dipertajam sedikit
  description:
    "Nimas Medika Madiun: Toko alat kesehatan (alkes) terlengkap, melayani jual, beli, sewa, dan isi ulang tabung oksigen 24 jam dengan layanan pesan antar.",
  keywords: [
    "alat kesehatan madiun",
    "alkes madiun",
    "sewa oksigen madiun",
    "isi ulang oksigen madiun", // Tambahan keyword potensial
    "nimas medika madiun",
    "toko alkes 24 jam madiun",
  ],
  authors: [{ name: "Nimas Medika" }],
  creator: "Nimas Medika",
  publisher: "Nimas Medika",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  // Undang bot dengan eksplisit
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-nimas-medika-alkes-madiun.ico",
  },
  verification: {
    google: "p71dgnqT2WYzBHldNGas6___BBvsRlazj5J0JwGyVJc",
  },
  alternates: {
    canonical: "/", // Akan otomatis digabung dengan metadataBase
  },
  openGraph: {
    title: "Nimas Medika - Toko Alkes & Oksigen Terlengkap di Madiun",
    description:
      "Melayani jual, beli, sewa, dan isi ulang tabung oksigen 24 jam di Madiun. Proses cepat dan bisa diantar ke rumah.",
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
  // DATA TERSTRUKTUR (JSON-LD) SUPERCHARGED
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"], // Kombinasi agar lebih dikenali sebagai toko fisik lokal
    name: "Nimas Medika Alkes Madiun",
    description:
      "Toko alat kesehatan terlengkap di Madiun. Menyediakan layanan sewa, beli, dan isi ulang tabung oksigen dengan cepat.",
    image: "https://nimasmedika.com/logo-nimas-medika-alkes-madiun.ico",
    "@id": "https://nimasmedika.com",
    url: "https://nimasmedika.com",
    telephone: "+628123436075",
    priceRange: "$$", // Menghindari warning di Search Console
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Kapten Tendean No.68, Demangan, Kec. Taman, Kota Madiun",
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
    // Sinyal kuat untuk AI Bot agar tahu relasi ekosistem digital kamu
    sameAs: [
      "https://maps.app.goo.gl/ZajN9TRUo8KvFyn8A",
      "https://instagram.com/nimasmedika",
      "https://www.youtube.com/@alatkesehatanmadiun",
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-HYL3TMH3PJ" />
        <SpeedInsights />
      </body>
    </html>
  );
}
