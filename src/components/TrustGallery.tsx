// src/components/TrustGallery.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Package, Star } from "lucide-react";

// ====== Gambar Moodboard ======
// TODO: ganti src dengan gambar real produk/etalase, simpan di /public/images
const IMAGES = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Produk kesehatan unggulan",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Etalase alat kesehatan",
    ratio: "aspect-[1/1]",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Tabung oksigen ready",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Interior apotek modern",
    ratio: "aspect-[16/11]",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Perlengkapan medis lengkap",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Layanan cek kesehatan",
    ratio: "aspect-[1/1]",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Pesan antar cepat",
    ratio: "aspect-[5/7]",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Produk farmasi pilihan",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/gallery-9.jpg",
    alt: "Stok alat medis lengkap",
    ratio: "aspect-[3/4]",
  },
];

const stats = [
  { name: "Ready Stock", value: "Sejak 2001", icon: Award },
  { name: "Order Online", value: "1000+ Produk", icon: Package },
  { name: "Antar Cepat", value: "Rating 4.8", icon: Star },
];

// Animasi masuk
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i },
  }),
};

// ====== Kartu Gambar dengan Neon Glow ======
const GlowCard: React.FC<{
  src: string;
  alt: string;
  ratio?: string;
  i?: number;
}> = ({ src, alt, ratio = "aspect-[4/5]", i = 0 }) => {
  return (
    <motion.div
      custom={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -6,
        rotate: -0.5,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className={`group relative ${ratio} w-full rounded-3xl`}
    >
      {/* Neon Glow Biru */}
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[34px] blur-2xl opacity-50 
        bg-[conic-gradient(from_40deg,#4E71FF,#8DD8FF,#BBFBFF,#4E71FF)] 
        group-hover:opacity-80 transition-opacity duration-500"
      />

      {/* Frame Glass */}
      <div
        className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-slate-200
        bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(78,113,255,0.15)]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={i < 3}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          bg-gradient-to-t from-black/30 via-black/10 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export const TrustGallery = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-gray-900"
      aria-label="Galeri Produk & Bukti Pelayanan Nimas Medika"
    >
      {/* Dekorasi Radial */}
      <div aria-hidden className="absolute inset-0">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-40
          bg-[radial-gradient(closest-side,rgba(141,216,255,0.3),transparent_70%)]"
        />
        <div
          className="absolute -bottom-20 -right-16 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-40
          bg-[radial-gradient(closest-side,rgba(78,113,255,0.25),transparent_70%)]"
        />
      </div>

      <Container>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="capitalize font-heading text-4xl sm:text-5xl font-extrabold tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]"
          >
            Alkes lengkap. Oksigen ready. Satu tempat semua ada
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Satu tempat, kebutuhanmu beres!
          </p>
        </motion.div>

        {/* Social Proof Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1, // biar muncul berurutan
              }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2
        text-sm font-semibold text-slate-800
        bg-white/70 backdrop-blur ring-1 ring-slate-200 shadow-sm
        hover:shadow-[0_0_20px_rgba(78,113,255,0.25)]
        transition-all"
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF] text-white"
              >
                <s.icon className="h-3.5 w-3.5" />
              </span>
              <span>{s.value}</span>
              <span className="text-slate-500">• {s.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Grid Moodboard */}
        <div className="mt-14 sm:mt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {IMAGES.map((img, i) => (
              <GlowCard
                key={i}
                src={img.src}
                alt={img.alt}
                ratio={img.ratio}
                i={i}
              />
            ))}
          </motion.div>

          {/* CTA Ringkas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-10 flex justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3
                text-sm font-semibold text-white
                bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
                shadow-[0_0_28px_rgba(78,113,255,0.45)]
                hover:shadow-[0_0_44px_rgba(141,216,255,0.65)]
                transition-all active:scale-[0.98]"
            >
              Scroll Foto Dulu Lah
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
