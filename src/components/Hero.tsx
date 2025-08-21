"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      className="relative isolate overflow-hidden 
  bg-white text-gray-900"
    >
      {/* Dekorasi Gradient Glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(78,113,255,0.15)_0%,transparent_70%)]"
      />

      {/* Animasi Background Gradient bergerak */}
      <motion.div
        className="absolute inset-0 bg-[conic-gradient(from_0deg,#5409DA,#4E71FF,#8DD8FF,#BBFBFF,#5409DA)] opacity-40 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <Container className="relative z-10 py-32 sm:py-40 text-center">
        {/* Heading SEO-friendly */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight
          bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E0EFFF] to-[#B0D8FF]"
        >
          Nimas Medika Alkes – Apotek & Alat Kesehatan di Madiun
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl text-white/90">
            Perlengkapan Kedokteran Kesehatan Kebidanan Laboratorium Alat Terapi
          </p>
          <p className="mt-2 text-lg text-white/80">
            Jual, beli, & sewa tabung oksigen
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full px-8 py-4
            bg-gradient-to-r from-[#5409DA] via-[#4E71FF] to-[#8DD8FF]
            font-semibold text-white shadow-[0_8px_30px_rgba(78,113,255,0.6)]
            transition-all"
          >
            Chat Sekarang
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full px-8 py-4
            border border-white/40 bg-white/10 backdrop-blur-lg
            font-semibold text-white transition-all"
          >
            Arahkan ke Lokasi
          </motion.a>
        </motion.div>
      </Container>

      {/* Elemen Dekorasi Interaktif */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-[#BBFBFF] to-[#8DD8FF] rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-[#5409DA] to-[#4E71FF] rounded-full blur-3xl opacity-20 animate-pulse" />
    </section>
  );
};
