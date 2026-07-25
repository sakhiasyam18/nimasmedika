//src/components/oksigen/WhyChoose.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import {
  ShieldCheck,
  Zap,
  Clock,
  Package,
  Truck,
  ThumbsUp,
  HeartHandshake,
  CalendarDays,
} from "lucide-react";

const benefits = [
  {
    title: "Terdaftar KEMENKES",
    description: "Produk medis original dan aman.",
    icon: ShieldCheck,
  },
  {
    title: "Isi Penuh 2000 PSI",
    description: "Kapasitas maksimal tanpa kompromi.",
    icon: Zap,
  },
  {
    title: "Isi Ulang 5 Menit",
    description: "Proses pengisian sangat cepat.",
    icon: Clock,
  },
  {
    title: "Ready Stock",
    description: "Selalu tersedia saat dibutuhkan.",
    icon: Package,
  },
  {
    title: "Antar ke Rumah",
    description: "Layanan delivery praktis.",
    icon: Truck,
  },
  {
    title: "Peralatan Original",
    description: "Regulator dan troli standar medis.",
    icon: ThumbsUp,
  },
  {
    title: "Konsultasi Ramah",
    description: "Siap membantu kebutuhan Anda.",
    icon: HeartHandshake,
  },
  {
    title: "Buka Setiap Hari",
    description: "Pelayanan jam 06.00 - 22.00.",
    icon: CalendarDays,
  },
];

export const WhyChoose = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Nimas Medika
            </span>
            ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
