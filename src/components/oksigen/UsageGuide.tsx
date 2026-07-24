// src/components/oksigen/UsageGuide.tsx
// ============================================================
// Section Panduan Penggunaan Tabung Oksigen
// - 4 langkah penggunaan yang aman dengan numbered circles
// - Connecting lines antar step untuk visual flow
// - Safety warning box di bagian bawah
// - Staggered animation saat scroll
// - Glassmorphism cards konsisten dengan design system
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// ===== Data Steps =====
// Array langkah-langkah penggunaan tabung oksigen yang aman.
// Setiap step memiliki judul pendek dan deskripsi detail.
const steps = [
  {
    title: "Tutup Knop Dulu",
    description:
      "Pastikan knop masih di posisi Close sebelum memasang regulator. Ini langkah keamanan dasar yang wajib dilakukan.",
  },
  {
    title: "Kencangkan Regulator",
    description:
      "Pasang regulator ke tabung lalu kencangkan sampai benar-benar mantap. Jangan sampai ada kebocoran.",
  },
  {
    title: "Buka Keran Perlahan",
    description:
      "Putar keran utama secara perlahan. Jangan dibuka langsung full — biar tekanan naik secara bertahap dan aman.",
  },
  {
    title: "Atur Aliran Oksigen",
    description:
      "Sesuaikan aliran oksigen sesuai kebutuhan dan kenyamanan Anda. Gunakan flowmeter pada regulator untuk mengatur liter per menit.",
  },
];

// ===== Stagger Animation Variants =====
// Container mengatur timing stagger antar children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Setiap step muncul 150ms setelah sebelumnya
      delayChildren: 0.2,
    },
  },
};

// Setiap step: slide dari kiri + fade in
// Catatan: 'as const' diperlukan agar TypeScript mengenali "easeOut"
// sebagai literal type (Easing), bukan generic string
const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const UsageGuide = () => {
  return (
    <section
      id="usage-guide"
      aria-label="Panduan penggunaan tabung oksigen Nimas Medika"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* ===== Background: Gradient halus pastel ===== */}
      {/* Konsisten dengan OxygenHero — menggunakan radial gradients lembut */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {/* Gradient biru-ungu di tengah atas */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(closest-side,rgba(78,113,255,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(closest-side,rgba(141,216,255,0.08),transparent_70%)] blur-3xl" />
      </div>

      <Container>
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Cara Penggunaan yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Aman
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Santai aja, pakai tabung oksigen itu gampang kok. Yang penting
            ikuti langkah-langkah ini secara berurutan:
          </p>
        </motion.div>

        {/* ===== Steps dengan Numbered Circles + Connecting Lines ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 max-w-2xl mx-auto space-y-0"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={stepVariants} className="relative">
              {/* ===== Step Item ===== */}
              <div className="flex items-start gap-5">
                {/* --- Kolom Kiri: Numbered Circle + Connecting Line --- */}
                <div className="relative flex flex-col items-center">
                  {/* Nomor step dalam lingkaran gradient */}
                  <div
                    className="z-10 flex-shrink-0 grid place-items-center h-11 w-11 rounded-full
                      bg-gradient-to-br from-[#4E71FF] to-[#8DD8FF]
                      text-white font-bold text-lg
                      shadow-[0_0_0_5px_rgba(78,113,255,0.12)]
                      ring-4 ring-primary/10"
                  >
                    {i + 1}
                  </div>

                  {/* Connecting line ke step berikutnya */}
                  {/* Hanya tampil jika bukan step terakhir */}
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-gradient-to-b from-primary/25 to-transparent" />
                  )}
                </div>

                {/* --- Kolom Kanan: Content Card --- */}
                <div
                  className={`flex-1 rounded-xl border border-slate-100/80
                    bg-white/70 backdrop-blur-sm p-5
                    shadow-[0_4px_20px_rgb(0,0,0,0.03)]
                    hover:border-primary/20 hover:shadow-lg
                    transition-all duration-300
                    ${i < steps.length - 1 ? "mb-4" : ""}`}
                >
                  {/* Ikon + judul step */}
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" />
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  {/* Deskripsi detail */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-8">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Safety Warning Box ===== */}
        {/* Alert penting tentang keamanan penggunaan oksigen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div
            className="flex items-start gap-4 rounded-2xl border border-amber-200/60
              bg-gradient-to-r from-amber-50/80 to-orange-50/60 backdrop-blur-sm
              p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
          >
            {/* Ikon peringatan */}
            <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-amber-100 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            {/* Teks peringatan */}
            <div>
              <h4 className="font-heading text-sm font-bold text-amber-800 mb-1">
                Peringatan Keamanan
              </h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                Jauhkan tabung oksigen dari sumber api dan panas berlebih. Simpan
                dalam posisi tegak di tempat berventilasi baik. Jika ragu,
                hubungi tim kami di{" "}
                <a
                  href={buildWhatsAppUrl("Halo, saya butuh panduan penggunaan tabung oksigen.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-amber-900 transition-colors"
                >
                  WhatsApp
                </a>{" "}
                untuk panduan penggunaan.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
