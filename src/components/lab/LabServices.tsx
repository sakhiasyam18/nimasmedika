// src/components/lab/LabServices.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Shirt, Stethoscope } from "lucide-react";
import { Container } from "@/components/Container";

const services = [
  {
    icon: FlaskConical,
    title: "Alat Laboratorium Medis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Mikropipet", "Sentrifuge", "Tabung Reaksi", "Dll"],
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Jas Dokter Madiun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Jas Panjang", "Jas Pendek", "Berbagai Ukuran", "Custom"],
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Shirt,
    title: "Jas Lab Praktikum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Bahan Tebal", "Anti Kimia", "Lengan Panjang", "Stok Lengkap"],
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
  },
];

export const LabServices = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/50" aria-label="Layanan alat lab dan jas medis Nimas Medika">
      <Container>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${service.color}
                border border-white/60 backdrop-blur-sm
                shadow-[0_4px_24px_rgba(0,0,0,0.04)]
                hover:shadow-[0_12px_40px_rgba(78,113,255,0.12)]
                hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white shadow-sm mb-5 ${service.iconColor}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/80 text-slate-600 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
