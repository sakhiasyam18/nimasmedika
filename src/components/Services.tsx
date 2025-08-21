"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Droplet, FlaskConical, Truck } from "lucide-react";
import Image from "next/image";

const services = [
  {
    name: "Alat Medis & Kedokteran",
    description: "Tensi Meter | Kursi Roda | Produk Original & Berkualitas.",
    longDescription:
      "Menyediakan berbagai alat medis dan perlengkapan dokter/bidan. Mulai dari tensimeter, stetoskop, kursi roda, hingga alat-alat laboratorium. Semua produk original dan berkualitas.",
    icon: Stethoscope,
    imageSrc: "https://placehold.co/800x800/8DD8FF/313131?text=Alat+Medis",
  },
  {
    name: "Jual & Isi Ulang Oksigen 5 Menit",
    description: "Isi Ulang Oksigen 5 Menit! Stok Selalu Standby Buat Kamu.",
    longDescription:
      "Layanan jual dan isi ulang tabung oksigen di Madiun yang selalu siaga. Stok kami terjamin, proses aman dan cepat untuk kebutuhan pernapasan Anda.",
    icon: Droplet,
    imageSrc: "https://placehold.co/800x800/BBFBFF/313131?text=Oksigen",
  },
  {
    name: "Layanan Cek Kesehatan",
    description:
      "Cek Gula Darah, Asam Urat, Kolesterol. Cepat, Akurat - no Ribet.",
    longDescription:
      "Tidak perlu antre di lab. Lakukan pengecekan Gula Darah, Asam Urat, dan Kolesterol langsung di apotek kami. Hasil cepat, akurat, dan terjangkau.",
    icon: FlaskConical,
    imageSrc: "https://placehold.co/800x800/4E71FF/ffffff?text=Cek+Darah",
  },
  {
    name: "Pesan Antar Instan",
    description:
      "Butuh Alat Kesehatan Mendadak? Tinggal Order → Langsung Diantar Via GoSend.",
    longDescription:
      "Butuh obat atau alkes mendadak? Manfaatkan layanan pesan antar instan kami. Pesanan Anda akan tiba dengan cepat dan aman di depan pintu rumah.",
    icon: Truck,
    imageSrc: "https://placehold.co/800x800/5409DA/ffffff?text=Antar+Cepat",
  },
];

// Animasi untuk kartu
const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative isolate overflow-hidden 
  bg-white py-24 sm:py-32"
    >
      {/* Efek dekorasi gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(78,113,255,0.1)_0%,transparent_80%)]"
      />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight">
            Solusi Kesehatan Lengkap, Cepat & Profesional
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Di Nimas Medika, semua layanan dirancang biar hidup sehat jadi
            gampang. Dari kebutuhan darurat sampai perawatan rutin — semua
            ready, semua terjamin kualitasnya.
          </p>

          {/* Preview gambar besar */}
          <div className="mt-10 relative h-96 w-full hidden lg:block rounded-3xl overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={hoveredIndex ?? 0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={services[hoveredIndex ?? 0].imageSrc}
                  alt={services[hoveredIndex ?? 0].name}
                  fill
                  className="object-cover rounded-3xl"
                />
                {/* Overlay gradient transparan */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Kolom Kanan: Kartu Layanan */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              custom={index}
              initial="initial"
              whileInView="animate"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="
  bg-white/20 backdrop-blur-xl border border-white/30
  shadow-[0_0_30px_rgba(78,113,255,0.4)]
  hover:shadow-[0_0_50px_rgba(141,216,255,0.6)]
  transition-all duration-500
"
            >
              {/* Efek neon glow saat hover */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 
                blur-2xl transition duration-700
                bg-[conic-gradient(from_45deg,#5409DA,#4E71FF,#8DD8FF,#BBFBFF,#5409DA)]"
              />

              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full 
                  bg-gradient-to-br from-[#5409DA] via-[#4E71FF] to-[#8DD8FF] text-white
                  shadow-lg shadow-indigo-700/40 group-hover:scale-110 transition-transform duration-300"
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
