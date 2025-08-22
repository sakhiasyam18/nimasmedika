"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-white text-gray-900"
      aria-label="Nimas Medika Alkes – Apotek & Alat Kesehatan di Madiun"
    >
      {/* Neon + glass aura yang menyatu ke section berikutnya */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Radial biru lembut di tengah */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(78,113,255,0.12)_0%,rgba(78,113,255,0.06)_35%,transparent_70%)]" />
        {/* Glow bawah agar menyambung ke section selanjutnya */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[85%] rounded-[60px] blur-3xl opacity-50 bg-[radial-gradient(closest-side,rgba(141,216,255,0.35),transparent_70%)]" />
      </div>

      <Container className="relative z-10 py-28 sm:py-36">
        {/* Heading SEO-friendly */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Nimas Medika Alkes – Apotek & Alat Kesehatan di Madiun
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl text-slate-700">
            Perlengkapan Kedokteran Kesehatan Kebidanan Laboratorium Alat Terapi
          </p>
          <p className="capitalize mt-2 text-lg text-slate-600">
            Jual, beli, &amp; sewa tabung oksigen madiun
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="https://wa.me/628123436075"
            target="_blank"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full px-8 py-4
            bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
            font-semibold text-white
            shadow-[0_0_28px_rgba(78,113,255,0.45)]
            hover:shadow-[0_0_44px_rgba(141,216,255,0.65)]
            transition-all"
            aria-label="Chat Sekarang Nimas Medika"
          >
            Chat Sekarang
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/KgHkYQ6x1PkvxugX9"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full px-8 py-4
            border border-slate-200 bg-white/70 backdrop-blur-xl
            font-semibold text-slate-800
            shadow-[0_10px_30px_-12px_rgba(15,23,42,0.2)]
            hover:shadow-[0_14px_40px_-10px_rgba(78,113,255,0.35)]
            transition-all"
            aria-label="Arahkan ke Lokasi"
          >
            Arahkan ke Lokasi
          </motion.a>
        </motion.div>

        {/* ====== SLOT GAMBAR HERO (SEO) ======
          TODO: ganti src dengan gambar produk/etalase utama kamu,
          contoh: /images/hero-nimas-medika.jpg (ukuran besar, terkompres, alt deskriptif).
          - Desktop: tampil di kanan, tidak mengganggu layout.
          - Mobile: gambar ditampilkan di bawah (full width).
        */}
        <div className="relative mt-12">
          <div className="relative h-72 sm:h-80 md:h-[420px] rounded-3xl overflow-hidden bg-white/50 border border-slate-200">
            <Image
              src="/images/hero-placeholder.jpg" // TODO: ganti ke gambar SEO kamu
              alt="Etalase Nimas Medika: alat kesehatan lengkap dan tabung oksigen ready"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
            {/* Frame glass + neon tipis */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40" />
            <div className="pointer-events-none absolute -inset-2 rounded-[28px] blur-2xl opacity-60 bg-[conic-gradient(from_40deg,#4E71FF,#8DD8FF,#BBFBFF,#4E71FF)]" />
          </div>
        </div>
      </Container>

      {/* Dekorasi gelembung neon halus */}
      <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(187,251,255,0.5),transparent_70%)] blur-2xl" />
      <div className="absolute -bottom-16 -right-8 h-60 w-60 rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.45),transparent_70%)] blur-3xl" />
    </section>
  );
};
