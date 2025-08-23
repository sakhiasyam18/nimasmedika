// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";

export const OxygenHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background Neon Gradient Multiwarna */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400 via-green-400 to-cyan-400 rounded-full blur-[120px] opacity-40 animate-pulse delay-200" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-tl from-blue-500 via-indigo-400 to-pink-500 rounded-full blur-[100px] opacity-30 animate-pulse delay-500" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kiri: SEO Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Tabung Oksigen 1m³ di Madiun - Beli atau Sewa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Nimas Medika menyediakan layanan{" "}
              <strong>jual tabung oksigen 1m³</strong>
              dan <strong>sewa tabung oksigen murah di Madiun</strong>. Tabung
              sudah terisi penuh 2000 PSI, aman dan siap pakai untuk perawatan
              medis di rumah atau keperluan darurat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#harga"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105 hover:shadow-neon"
              >
                Lihat Opsi & Harga
              </a>
              <a
                href="https://wa.me/628xxxxxx"
                className="inline-block rounded-full border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Kanan: Gambar Interaktif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Gambar Besar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 rounded-xl overflow-hidden shadow-lg neon-border"
              >
                <Image
                  src="/images/service-oksigen.jpg"
                  alt="Tabung Oksigen 1m³ Nimas Medika"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Gambar kecil tambahan */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-md neon-border"
              >
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Tabung Oksigen Lengkap"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-md neon-border"
              >
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Isi Ulang Tabung Oksigen"
                  width={240}
                  height={240}
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
