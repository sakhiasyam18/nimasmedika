// src/components/TrustGallery.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Package, Star } from "lucide-react";

const stats = [
  { name: "Ready Stock", value: "Sejak 2001", icon: Award },
  { name: "Bisa Order Online", value: "1000+ Produk", icon: Package },
  { name: "Bisa Antar", value: "4.8 Google", icon: Star },
];

export const TrustGallery = () => {
  return (
    // Mengganti background menjadi abu-abu sangat muda untuk kontras yang lembut
    <div className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alkes lengkap. Oksigen ready. Satu tempat → semua ada.
          </h2>
        </motion.div>

        {/* Social Proof Section - Didesain ulang dengan warna cerah */}
        <div className="mt-16 flex justify-center gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mt-2 font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Galeri Foto dengan gaya bersih dan bayangan lembut */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <div className="aspect-video w-full rounded-2xl shadow-xl overflow-hidden">
            {/* Ganti dengan Image component Anda nanti */}
            <Image
              src="https://placehold.co/1280x720/e2e8f0/334155?text=Galeri+Foto+Nimas+Medika"
              alt="Galeri Foto asli dari toko Nimas Medika di Madiun"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
