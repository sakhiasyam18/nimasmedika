// src/components/OtherSizes.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { ArrowRight, Box, PackagePlus } from "lucide-react";
import Link from "next/link";

// Data untuk kartu-kartu, termasuk copywriting final kita
const otherOptions = [
  {
    title: "Tabung Oksigen 6m³ (Besar)",
    description:
      "Kapasitas besar untuk pemakaian jangka panjang, kebutuhan klinik, atau sebagai stok utama. Siap kami antar ke lokasi Anda.",
    icon: PackagePlus,
    href: "#", // Ganti dengan link yang relevan nanti
    buttonText: "Tanya Info Tabung Besar",
  },
  {
    title: "Tabung Oksigen Kecil (Portabel)",
    description:
      "Praktis, ringan, dan mudah dibawa untuk aktivitas di luar rumah atau saat Anda sedang bepergian.",
    icon: Box,
    href: "#", // Ganti dengan link yang relevan nanti
    buttonText: "Tanya Info Oksigen Kecil",
  },
];

export const OtherSizes = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Butuh Kapasitas Lain? Kami Juga Menyediakan
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Selain ukuran 1m³, kami juga memiliki solusi oksigen lain yang siap
            memenuhi berbagai kebutuhan spesifik Anda.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {otherOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link href={option.href} className="group block h-full">
                <div className="flex flex-col justify-between h-full rounded-2xl bg-slate-50 p-8 shadow-lg border border-transparent transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white">
                        <option.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-gray-900">
                        {option.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {option.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-semibold text-primary transition-transform duration-300 group-hover:translate-x-2">
                    <span>{option.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
