// src/components/lab/LabWhyChoose.tsx
// ============================================================
// Why Choose Section — Glassmorphic cards with ambient glow
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Package, MessageCircle, MapPin, Clock, Tag } from "lucide-react";
import { Container } from "@/components/Container";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Produk Original & Tersertifikasi",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Package,
    title: "Stok Lengkap & Siap Kirim",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut enim ad minim veniam quis nostrud.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis via WhatsApp",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit duis aute irure dolor in reprehenderit.",
  },
  {
    icon: MapPin,
    title: "Toko Fisik di Madiun",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit excepteur sint occaecat cupidatat non.",
  },
  {
    icon: Clock,
    title: "Buka Setiap Hari 06.00–22.00",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sunt in culpa qui officia deserunt.",
  },
  {
    icon: Tag,
    title: "Harga Terjangkau & Transparan",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollit anim id est laborum dolor.",
  },
];

export const LabWhyChoose = () => {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Mengapa memilih Nimas Medika untuk alat lab dan jas medis"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-slate-50/50" />
        <div
          className="absolute top-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.10),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 9s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(141,216,255,0.10),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 11s ease-in-out infinite 3s" }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Mengapa Nimas Medika?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Kepercayaan yang Sudah{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Teruji
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              {/* Ambient glow on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:to-cyan-400/5 blur-xl transition-all duration-500 pointer-events-none" />

              <div
                className="relative flex items-start gap-4 p-6 rounded-2xl
                  bg-white/50 backdrop-blur-xl border border-white/50
                  shadow-[4px_4px_12px_rgba(0,0,0,0.04),-4px_-4px_12px_rgba(255,255,255,0.7)]
                  hover:shadow-[6px_6px_20px_rgba(0,0,0,0.07),-6px_-6px_20px_rgba(255,255,255,0.9)]
                  hover:bg-white/70 hover:border-blue-200/40
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <reason.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{reason.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
