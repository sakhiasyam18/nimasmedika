"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animasi tilt & floating
const tiltVariants = {
  hover: {
    rotateX: 6,
    rotateY: -6,
    scale: 1.04,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
  tap: { rotateX: 0, rotateY: 0, scale: 1 },
};

const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
};

export const AboutTeaser = () => {
  return (
    <section
      className="
      relative isolate overflow-hidden
      bg-white from-[#4E71FF] via-[#8DD8FF] to-[#BBFBFF]
      py-24 sm:py-32"
    >
      {/* Background dekorasi */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_75%)]"
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Kolom Kiri: Narasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl"
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Cerita Kami, Komitmen Untuk Kamu
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Di balik setiap produk dan layanan kami, ada dedikasi untuk
                kesehatan masyarakat Madiun. Kami hadir bukan hanya menjual alat
                kesehatan, tapi membangun kepercayaan dan kenyamanan.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Dari satu toko kecil menjadi pusat layanan kesehatan modern —
                perjalanan ini kami lakukan bersama kamu.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-block"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3
                    bg-gradient-to-r from-[#5409DA] via-[#4E71FF] to-[#8DD8FF]
                    text-white font-semibold shadow-lg
                    hover:shadow-[0_12px_40px_rgba(14,165,233,0.6)]
                    transition-all"
                >
                  Pelajari Selengkapnya
                  <motion.svg
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
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Foto kolase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-2 gap-4"
          >
            {/* Foto kiri atas */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={tiltVariants}
              className="relative aspect-square rounded-3xl overflow-hidden
              bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1588776814546-9d9a03b3c0ab?q=80&w=1000"
                alt="Tentang Kami 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Foto kanan atas */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={tiltVariants}
              className="relative aspect-square rounded-3xl overflow-hidden
              bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1606787364406-a3cdf06c4d19?q=80&w=1000"
                alt="Tentang Kami 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Foto besar bawah */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={tiltVariants}
              className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden
              bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1612277795396-c1c7c0162db3?q=80&w=1200"
                alt="Tentang Kami 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
