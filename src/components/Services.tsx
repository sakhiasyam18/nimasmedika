// src/components/Services.tsx
"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Alat Medis & Kedokteran",
    description:
      "Tensi Meter | Kursi Roda | Bed Pasien | Baju OKA | Jas Dokter",
    details:
      "penjualan alat medis untuk kebutuhan pribadi maupun instansi kesehatan dengan stok yang lengkap",
    imageSrc: "/images/IMG20200921181406.jpg",
  },
  {
    name: "Oksigen Medis 5 Menit",
    description: "Isi Ulang Cepat | Sewa Tabung | Tekanan 2.000 Psi Full Tank",
    details:
      "Layanan pengisian oksigen medis di Madiun. Proses 5 menit jadi, ditunggu disana dan tersedia antar untuk kondisi darurat.",
    imageSrc: "/images/toko alkes madiun (9)_1_11zon.avif",
  },
  {
    name: "Lab & Alat Kebidanan",
    description: "Cek Gula Darah | Kolesterol | Asam Urat | Perlengkapan Bidan",
    details:
      "Pusat alat laboratorium dan kebidanan terlengkap. Tersedia jasa pengecekan kesehatan ditempat.",
    imageSrc: "/images/jual alat lab madiun.avif",
  },
  {
    name: "Layanan Pesan Antar",
    description: "Order Online | Kirim via GoSend | Setiap Hari",
    details:
      "Tidak perlu keluar rumah. Pesanan alat kesehatan Anda akan kami kirim langsung ke alamat melalui gosend.",
    imageSrc: "/images/alat kesehatan madiun pesan antar.avif",
  },
];

export const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-32"
      aria-label="Layanan Utama Nimas Medika"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* KOLOM KIRI: Narasi & Preview (Sticky di Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Supplier Alat Kesehatan
                <br />
                <span className="text-blue-600">Terlengkap di Madiun</span>
              </h2>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                  Berdiri Sejak 2001
                </span>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                  Pusat Grosir Alkes
                </span>
              </div>

              {/* Preview Gambar Besar (Hanya Desktop) */}
              <div className="mt-12 relative hidden lg:block aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-blue-900/10 border border-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={services[active].imageSrc}
                      alt={`Visualisasi ${services[active].name}`}
                      fill
                      className="object-cover"
                      sizes="500px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Daftar Kartu (Interaktif) */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((item, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`
                  relative cursor-pointer rounded-[2rem] p-8 transition-all duration-500 border-2
                  ${
                    active === i
                      ? "bg-white border-blue-600 shadow-[0_20px_50px_rgba(78,113,255,0.15)] scale-[1.02]"
                      : "bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200"
                  }
                `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase ${active === i ? "text-blue-600" : "text-slate-400"}`}
                    >
                      Layanan 0{i + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold transition-colors ${active === i ? "text-slate-900" : "text-slate-500"}`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed ${active === i ? "text-slate-600" : "text-slate-400"}`}
                  >
                    {active === i ? item.details : item.description}
                  </p>

                  {/* Gambar Mobile: Muncul otomatis di dalam kartu saat kartu aktif */}
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="mt-6 relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1px"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
