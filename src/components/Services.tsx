// src/components/Services.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { Stethoscope, Droplet, FlaskConical, Truck } from "lucide-react"; // Ikon baru
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Alat Medis & Kedokteran",
    description:
      "Menyediakan berbagai alat medis, mulai dari tensimeter, stetoskop, hingga kursi roda. Semua produk original dan berkualitas.",
    icon: Stethoscope,
  },
  {
    name: "Jual & Isi Ulang Oksigen",
    description:
      "Layanan jual dan isi ulang tabung oksigen yang selalu siaga. Stok terjamin, proses aman dan cepat untuk kebutuhan pernapasan Anda.",
    icon: Droplet,
  },
  {
    name: "Layanan Cek Kesehatan",
    description:
      "Cek Gula Darah, Asam Urat, dan Kolesterol langsung di apotek kami. Hasil cepat, akurat, dan terjangkau.",
    icon: FlaskConical,
  },
  {
    name: "Pesan Antar Instan",
    description:
      "Butuh alkes mendadak? Manfaatkan layanan pesan antar instan kami via GoSend. Cepat dan aman sampai di depan pintu rumah.",
    icon: Truck,
  },
];

export const Services = () => {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      {/* Elemen Gradasi Warna Multi-warna di Latar Belakang */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <motion.div
          animate={{
            transform: [
              "translateX(-50%) translateY(-50%) rotate(0deg)",
              "translateX(-50%) translateY(-50%) rotate(360deg)",
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] bg-gradient-to-tr from-primary via-accent-light to-secondary opacity-20"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solusi Kesehatan Lengkap dan Cepat di Madiun
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-2xl border border-white/50 bg-white/40 p-8 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading font-semibold text-gray-900">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <h1 className="text-blue-500 text-3xl font-bold underline">
          Hello world!
        </h1>
      </Container>
    </div>
  );
};
