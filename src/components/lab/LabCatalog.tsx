// src/components/lab/LabCatalog.tsx
// ============================================================
// Catalog Section — Bento Collage Grid (ala CROING editorial)
// Shimmer placeholders + glassmorphic overlays
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const products = [
  {
    name: "Tabung Reaksi & Gelas Laboratorium",
    category: "Alat Lab",
    catColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    span: "col-span-2 row-span-2",
    aspect: "aspect-square",
  },
  {
    name: "Jas Dokter Lengan Panjang",
    category: "Jas Dokter",
    catColor: "bg-violet-500/10 text-violet-600 border-violet-200/50",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Jas Laboratorium Anti Kimia",
    category: "Jas Lab",
    catColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Mikropipet & Alat Ukur Presisi",
    category: "Alat Lab",
    catColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    span: "col-span-1 row-span-2",
    aspect: "aspect-auto h-full",
  },
  {
    name: "Sentrifuge Digital Laboratorium",
    category: "Alat Lab",
    catColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[21/9]",
  },
  {
    name: "Jas Dokter Lengan Pendek",
    category: "Jas Dokter",
    catColor: "bg-violet-500/10 text-violet-600 border-violet-200/50",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Peralatan Sterilisasi & Autoklaf",
    category: "Alat Lab",
    catColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[21/9]",
  },
  {
    name: "Jas Lab Praktikum Kampus",
    category: "Jas Lab",
    catColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
];

const CatalogCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className={`group relative ${product.span}`}
  >
    <div
      className={`relative ${product.aspect} w-full h-full overflow-hidden rounded-3xl
        bg-white/40 backdrop-blur-xl border border-white/40
        shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_-4px_12px_rgba(255,255,255,0.7)]
        hover:shadow-[6px_6px_20px_rgba(0,0,0,0.08),-6px_-6px_20px_rgba(255,255,255,0.9)]
        hover:-translate-y-1 transition-all duration-400 cursor-pointer`}
    >
      {/* Neumorphic shimmer base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50/80 to-white" />
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating center placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-300">
        <div className="h-12 w-12 rounded-2xl bg-slate-400" />
        <div className="h-2.5 w-24 rounded-full bg-slate-400" />
        <div className="h-2 w-16 rounded-full bg-slate-300" />
      </div>

      {/* Category badge — top left */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold
            backdrop-blur-xl border shadow-sm ${product.catColor}`}
        >
          {product.category}
        </span>
      </div>

      {/* Info overlay — bottom */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-5">
        <div className="rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/40 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
          <p className="text-[11px] text-gray-400 mb-3">Hubungi kami untuk harga terbaik</p>
          <a
            href={buildWhatsAppUrl(`Halo, saya ingin bertanya tentang ${product.name}. Berapa harganya?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Tanya Harga
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export const LabCatalog = () => {
  return (
    <section
      id="katalog"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Katalog alat lab dan jas medis Nimas Medika Madiun"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30" />
        <div
          className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.07),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Katalog Produk
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Koleksi Lengkap{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Alat Lab & Jas Medis
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semua produk tersedia langsung, bisa dicek ke toko atau pesan via WhatsApp.
          </p>
        </motion.div>

        {/* ===== Bento Collage Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[180px] sm:auto-rows-[200px]">
          {products.map((product, index) => (
            <CatalogCard key={product.name} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-5">Tidak menemukan yang kamu cari?</p>
          <a
            href={buildWhatsAppUrl("Halo, saya ingin menanyakan ketersediaan produk alat lab dan jas medis di Nimas Medika Madiun.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5
              bg-gradient-to-r from-[#25D366] to-[#20BD5A]
              text-sm font-semibold text-white
              shadow-[0_0_20px_rgba(37,211,102,0.25),0_6px_16px_rgba(37,211,102,0.20)]
              hover:shadow-[0_0_32px_rgba(37,211,102,0.35),0_10px_24px_rgba(37,211,102,0.25)]
              hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami via WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
