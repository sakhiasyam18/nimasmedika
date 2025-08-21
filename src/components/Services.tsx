// src/components/Services.tsx
"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Droplet, FlaskConical, Truck } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Menggunakan copywriting final kita
const services = [
  {
    name: "Alat Medis & Kedokteran",
    description: "Tensi Meter | Kursi Roda | Produk Original & Berkualitas.",
    longDescription:
      "Menyediakan berbagai alat medis dan perlengkapan dokter/bidan. Mulai dari tensimeter, stetoskop, kursi roda, hingga alat-alat laboratorium. Semua produk original dan berkualitas.",
    icon: Stethoscope,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Alat+Medis", // Placeholder
  },
  {
    name: "Jual & Isi Ulang Oksigen 5 Menit",
    description: "Isi Ulang Oksigen 5 Menit! Stok Selalu Standby Buat Kamu.",
    longDescription:
      "Layanan jual dan isi ulang tabung oksigen di Madiun yang selalu siaga. Stok kami terjamin, proses aman dan cepat untuk kebutuhan pernapasan Anda.",
    icon: Droplet,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Oksigen", // Placeholder
  },
  {
    name: "Layanan Cek Kesehatan",
    description:
      "Cek Gula Darah, Asam Urat, Kolesterol. Cepat, Akurat - no Ribet.",
    longDescription:
      "Tidak perlu antre di lab. Lakukan pengecekan Gula Darah, Asam Urat, dan Kolesterol langsung di apotek kami. Hasil cepat, akurat, dan terjangkau.",
    icon: FlaskConical,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Cek+Darah", // Placeholder
  },
  {
    name: "Pesan Antar Instan",
    description:
      "Butuh Alat Kesehatan Mendadak? Tinggal Order → Langsung Diantar Via GoSend.",
    longDescription:
      "Butuh obat atau alkes mendadak? Manfaatkan layanan pesan antar instan kami. Pesanan Anda akan tiba dengan cepat dan aman di depan pintu rumah.",
    icon: Truck,
    imageSrc:
      "data:image/jpeg;base64,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", // Placeholder
  },
];

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: Teks Deskriptif */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="capitalize font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solusi Kesehatan Lengkap, Cepat & Profesional
          </h2>
          <p className="capitalize mt-6 text-lg leading-8 text-gray-600">
            Di Nimas Medika, semua layanan dirancang biar hidup sehat jadi
            gampang. Dari kebutuhan darurat sampai perawatan rutin — semua
            ready, semua terjamin kualitasnya.
          </p>

          <div className="mt-8 relative h-96 w-full hidden lg:block rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence>
              <motion.div
                key={hoveredIndex ?? -1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={services[hoveredIndex ?? 0].imageSrc}
                  alt={services[hoveredIndex ?? 0].name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="bg-gray-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Kolom Kanan: Kartu Layanan Interaktif */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
              className="group relative p-6 rounded-2xl border border-gray-200 bg-gray-50/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
