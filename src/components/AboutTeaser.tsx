"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Variants animasi tilt & floating
// const tiltVariants = {
//   hover: {
//     rotateX: 6,
//     rotateY: -6,
//     scale: 1.04,
//     transition: { type: "spring", stiffness: 200, damping: 15 },
//   },
//   tap: { rotateX: 0, rotateY: 0, scale: 1 },
// };

// const floating = {
//   initial: { y: 0 },
//   animate: {
//     y: [0, -8, 0],
//     transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
//   },
// };

// Gabungan floating + tilt
// const combinedVariants = {
//   initial: {
//     ...floating.initial,
//   },
//   animate: {
//     ...floating.animate,
//   },
//   hover: {
//     ...tiltVariants.hover,
//   },
//   tap: {
//     ...tiltVariants.tap,
//   },
// };

export const AboutTeaser = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-gray-900"
      aria-label="Tentang Nimas Medika Alkes"
    >
      {/* Background dekorasi neon lembut */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(78,113,255,0.12)_0%,transparent_70%)]"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Kolom kiri: narasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl"
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Dari Demangan, Sejak 2001
              </h2>
              <p className="capitalize text-lg leading-relaxed text-slate-700">
                Sejak 2001, Nimas Medika lahir di Demangan, Madiun. Tapi
                kebutuhan masyarakat terus tumbuh. Dari situ, Nimas ikut
                berkembang: hadirkan alat kesehatan lebih lengkap, tambah apotek
                , hingga kini jadi pusat layanan dengan alat laboratorium,
                kebidanan, kedokteran, terapi, dan oksigen medis.
              </p>
              <p className="capitalize mt-4 text-lg leading-relaxed text-slate-600">
                Buat kami, ini bukan sekadar perjalanan bisnis. Dari satu toko
                kecil di Demangan, hingga dipercaya ribuan orang, Itulah kenapa
                lebih dari 24 tahun, Nimas Medika tetap jadi sahabat kesehatan
                masyarakat Madiun.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-block"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3
              bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]
              text-white font-semibold
              shadow-[0_0_24px_rgba(78,113,255,0.45)]
              hover:shadow-[0_0_40px_rgba(141,216,255,0.6)]
              transition-all"
                  aria-label="Pelajari selengkapnya tentang Nimas Medika"
                >
                  Kisah Kita Selama 24 Tahun
                  {/* <motion.svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 4 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg> */}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Kolom kanan: foto kolase */}
          <div className="relative grid grid-cols-2 gap-4">
            {/* Foto kiri atas */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-square rounded-3xl overflow-hidden
        bg-white/60 backdrop-blur-xl shadow-[0_0_20px_rgba(78,113,255,0.25)] border border-slate-200"
            >
              <Image
                src="/images/IMG20160121065709.jpg"
                alt="Tentang Nimas Medika - Foto 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Foto kanan atas */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-square rounded-3xl overflow-hidden
        bg-white/60 backdrop-blur-xl shadow-[0_0_20px_rgba(78,113,255,0.25)] border border-slate-200"
            >
              <Image
                src="/images/IMG20171116083839.jpg"
                alt="Tentang Nimas Medika - Foto 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Foto besar bawah */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden
        bg-white/60 backdrop-blur-xl shadow-[0_0_24px_rgba(78,113,255,0.3)] border border-slate-200"
            >
              <Image
                src="/images/IMG20220411084615(1).jpg"
                alt="Tentang Nimas Medika - Foto 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
