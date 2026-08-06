// src/components/lab/LabHero.tsx
// ============================================================
// Hero Section PREMIUM — Glassmorphism + Ambient Background
// Collage shimmer grid ala editorial magazine / CROING
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ShieldCheck, Star, Truck, Clock } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// ===== Trust Badges Data =====
const trustBadges = [
  { icon: Clock, label: "Buka 06.00 – 22.00", description: "Setiap hari tanpa libur" },
  { icon: Star, label: "Produk Berkualitas", description: "Standar medis & laboratorium" },
  { icon: Truck, label: "Siap Dikirim", description: "Layanan antar area Madiun" },
  { icon: ShieldCheck, label: "Terdaftar KEMENKES", description: "Produk original & aman" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ===== Shimmer Placeholder with premium glass effect =====
const ShimmerCard = ({
  className = "",
  label,
  delay = 0,
}: {
  className?: string;
  label?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${className}`}
  >
    {/* Neumorphic base */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]" />
    {/* Shimmer sweep */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    {/* Glass overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {/* Center placeholder icon */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20 group-hover:opacity-40 transition-opacity">
      <div className="h-10 w-10 rounded-2xl bg-slate-300/80" />
      <div className="h-2 w-20 rounded-full bg-slate-300/60" />
    </div>
    {/* Label badge */}
    {label && (
      <div className="absolute bottom-4 left-4 z-10">
        <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/70 backdrop-blur-xl border border-white/40 text-slate-700 shadow-sm">
          {label}
        </span>
      </div>
    )}
  </motion.div>
);

export const LabHero = () => {
  return (
    <section
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
      aria-label="Hero layanan alat laboratorium dan jas medis Nimas Medika Madiun"
    >
      {/* ===== Ambient Background with Breathe Effect ===== */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Radial mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />
        {/* Breathing orb — blue */}
        <div
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.12),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 8s ease-in-out infinite" }}
        />
        {/* Breathing orb — cyan */}
        <div
          className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(141,216,255,0.15),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite 2s" }}
        />
        {/* Breathing orb — violet accent */}
        <div
          className="absolute top-[40%] right-[30%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.08),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 12s ease-in-out infinite 4s" }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== Left Column: Copywriting + CTA ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.4rem] leading-[1.1]">
              Jual Alat Lab &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] via-[#6B8CFF] to-[#8DD8FF]">
                Jas Dokter Madiun
              </span>
            </h1>

            <div className="mt-6 text-lg leading-8 text-gray-600 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                <strong className="text-primary">Nimas Medika Alkes</strong> menyediakan{" "}
                <strong className="text-gray-900">alat laboratorium medis</strong>,{" "}
                <strong className="text-gray-900">jas dokter Madiun</strong>, dan{" "}
                <strong className="text-gray-900">jas lab Madiun</strong> dengan harga terjangkau dan kualitas terjamin.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#katalog"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
                  font-semibold text-white
                  shadow-[0_0_28px_rgba(78,113,255,0.35),0_8px_20px_rgba(78,113,255,0.20)]
                  hover:shadow-[0_0_44px_rgba(141,216,255,0.50),0_12px_28px_rgba(78,113,255,0.30)]
                  transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Lihat Katalog
              </motion.a>

              <motion.a
                href={buildWhatsAppUrl("Halo, saya tertarik dengan alat laboratorium dan jas medis di Nimas Medika Madiun.")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  border border-white/60 bg-white/60 backdrop-blur-xl
                  font-semibold text-slate-800
                  shadow-[0_8px_30px_rgb(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]
                  hover:shadow-[0_14px_40px_-10px_rgba(78,113,255,0.3)]
                  hover:border-primary/40 hover:bg-white/80
                  transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Tanya via WhatsApp
              </motion.a>
            </div>

            {/* Trust Badges — Glassmorphic */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-2xl p-4
                    bg-white/50 backdrop-blur-xl border border-white/40
                    shadow-[0_4px_20px_rgb(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.7)]
                    hover:bg-white/70 hover:border-primary/20
                    hover:shadow-[0_8px_30px_rgba(78,113,255,0.10)]
                    transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{badge.label}</p>
                    <p className="text-xs text-gray-500">{badge.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== Right Column: Collage Shimmer Grid (CROING style) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Ambient glow behind the grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-8 rounded-[3rem] bg-gradient-to-br from-blue-100/40 via-transparent to-violet-100/30 blur-2xl"
              style={{ animation: "breathe 10s ease-in-out infinite 1s" }}
            />

            {/* Bento / Collage Grid */}
            <div className="relative grid grid-cols-4 grid-rows-4 gap-3 sm:gap-4 aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Large — top left (2x2) */}
              <ShimmerCard className="col-span-2 row-span-2" label="Alat Lab" delay={0.1} />
              {/* Small — top right */}
              <ShimmerCard className="col-span-2 row-span-1" label="Jas Dokter" delay={0.2} />
              {/* Small — mid right */}
              <ShimmerCard className="col-span-1 row-span-1" delay={0.3} />
              {/* Portrait — mid right */}
              <ShimmerCard className="col-span-1 row-span-2" label="Jas Lab" delay={0.35} />
              {/* Wide — bottom left */}
              <ShimmerCard className="col-span-2 row-span-1" delay={0.4} />
              {/* Small — bottom */}
              <ShimmerCard className="col-span-1 row-span-1" delay={0.45} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
