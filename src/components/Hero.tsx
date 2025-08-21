// src/components/Hero.tsx
"use client"; // Diperlukan karena kita menggunakan event handler (animasi)

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion"; // Impor framer-motion untuk animasi

export const Hero = () => {
  return (
    <div className="relative bg-gray-50 text-center">
      {/* Nanti di sini kita akan letakkan video loop sebagai background */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <Container className="relative z-20 py-32 sm:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Toko Alat Kesehatan Terlengkap di Madiun
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-200">
            Menyediakan perlengkapan alat kesehatan, kedokteran, kebidanan,
            laboratorium, dan alat terapi.
          </p>
          <p className="text-lg text-gray-200 mt-2">
            Juga melayani jual, beli, serta sewa tabung oksigen di Madiun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-primary-dark to-primary px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
          >
            Hubungi via WhatsApp
          </a>
          <a
            href="#"
            className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Lihat Lokasi
          </a>
        </motion.div>
      </Container>
      <h1 className="text-blue-500 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};
