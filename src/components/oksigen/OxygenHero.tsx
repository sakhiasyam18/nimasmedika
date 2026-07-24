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
import { motion } from "framer-motion";
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

// ===== Stagger Animation Variants =====
// Container variant mengatur delay antar children (badge items)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Setiap badge muncul 100ms setelah sebelumnya
      delayChildren: 0.3, // Mulai setelah heading + subtitle tampil
    },
  },
};

// Setiap badge: fade-in ke atas
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const OxygenHero = () => {
  return (
    <section
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
      aria-label="Hero layanan tabung oksigen Nimas Medika Madiun"
    >
      {/* ===== Background: Neon Glass Aura ===== */}
      {/* Gradient radial lembut yang menyatu dengan design system utama */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Radial biru lembut di tengah atas */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(78,113,255,0.10)_0%,rgba(78,113,255,0.04)_40%,transparent_70%)]" />
        {/* Glow cyan di kanan bawah — aksen visual */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(closest-side,rgba(141,216,255,0.18),transparent_70%)] blur-3xl" />
        {/* Glow ungu halus di kiri — depth visual */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[radial-gradient(closest-side,rgba(120,80,255,0.08),transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ===== Kolom Kiri: Copywriting + CTA ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Headline utama — h1 untuk SEO, kata kunci di depan */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Tabung Oksigen di Madiun —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
                Beli atau Sewa
              </span>
            </h1>

            {/* Subtitle — penjelasan layanan yang meyakinkan */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jika Anda sedang mencari layanan{" "}
              <strong className="text-gray-900">
                jual atau sewa tabung oksigen di Madiun
              </strong>
              ,{" "}
              <strong className="text-primary">Nimas Medika</strong>{" "}
              memberikan solusi medis yang cepat dan terpercaya. Kami menyediakan
              tabung oksigen ukuran 1m³ dan 6m³ dengan layanan isi ulang cepat
              hanya 5 menit, terisi penuh 2000 PSI, dan siap antar ke rumah.
            </p>

            {/* ===== CTA Buttons ===== */}
            {/* 2 tombol: primary (lihat harga) & secondary (WhatsApp) */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Tombol utama — scroll ke section harga */}
              <motion.a
                href="#harga"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
                  font-semibold text-white
                  shadow-[0_0_28px_rgba(78,113,255,0.40)]
                  hover:shadow-[0_0_44px_rgba(141,216,255,0.55)]
                  transition-shadow"
              >
                Lihat Opsi & Harga
              </motion.a>

              {/* Tombol sekunder — buka WhatsApp langsung (dengan footer promosi) */}
              <motion.a
                href={buildWhatsAppUrl("Halo, saya tertarik dengan layanan tabung oksigen di Madiun. Bisa info lebih lanjut?")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  border border-slate-200 bg-white/70 backdrop-blur-xl
                  font-semibold text-slate-800
                  shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)]
                  hover:shadow-[0_14px_40px_-10px_rgba(78,113,255,0.25)]
                  hover:border-primary/30
                  transition-shadow"
              >
                Konsultasi via WhatsApp
              </motion.a>
            </div>

            {/* ===== Trust Badges Grid ===== */}
            {/* 4 badge kecil yang tampil staggered untuk membangun kepercayaan */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-slate-100
                    bg-white/60 backdrop-blur-sm p-3.5
                    hover:border-primary/20 hover:shadow-md transition-all"
                >
                  {/* Ikon badge — warna primary */}
                  <div className="flex-shrink-0 grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary">
                    <badge.icon className="h-4.5 w-4.5" />
                  </div>
                  {/* Label + deskripsi singkat */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {badge.label}
                    </p>
                    <p className="text-xs text-gray-500">{badge.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== Kolom Kanan: Grid Gambar Interaktif ===== */}
          {/* Layout: 1 gambar besar full-width + 2 gambar kecil di bawah */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {/* Gambar utama — span 2 kolom, aspect landscape */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/60"
              >
                <Image
                  src="/images/pic1756648782.jpg"
                  alt="Tabung Oksigen 1m³ Nimas Medika Madiun — siap pakai dan terisi penuh"
                  width={500}
                  height={334}
                  className="w-full h-auto object-cover"
                  priority // Gambar hero harus di-preload
                />
                {/* Gradient overlay bawah untuk depth visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Gambar kecil kiri — tabung lengkap */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/60"
              >
                <Image
                  src="/images/pic1756648963.jpg"
                  alt="Tabung Oksigen lengkap dengan regulator dan troli"
                  width={214}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gambar kecil kanan — proses isi ulang */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/60"
              >
                <Image
                  src="/images/pic1756649014.jpg"
                  alt="Proses isi ulang tabung oksigen cepat 5 menit"
                  width={214}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
