// src/components/lab/LabCatalog.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const categories = [
  { label: "Alat Lab", color: "bg-blue-100 text-blue-700" },
  { label: "Jas Dokter", color: "bg-violet-100 text-violet-700" },
  { label: "Jas Lab", color: "bg-emerald-100 text-emerald-700" },
];

const products = [
  { name: "Lorem Ipsum Product A", category: "Alat Lab", categoryColor: "bg-blue-100 text-blue-700" },
  { name: "Lorem Ipsum Product B", category: "Jas Dokter", categoryColor: "bg-violet-100 text-violet-700" },
  { name: "Lorem Ipsum Product C", category: "Jas Lab", categoryColor: "bg-emerald-100 text-emerald-700" },
  { name: "Lorem Ipsum Product D", category: "Alat Lab", categoryColor: "bg-blue-100 text-blue-700" },
  { name: "Lorem Ipsum Product E", category: "Jas Dokter", categoryColor: "bg-violet-100 text-violet-700" },
  { name: "Lorem Ipsum Product F", category: "Jas Lab", categoryColor: "bg-emerald-100 text-emerald-700" },
];

// Shimmer placeholder dengan animasi
const ProductShimmer = ({ name, category, categoryColor }: { name: string; category: string; categoryColor: string }) => (
  <div className="rounded-2xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(78,113,255,0.12)] hover:-translate-y-1 transition-all duration-300 group">
    {/* Shimmer image placeholder */}
    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-20">
        <div className="h-10 w-10 rounded-full bg-slate-400" />
        <div className="h-2 w-16 rounded-full bg-slate-400" />
      </div>
      {/* Category badge di atas gambar */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor}`}>
          {category}
        </span>
      </div>
    </div>
    {/* Info produk */}
    <div className="p-5">
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
      <p className="text-xs text-gray-400 mb-4">Hubungi kami untuk mendapatkan harga terbaik</p>
      <a
        href={buildWhatsAppUrl(`Halo, saya ingin bertanya tentang ${name}. Berapa harganya?`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Tanya Harga
      </a>
    </div>
  </div>
);

export const LabCatalog = () => {
  return (
    <section id="katalog" className="py-20 sm:py-28 bg-slate-50/50" aria-label="Katalog alat lab dan jas medis Nimas Medika Madiun">
      <Container>
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
            Pilihan Lengkap{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Alat Lab & Jas Medis
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stok tersedia langsung, bisa dicek ke toko atau pesan via WhatsApp.
          </p>

          {/* Category filter badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <span key={cat.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cat.color}`}>
                {cat.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProductShimmer {...product} />
            </motion.div>
          ))}
        </div>

        {/* CTA bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">Tidak menemukan yang kamu cari?</p>
          <a
            href={buildWhatsAppUrl("Halo, saya ingin menanyakan ketersediaan produk alat lab dan jas medis di Nimas Medika Madiun.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#20BD5A] transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami via WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
