// src/components/lab/LabHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ShieldCheck, Star, Truck, Clock } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const trustBadges = [
  {
    icon: Clock,
    label: "Buka 06.00 – 22.00",
    description: "Setiap hari tanpa libur",
  },
  {
    icon: Star,
    label: "Produk Berkualitas",
    description: "Standar medis & laboratorium",
  },
  {
    icon: Truck,
    label: "Siap Dikirim",
    description: "Layanan antar area Madiun",
  },
  {
    icon: ShieldCheck,
    label: "Terdaftar KEMENKES",
    description: "Produk original & aman",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ===== Shimmer Placeholder =====
const ImageShimmer = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}
    aria-hidden="true"
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
      <div className="h-8 w-8 rounded-full bg-slate-300" />
      <div className="h-2 w-20 rounded-full bg-slate-300" />
    </div>
  </div>
);

export const LabHero = () => {
  return (
    <section
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
      aria-label="Hero layanan alat laboratorium dan jas medis Nimas Medika Madiun"
    >
      {/* Background Aura */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(78,113,255,0.10)_0%,rgba(78,113,255,0.04)_40%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(closest-side,rgba(141,216,255,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[radial-gradient(closest-side,rgba(120,80,255,0.08),transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Copywriting + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Jual Alat Lab &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
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

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#katalog"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
                  font-semibold text-white
                  shadow-[0_0_28px_rgba(78,113,255,0.40)]
                  hover:shadow-[0_0_44px_rgba(141,216,255,0.55)]
                  transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Lihat Katalog
              </motion.a>

              <motion.a
                href={buildWhatsAppUrl("Halo, saya tertarik dengan alat laboratorium dan jas medis di Nimas Medika Madiun. Bisa info lebih lanjut?")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5
                  border border-white/60 bg-white/70 backdrop-blur-md
                  font-semibold text-slate-800
                  shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                  hover:shadow-[0_14px_40px_-10px_rgba(78,113,255,0.3)]
                  hover:border-primary/40 hover:bg-white/90
                  transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Tanya via WhatsApp
              </motion.a>
            </div>

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
                  className="flex items-start gap-3 rounded-2xl border border-white/60
                    bg-white/70 backdrop-blur-md p-4
                    shadow-[0_4px_20px_rgb(0,0,0,0.03)]
                    hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(78,113,255,0.12)]
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

          {/* Kolom Kanan: Shimmer Placeholder Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
              <ImageShimmer className="col-span-2 aspect-video" />
              <ImageShimmer className="aspect-[3/4]" />
              <ImageShimmer className="aspect-[3/4]" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
