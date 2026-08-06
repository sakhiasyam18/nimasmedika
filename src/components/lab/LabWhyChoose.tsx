// src/components/lab/LabWhyChoose.tsx
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
    <section className="py-20 sm:py-28" aria-label="Mengapa memilih Nimas Medika untuk alat lab dan jas medis">
      <Container>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl
                border border-white/60 bg-white/60 backdrop-blur-sm
                shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                hover:shadow-[0_10px_35px_rgba(78,113,255,0.10)]
                hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{reason.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
