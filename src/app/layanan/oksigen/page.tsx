// src/app/layanan/oksigen/page.tsx
"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { OxygenPricing } from '@/components/OxygenPricing'; // 1. Impor komponen baru
import { OtherSizes } from '@/components/OtherSizes'; // 1. Impor komponen baru

// Komponen Hero Section khusus untuk halaman Oksigen
const OxygenHero = () => {
  return (
    <div className="relative bg-slate-50 pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
      {/* Latar belakang dengan efek gradasi neon halus */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 to-transparent z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks & Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Tabung Oksigen 1m³ di Madiun - Beli atau Sewa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Solusi lengkap untuk kebutuhan medis di rumah. Semua tabung diisi
              penuh 2000 PSI, siap diantar cepat ke lokasi Anda.
            </p>
            <div className="mt-10">
              <a
                href="#harga" // Nanti akan mengarah ke blok harga di bawah
                className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Lihat Opsi & Harga
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Gambar Produk dengan Efek Neon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative p-1 rounded-2xl"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #8DD8FF, #4E71FF, #5409DA)",
            }}
          >
            <div className="bg-slate-50 p-4 rounded-[14px]">
              <div className="aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  // Ganti dengan path gambar produk oksigen utama Anda
                  src="/images/service-oksigen.jpg"
                  alt="Paket Lengkap Tabung Oksigen 1m³ Nimas Medika"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};


export default function OxygenPage() {
  return (
    <>
      <Header />
      <main>
        <OxygenHero />
        <OxygenPricing /> {/* 2. Letakkan di bawah Hero */}
        {/* Di sini nanti kita bisa tambahkan blok detail teknis & ukuran lain */}
        <OtherSizes /> {/* 2. Letakkan di bawah OxygenPricing */}
      </main>
      <Footer />
    </>
  );
}