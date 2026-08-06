// src/app/layanan/alat-lab-madiun-dan-jas-dokter-jas-lab/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LabHero } from "@/components/lab/LabHero";
import { LabServices } from "@/components/lab/LabServices";
import { LabWhyChoose } from "@/components/lab/LabWhyChoose";
import { LabCatalog } from "@/components/lab/LabCatalog";
import { ServiceArea } from "@/components/oksigen/ServiceArea";
import { LabFAQ } from "@/components/lab/LabFAQ";

export const metadata: Metadata = {
  title: "Jual Alat Lab & Jas Dokter Madiun – Lengkap & Terpercaya | Nimas Medika",
  description:
    "Jual alat laboratorium medis, jas dokter, dan jas lab di Madiun. Stok lengkap, harga terjangkau, produk original bersertifikat KEMENKES. Siap antar area Madiun. Hubungi Nimas Medika sekarang!",
  keywords: [
    "alat lab madiun",
    "jual alat laboratorium madiun",
    "jas dokter madiun",
    "jas lab madiun",
    "alat kesehatan laboratorium madiun",
    "nimas medika alat lab",
    "jual jas dokter madiun",
    "toko alat lab madiun",
  ],
  alternates: {
    canonical: "/layanan/alat-lab-madiun-dan-jas-dokter-jas-lab",
  },
  openGraph: {
    title: "Jual Alat Lab & Jas Dokter Madiun – Nimas Medika",
    description:
      "Toko alat laboratorium dan jas medis terlengkap di Madiun. Produk original, harga transparan, siap antar.",
    url: "https://nimasmedika.com/layanan/alat-lab-madiun-dan-jas-dokter-jas-lab",
  },
};

export default function AlatLabPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "Nimas Medika Alkes – Alat Lab & Jas Dokter Madiun",
    description:
      "Jual alat laboratorium medis, jas dokter, dan jas lab di Madiun. Stok lengkap, produk original bersertifikat KEMENKES.",
    provider: {
      "@type": "MedicalBusiness",
      name: "Nimas Medika Alkes",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Kapten Tendean No. 68, Demangan, Kec. Taman",
        addressLocality: "Madiun",
        addressRegion: "Jawa Timur",
        postalCode: "63136",
        addressCountry: "ID",
      },
      telephone: "+628123436075",
    },
    areaServed: {
      "@type": "City",
      name: "Madiun",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "3",
      priceCurrency: "IDR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "64",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Header />
        <main className="relative bg-white text-gray-900">
          <LabHero />
          <LabServices />
          <LabWhyChoose />
          <LabCatalog />
          <ServiceArea />
          <LabFAQ />
        </main>
        <Footer />
      </Container>
    </>
  );
}
