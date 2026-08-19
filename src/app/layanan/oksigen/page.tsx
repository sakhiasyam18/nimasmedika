// src/app/layanan/oksigen/page.tsx
// ============================================================
// Halaman utama layanan oksigen Nimas Medika (/layanan/oksigen)
// - Menampilkan hero, pricing, panduan penggunaan, dan FAQ
// - SEO metadata di-export agar Next.js menambahkan <head> otomatis
// ============================================================

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OxygenHero } from "@/components/oksigen/OxygenHero";

// Lazy-load komponen below-the-fold untuk mengurangi TBT & mempercepat LCP
const OxygenPricing = dynamic(() => import("@/components/oksigen/OxygenPricing").then(m => ({ default: m.OxygenPricing })));
const UsageGuide = dynamic(() => import("@/components/oksigen/UsageGuide").then(m => ({ default: m.UsageGuide })));
const OxygenFAQ = dynamic(() => import("@/components/oksigen/OxygenFAQ").then(m => ({ default: m.OxygenFAQ })));
const ServiceArea = dynamic(() => import("@/components/oksigen/ServiceArea").then(m => ({ default: m.ServiceArea })));
const WhyChoose = dynamic(() => import("@/components/oksigen/WhyChoose").then(m => ({ default: m.WhyChoose })));
const OxygenServices = dynamic(() => import("@/components/oksigen/OxygenServices").then(m => ({ default: m.OxygenServices })));
const SafeUsage = dynamic(() => import("@/components/oksigen/SafeUsage").then(m => ({ default: m.SafeUsage })));

// ===== SEO Metadata khusus halaman oksigen =====
// Next.js App Router akan merge metadata ini dengan layout.tsx
export const metadata: Metadata = {
  title: "Tabung Oksigen Madiun – Jual, Sewa & Isi Ulang | Nimas Medika",
  description:
    "Layanan jual, sewa, dan isi ulang tabung oksigen di Madiun. Tersedia ukuran 1m³ & 6m³, isi ulang cepat 5 menit, tekanan penuh 2000 PSI. Siap antar ke rumah.",
  keywords: [
    "tabung oksigen madiun",
    "sewa oksigen madiun",
    "isi ulang oksigen madiun",
    "jual tabung oksigen madiun",
    "oksigen medis madiun",
    "nimas medika oksigen",
  ],
  alternates: {
    canonical: "/layanan/oksigen",
  },
  openGraph: {
    title: "Tabung Oksigen Madiun – Jual, Sewa & Isi Ulang | Nimas Medika",
    description:
      "Layanan oksigen terlengkap di Madiun. Isi ulang cepat 5 menit, tekanan 2000 PSI, siap antar ke rumah.",
    url: "https://nimasmedika.com/layanan/oksigen",
  },
};

// ===== Komponen Halaman Utama =====
export default function Oksigen() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Product"],
    "name": "Sewa, Jual, dan Isi Ulang Tabung Oksigen Medis Madiun",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Nimas Medika Alkes",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Kapten Tendean No. 68, Demangan, Kec. Taman",
        "addressLocality": "Madiun",
        "addressRegion": "Jawa Timur",
        "postalCode": "63136",
        "addressCountry": "ID"
      },
      "telephone": "+628123436075"
    },
    "areaServed": {
      "@type": "City",
      "name": "Madiun"
    },
    "description": "Layanan jual, sewa, dan isi ulang tabung oksigen medis 24 jam di Madiun. Melayani pesan antar ke rumah (home care). Oksigen 1m3 dan 6m3 terisi penuh 2000 PSI.",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 4,
      "lowPrice": 45000,
      "highPrice": 1700000,
      "priceCurrency": "IDR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 128
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Pelanggan Nimas Medika"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Pasien pemulihan, lansia, home care"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Container wrapper dari design system (max-width + padding) */}
      <Container>
        {/* Header navigasi global */}
        <Header />

        {/* 
          Main content area
          - bg-white: background putih bersih (sebelumnya bg-black yang konflik)
          - text-gray-900: teks gelap untuk readability optimal
        */}
        <main className="relative bg-white text-gray-900">
          <OxygenHero />
          <OxygenServices />
          <WhyChoose />
          <OxygenPricing />
          <UsageGuide />
          <SafeUsage />
          <ServiceArea />
          <OxygenFAQ />
        </main>

        {/* Footer global */}
        <Footer />
      </Container>
    </>
  );
}
