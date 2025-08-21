"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Droplet, FlaskConical, Truck } from "lucide-react";
import Image from "next/image";

// Daftar layanan
const services = [
  {
    name: "Alat Medis & Kedokteran",
    description: "Tensi Meter | Kursi Roda | Produk Original & Berkualitas.",
    longDescription:
      "Menyediakan berbagai alat medis dan perlengkapan dokter/bidan. Mulai dari tensimeter, stetoskop, kursi roda, hingga alat-alat laboratorium. Semua produk original dan berkualitas.",
    icon: Stethoscope,
    imageSrc: "/images/service-alat-medis.jpg", // TODO: ganti gambar SEO-friendly
  },
  {
    name: "Jual & Isi Ulang Oksigen 5 Menit",
    description: "Isi Ulang Oksigen 5 Menit! Stok Selalu Standby Buat Kamu.",
    longDescription:
      "Layanan jual dan isi ulang tabung oksigen di Madiun yang selalu siaga. Stok kami terjamin, proses aman dan cepat untuk kebutuhan pernapasan Anda.",
    icon: Droplet,
    imageSrc: "/images/service-oksigen.jpg", // TODO: ganti gambar SEO-friendly
  },
  {
    name: "Layanan Cek Kesehatan",
    description:
      "Cek Gula Darah, Asam Urat, Kolesterol. Cepat, Akurat - no Ribet.",
    longDescription:
      "Tidak perlu antre di lab. Lakukan pengecekan Gula Darah, Asam Urat, dan Kolesterol langsung di apotek kami. Hasil cepat, akurat, dan terjangkau.",
    icon: FlaskConical,
    imageSrc: "/images/service-cek-kesehatan.jpg", // TODO: ganti gambar SEO-friendly
  },
  {
    name: "Pesan Antar Instan",
    description:
      "Butuh Alat Kesehatan Mendadak? Tinggal Order → Langsung Diantar Via GoSend.",
    longDescription:
      "Butuh obat atau alkes mendadak? Manfaatkan layanan pesan antar instan kami. Pesanan Anda akan tiba dengan cepat dan aman di depan pintu rumah.",
    icon: Truck,
    imageSrc: "/images/service-antar.jpg", // TODO: ganti gambar SEO-friendly
  },
];

// Animasi kartu
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
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-gray-900"
      aria-label="Layanan lengkap di Nimas Medika"
    >
      {/* Background glow */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(78,113,255,0.1)_0%,transparent_80%)]" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: teks + preview gambar besar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight">
            Solusi Kesehatan Lengkap, Cepat &amp; Profesional
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Di Nimas Medika, semua layanan dirancang biar hidup sehat jadi
            gampang. Dari kebutuhan darurat sampai perawatan rutin — semua
            ready, semua terjamin kualitasnya.
          </p>

          {/* Preview gambar besar */}
          <div className="mt-10 relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-[0_0_28px_rgba(78,113,255,0.25)]">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority={hoveredIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Kolom Kanan: daftar kartu */}
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
              className="group relative rounded-3xl p-6 sm:p-8
              bg-white/60 backdrop-blur-xl border border-slate-200
              shadow-[0_0_20px_rgba(78,113,255,0.25)]
              transition-all duration-500
              hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(141,216,255,0.5)]"
            >
              {/* Neon aura saat hover */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 
                blur-2xl transition duration-700
                bg-[conic-gradient(from_45deg,#4E71FF,#8DD8FF,#BBFBFF,#4E71FF)]"
              />

              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full 
                  bg-gradient-to-br from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF] text-white
                  shadow-lg shadow-indigo-700/40 group-hover:scale-110 transition-transform duration-300"
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
