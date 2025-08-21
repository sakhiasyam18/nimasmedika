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
    description:
      "Dari tensimeter hingga kursi roda, semua produk original dan berkualitas.",
    longDescription:
      "Menyediakan berbagai alat medis dan perlengkapan dokter/bidan. Mulai dari tensimeter, stetoskop, kursi roda, hingga alat-alat laboratorium. Semua produk original dan berkualitas.",
    icon: Stethoscope,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Alat+Medis", // Placeholder
  },
  {
    name: "Jual & Isi Ulang Oksigen",
    description:
      "Layanan isi ulang 5 menit jadi, stok selalu siaga untuk Anda.",
    longDescription:
      "Layanan jual dan isi ulang tabung oksigen di Madiun yang selalu siaga. Stok kami terjamin, proses aman dan cepat untuk kebutuhan pernapasan Anda.",
    icon: Droplet,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Oksigen", // Placeholder
  },
  {
    name: "Layanan Cek Kesehatan",
    description: "Cek Gula Darah, Asam Urat, dan Kolesterol. Cepat dan akurat.",
    longDescription:
      "Tidak perlu antre di lab. Lakukan pengecekan Gula Darah, Asam Urat, dan Kolesterol langsung di apotek kami. Hasil cepat, akurat, dan terjangkau.",
    icon: FlaskConical,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=Cek+Darah", // Placeholder
  },
  {
    name: "Pesan Antar Instan",
    description: "Butuh alkes mendadak? Kami antar via GoSend, cepat dan aman.",
    longDescription:
      "Butuh obat atau alkes mendadak? Manfaatkan layanan pesan antar instan kami. Pesanan Anda akan tiba dengan cepat dan aman di depan pintu rumah.",
    icon: Truck,
    imageSrc: "https://placehold.co/500x500/dbeafe/313131?text=GoSend", // Placeholder
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solusi Kesehatan Lengkap, Cepat, dan Profesional
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Setiap layanan di Nimas Medika dirancang untuk memberikan kemudahan
            dan kepastian. Dari kebutuhan darurat hingga perawatan rutin,
            temukan semua yang Anda butuhkan dengan kualitas terjamin.
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
