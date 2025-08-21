// src/components/TrustGallery.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Package, Star } from "lucide-react";

/**
 * NOTE:
 * - Ganti URL gambar di array IMAGES sesuai foto asli kamu.
 * - Untuk efek neon optimal, pastikan Tailwind aktif dengan arbitrary values (default OK).
 * - Komponen ini mandiri (tidak butuh CSS tambahan).
 */

const IMAGES = [
  // Potret/produk/etalase — campur rasio agar tampak seperti mood board
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 1",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 2",
    ratio: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 3",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 4",
    ratio: "aspect-[16/11]",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 5",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 6",
    ratio: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 7",
    ratio: "aspect-[5/7]",
  },
  {
    src: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 8",
    ratio: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    alt: "Produk 9",
    ratio: "aspect-[3/4]",
  },
];

const stats = [
  { name: "Ready Stock", value: "Sejak 2001", icon: Award },
  { name: "Order Online", value: "1000+ Produk", icon: Package },
  { name: "Antar Cepat", value: "Rating 4.8", icon: Star },
];

// Variants untuk animasi masuk
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i },
  }),
};

// Kartu gambar dengan neon glow
const GlowCard: React.FC<{
  src: string;
  alt: string;
  ratio?: string;
  i?: number;
}> = ({ src, alt, ratio = "aspect-[4/5]", i = 0 }) => {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{
        y: -6,
        rotate: -0.5,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className={`group relative ${ratio} w-full rounded-3xl`}
    >
      {/* Neon gradient glow (belakang kartu) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] 
        bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]"
      />
      <div
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[34px] blur-2xl opacity-70 
        bg-[conic-gradient(from_20deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.blue.500),theme(colors.cyan.400),theme(colors.fuchsia.500))] 
        group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Frame kartu (glassmorphism lembut) */}
      <div
        className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-white/10
        bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]"
      >
        {/* Border neon tipis */}
        <div
          className="pointer-events-none absolute inset-[1px] rounded-[22px] 
          bg-gradient-to-br from-white/10 via-white/5 to-white/0"
        />

        {/* Gambar */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={i < 4}
        />

        {/* Overlay subtil + caption mini saat hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          bg-gradient-to-t from-black/40 via-black/10 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export const TrustGallery = () => {
  return (
    <section
      className="
      relative isolate overflow-hidden
      bg-gradient-to-b from-slate-50 via-white to-slate-50
      py-24 sm:py-32"
    >
      {/* Dekorasi gradient besar (ornamen background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[44rem] w-[44rem] 
        rounded-full blur-3xl opacity-40
        bg-[radial-gradient(closest-side,theme(colors.cyan.400),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-10 h-[38rem] w-[38rem] 
        rounded-full blur-3xl opacity-40
        bg-[radial-gradient(closest-side,theme(colors.fuchsia.500),transparent_70%)]"
      />

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
            className="
            font-heading text-4xl sm:text-5xl font-extrabold tracking-tight
            bg-clip-text text-transparent
            bg-[linear-gradient(120deg,#7C3AED_0%,#2563EB_40%,#06B6D4_80%,#F472B6_100%)]
          "
          >
            Alkes lengkap. Oksigen ready. Moodboard bukti nyata.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Singkat, rapi, hidup—gambar yang berbicara.
          </p>
        </motion.div>

        {/* Social Proof mini chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2
                text-sm font-semibold text-slate-800
                bg-white/70 backdrop-blur ring-1 ring-slate-200 shadow-sm
                hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white"
              >
                <s.icon className="h-3.5 w-3.5" />
              </span>
              <span>{s.value}</span>
              <span className="text-slate-500">• {s.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Mood Board Grid */}
        <div className="mt-14 sm:mt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
              gap-4 sm:gap-6"
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

          {/* CTA ringkas (opsional) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={IMAGES.length + 1}
            className="mx-auto mt-10 flex justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5
              text-sm font-semibold text-white
              bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600
              shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]
              hover:shadow-[0_16px_40px_-12px_rgba(14,165,233,0.75)]
              transition-all active:scale-[0.98]"
            >
              Lihat selengkapnya
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
