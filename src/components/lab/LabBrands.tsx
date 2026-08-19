// src/components/lab/LabBrands.tsx
// ============================================================
// Brand Marquee Section — Infinite scrolling brand logos
// Light-themed glassmorphism to match the rest of the page
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

// Lab equipment brand names — rendered as stylized text logos
const brands = [
  { name: "PYREX", style: "tracking-[0.3em] font-black" },
  { name: "SCHOTT DURAN", style: "tracking-[0.1em] font-extrabold" },
  { name: "OHAUS", style: "tracking-[0.15em] font-bold" },
  { name: "METTLER TOLEDO", style: "tracking-wider font-extrabold" },
  { name: "IKA", style: "tracking-[0.2em] font-black" },
  { name: "SHIMADZU", style: "tracking-widest font-semibold" },
  { name: "BINDER", style: "tracking-[0.15em] font-bold" },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div
      className="flex shrink-0 items-center gap-4 sm:gap-6 py-3"
      style={{
        animation: `marquee ${reverse ? "35s" : "40s"} linear infinite ${reverse ? "reverse" : ""}`,
      }}
    >
      {/* Multiply the items so the marquee is long enough for seamless loop */}
      {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
        <div
          key={`${brand.name}-${i}`}
          className="flex-shrink-0 px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl
            bg-white/50 border border-white/60 backdrop-blur-md
            shadow-[0_4px_12px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.8)]
            hover:bg-white/80 hover:border-primary/20 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
            hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
        >
          <span
            className={`text-slate-400 group-hover:text-primary transition-colors duration-300
              text-xs sm:text-base select-none whitespace-nowrap ${brand.style}`}
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
      className="relative py-10 sm:py-20 overflow-hidden"
      aria-label="Brand alat laboratorium yang tersedia di Nimas Medika"
    >
      {/* ===== Light Ambient Background ===== */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4 -mx-4 sm:mx-0"
        >
          <MarqueeRow />
          <MarqueeRow reverse />
        </motion.div>
      </Container>
    </section>
  );
};
