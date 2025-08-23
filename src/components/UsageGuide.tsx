// src/components/UsageGuide.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ShieldCheck } from "lucide-react";

export const UsageGuide = () => {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Cara Penggunaan yang Aman
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keamanan Anda adalah prioritas kami. Staf kami akan memberikan
            panduan lengkap saat Anda membeli atau saat barang diantar. Berikut
            langkah dasarnya:
          </p>
        </motion.div>

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
              className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl shadow hover:shadow-neon transition"
            >
              <ShieldCheck className="text-primary h-6 w-6 flex-shrink-0" />
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
