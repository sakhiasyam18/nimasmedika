// src/components/UsageGuide.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ShieldCheck } from "lucide-react";

export const UsageGuide = () => {
  return (
    <section
      id="usage-guide"
      aria-label="Panduan penggunaan tabung oksigen Nimas Medika"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 py-24 sm:py-32"
    >
      {/* Background soft pastel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-200 via-teal-200 to-blue-200 rounded-full blur-[100px] opacity-40" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Cara Penggunaan yang Aman
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Keamanan Anda adalah prioritas kami. Staf kami akan memberikan
            panduan lengkap saat Anda membeli atau saat barang diantar. Berikut
            langkah dasarnya:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 space-y-6 max-w-2xl mx-auto">
          {[
            "Pastikan knop regulator dalam posisi 'Close' (tertutup) sebelum dipasang.",
            "Pasang regulator dengan kencang ke kepala tabung oksigen.",
            "Buka keran utama di puncak tabung secara perlahan.",
            "Atur aliran oksigen pada knop sesuai anjuran dokter.",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 rounded-xl border border-slate-200/40 bg-white/70 backdrop-blur-sm p-4 shadow-md hover:shadow-lg transition"
            >
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-blue-500" />
              <p className="text-gray-800">{step}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
