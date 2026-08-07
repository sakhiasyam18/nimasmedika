// src/components/lab/LabServices.tsx
// ============================================================
// Services Section — Neumorphic + Glassmorphism Cards
// 3 layanan utama: Alat Lab, Jas Dokter, Jas Lab
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Shirt, Stethoscope, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";

const services = [
  {
    icon: FlaskConical,
    title: "Alat Laboratorium Medis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Mikropipet", "Sentrifuge", "Tabung Reaksi", "Gelas Ukur", "Bunsen Burner"],
    gradient: "from-blue-500/8 via-cyan-500/5 to-transparent",
    iconBg: "from-blue-500/15 to-cyan-400/10",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-300/40",
  },
  {
    icon: Stethoscope,
    title: "Jas Dokter Madiun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Lengan Panjang", "Lengan Pendek", "All Size S–XXL", "Custom Order", "Grosir"],
    gradient: "from-violet-500/8 via-purple-500/5 to-transparent",
    iconBg: "from-violet-500/15 to-purple-400/10",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-300/40",
  },
  {
    icon: Shirt,
    title: "Jas Lab Praktikum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Bahan Tebal", "Anti Kimia", "Lengan Panjang", "Stok Lengkap", "Untuk Kampus"],
    gradient: "from-emerald-500/8 via-teal-500/5 to-transparent",
    iconBg: "from-emerald-500/15 to-teal-400/10",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300/40",
  },
];

export const LabServices = () => {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Layanan alat lab dan jas medis Nimas Medika"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-slate-50/80 to-white" />
        <div
          className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.06),transparent_70%)]"
          style={{ animation: "breathe 10s ease-in-out infinite" }}
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
            Layanan Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Satu Toko, Semua Kebutuhan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Medis & Lab
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kami menyediakan alat kesehatan dan laboratorium lengkap di Madiun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8
                bg-white/50 backdrop-blur-xl
                border border-white/50 ${service.borderHover}
                shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_-4px_12px_rgba(255,255,255,0.8)]
                hover:shadow-[8px_8px_24px_rgba(0,0,0,0.08),-8px_-8px_24px_rgba(255,255,255,0.9)]
                hover:-translate-y-1.5 transition-all duration-400`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Icon */}
              <div className="relative">
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${service.iconBg} ${service.iconColor} shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1 rounded-full
                        bg-white/80 backdrop-blur-sm text-slate-600
                        border border-slate-200/50
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
