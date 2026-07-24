// src/app/layanan/oksigen/page.tsx
// ============================================================
// Halaman utama layanan oksigen Nimas Medika (/layanan/oksigen)
// - Menampilkan hero, pricing, panduan penggunaan, dan FAQ
// - SEO metadata di-export agar Next.js menambahkan <head> otomatis
// ============================================================

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OxygenHero } from "@/components/oksigen/OxygenHero";
import { OxygenPricing } from "@/components/oksigen/OxygenPricing";
import { UsageGuide } from "@/components/oksigen/UsageGuide";
import { OxygenFAQ } from "@/components/oksigen/OxygenFAQ";

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
  return (
    <>
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
          {/* Section 1: Hero — kesan pertama, headline + CTA + gambar */}
          <OxygenHero />

          {/* Section 2: Pricing — opsi sewa, beli, isi ulang dengan gallery */}
          <OxygenPricing />

          {/* Section 3: Panduan penggunaan — langkah-langkah aman pakai tabung */}
          <UsageGuide />

          {/* Section 4: FAQ — pertanyaan umum + JSON-LD schema */}
          <OxygenFAQ />
        </main>

        {/* Footer global */}
        <Footer />
      </Container>
    </>
  );
}
