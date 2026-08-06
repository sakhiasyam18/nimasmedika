// src/components/lab/LabBrands.tsx
// ============================================================
// Brand Marquee Section — Infinite scrolling brand logos
// Dipercaya oleh brand alat lab ternama
// Dark section for contrast (ala School of Motion)
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

// Lab equipment brand names — rendered as stylized text logos
const brands = [
  { name: "PYREX", style: "tracking-[0.3em] font-black" },
  { name: "DURAN", style: "tracking-[0.2em] font-extrabold" },
  { name: "Corning", style: "font-light italic" },
  { name: "IWAKI", style: "tracking-[0.25em] font-bold" },
  { name: "SCHOTT", style: "tracking-[0.2em] font-black" },
  { name: "Merck", style: "font-extrabold" },
  { name: "OHAUS", style: "tracking-[0.15em] font-bold" },
  { name: "Hettich", style: "font-semibold italic" },
  { name: "Memmert", style: "tracking-wide font-bold" },
  { name: "Eppendorf", style: "font-light tracking-wider" },
  { name: "Sartorius", style: "font-semibold tracking-wide" },
  { name: "NALGENE", style: "tracking-[0.2em] font-black" },
  { name: "Whatman", style: "font-bold italic" },
  { name: "OLYMPUS", style: "tracking-[0.15em] font-extrabold" },
  { name: "Shimadzu", style: "font-semibold" },
  { name: "ZEISS", style: "tracking-[0.25em] font-black" },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div
      className="flex shrink-0 items-center gap-8 sm:gap-12 py-4"
      style={{
        animation: `marquee ${reverse ? "35s" : "40s"} linear infinite ${reverse ? "reverse" : ""}`,
      }}
    >
      {/* Double the items for seamless loop */}
      {[...brands, ...brands].map((brand, i) => (
        <div
          key={`${brand.name}-${i}`}
          className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl
            bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm
            hover:bg-white/[0.08] hover:border-white/[0.15]
            transition-all duration-300 group cursor-default"
        >
          <span
            className={`text-white/40 group-hover:text-white/70 transition-colors duration-300
              text-sm sm:text-base select-none whitespace-nowrap ${brand.style}`}
          >
            {brand.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const LabBrands = () => {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Brand alat laboratorium yang tersedia di Nimas Medika"
    >
      {/* ===== Dark Ambient Background ===== */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0c1222] to-slate-900" />
        {/* Ambient glow spots */}
        <div
          className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.08),transparent_70%)]"
          style={{ animation: "breathe 10s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(141,216,255,0.06),transparent_70%)]"
          style={{ animation: "breathe 12s ease-in-out infinite 3s" }}
        />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-blue-400/80 uppercase tracking-[0.3em] mb-4">
            Brand Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Dipercaya oleh Brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Ternama Dunia
            </span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, kami menyediakan produk dari merek-merek laboratorium terkemuka yang sudah teruji kualitasnya di seluruh dunia.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <MarqueeRow />
          <MarqueeRow reverse />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "16+", label: "Brand Internasional" },
            { value: "200+", label: "Produk Tersedia" },
            { value: "100%", label: "Produk Original" },
            { value: "24/7", label: "Konsultasi WhatsApp" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
            >
              <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {stat.value}
              </p>
              <p className="text-xs text-white/35 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
