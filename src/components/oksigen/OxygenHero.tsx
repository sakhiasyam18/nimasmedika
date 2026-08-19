// src/components/oksigen/OxygenHero.tsx
// ============================================================
// Hero Section untuk halaman layanan oksigen
// - Menampilkan headline utama SEO-friendly
// - Trust badges (jam buka, isi ulang cepat, pengiriman, sertifikasi)
// - CTA buttons: Lihat Harga & Konsultasi WhatsApp
// - Grid gambar interaktif dengan hover zoom
// - Background: neon glass gradient sesuai design system
// ============================================================
"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Clock, Zap, Truck, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// ===== Data Trust Badges =====
// Badge-badge ini muncul di bawah headline untuk membangun kepercayaan
// sebelum user scroll ke pricing section
const trustBadges = [
  {
    icon: Clock,
    label: "Buka 06.00 – 22.00",
    description: "Setiap hari tanpa libur",
  },
  {
    icon: Zap,
    label: "Isi Ulang 5 Menit",
    description: "Tekanan penuh 2000 PSI",
  },
  {
    icon: Truck,
    label: "Antar ke Rumah",
    description: "Layanan delivery Madiun",
  },
  {
    icon: ShieldCheck,
    label: "Terdaftar KEMENKES",
    description: "Produk original & aman",
  },
];

// Setiap badge: fade-in ke atas
const itemVariants = "animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both";

const staggerDelay = (i: number) => ({ animationDelay: `${300 + i * 100}ms` });

export const OxygenHero = () => {
  return (
    <section
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-24 sm:pb-32"
      aria-label="Hero layanan tabung oksigen Nimas Medika Madiun"
    >
      {/* ===== Background: Neon Glass Aura ===== */}
      {/* Gradient radial lembut yang menyatu dengan design system utama */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ contain: 'layout paint' }}>
        {/* Radial biru lembut di tengah atas */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(78,113,255,0.10)_0%,rgba(78,113,255,0.04)_40%,transparent_70%)]" />
        {/* Glow cyan di kanan bawah — aksen visual */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(closest-side,rgba(141,216,255,0.18),transparent_70%)]" />
        {/* Glow ungu halus di kiri — depth visual */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(closest-side,rgba(120,80,255,0.08),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ===== Kolom Kiri: Copywriting + CTA ===== */}
          <div
            className="animate-in fade-in slide-in-from-left-6 duration-700"
          >
            {/* Headline utama — h1 untuk SEO, kata kunci di depan */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Sewa, Jual &amp; Isi Ulang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
                Tabung Oksigen Madiun
              </span>
            </h1>

            {/* Subtitle — penjelasan layanan yang meyakinkan */}
            <div className="mt-6 text-lg leading-8 text-gray-600 space-y-4">
              <p>
                Sedang mencari tempat sewa tabung oksigen di Madiun? Ingin isi ulang tabung oksigen medis dengan cepat? Atau membutuhkan pengiriman tabung oksigen ke rumah?
              </p>
              <p>
                <strong className="text-primary">Nimas Medika Alkes</strong> siap membantu kebutuhan Anda. Kami adalah toko alat kesehatan di Kota Madiun yang menyediakan layanan <strong className="text-gray-900">sewa tabung oksigen</strong>, <strong className="text-gray-900">jual tabung oksigen</strong>, <strong className="text-gray-900">isi ulang oksigen medis</strong>, regulator, troli, dan layanan pengantaran ke rumah setiap hari.
              </p>
            </div>

            {/* ===== CTA Buttons ===== */}
            {/* 2 tombol: primary (lihat harga) & secondary (WhatsApp) */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Tombol utama — scroll ke section harga */}
              <a
                href="#harga"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
                  font-semibold text-white
                  shadow-[0_0_28px_rgba(78,113,255,0.40)]
                  hover:shadow-[0_0_44px_rgba(141,216,255,0.55)]
                  hover:scale-[1.04] active:scale-[0.97]
                  transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Lihat Opsi & Harga
              </a>

              {/* Tombol sekunder — buka WhatsApp langsung (dengan footer promosi) */}
              <a
                href={buildWhatsAppUrl("Halo, saya tertarik dengan layanan tabung oksigen di Madiun. Bisa info lebih lanjut?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  border border-white/60 bg-white/70 backdrop-blur-md
                  font-semibold text-slate-800
                  shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                  hover:shadow-[0_14px_40px_-10px_rgba(78,113,255,0.3)]
                  hover:border-primary/40 hover:bg-white/90
                  hover:scale-[1.04] active:scale-[0.97]
                  transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Konsultasi via WhatsApp
              </a>
            </div>

            {/* ===== Trust Badges Grid ===== */}
            {/* 4 badge kecil yang tampil staggered untuk membangun kepercayaan */}
            <div
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={badge.label}
                  className={`flex items-start gap-3 rounded-2xl border border-white/60
                    bg-white/70 backdrop-blur-md p-4
                    shadow-[0_4px_20px_rgb(0,0,0,0.03)]
                    hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(78,113,255,0.12)]
                    transition-all duration-300 group ${itemVariants}`}
                  style={staggerDelay(i)}
                >
                  {/* Ikon badge — warna primary */}
                  <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  {/* Label + deskripsi singkat */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {badge.label}
                    </p>
                    <p className="text-xs text-gray-500">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Kolom Kanan: Grid Gambar Interaktif ===== */}
          {/* Layout: 1 gambar besar full-width + 2 gambar kecil di bawah */}
          <div
            className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-700"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {/* Gambar utama — span 2 kolom, aspect landscape */}
              <div
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/60 hover:scale-[1.03] transition-transform duration-300"
              >
                <Image
                  src="/images/pic1756648782.jpg"
                  alt="Tabung oksigen medis 1m³ Nimas Medika Madiun"
                  width={500}
                  height={334}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="w-full h-auto object-cover"
                  priority // Gambar hero harus di-preload
                />
                {/* Gradient overlay bawah untuk depth visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Gambar kecil kiri — tabung lengkap */}
              <div
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/60 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/pic1756648963.jpg"
                  alt="Tabung oksigen 6m³ siap pakai lengkap dengan regulator dan troli"
                  width={214}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gambar kecil kanan — proses isi ulang */}
              <div
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/60 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/pic1756649014.jpg"
                  alt="Proses isi ulang tabung oksigen di Nimas Medika"
                  width={214}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
