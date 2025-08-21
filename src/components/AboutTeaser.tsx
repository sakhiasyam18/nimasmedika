// src/components/AboutTeaser.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Gunakan Link dari Next.js untuk navigasi

export const AboutTeaser = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Foto Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Ganti `src` ini dengan path foto staf atau toko Anda */}

          {/* <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapotek&psig=AOvVaw1KOFPRMW5BrPjUd6AEEzLT&ust=1755837222568000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCYx8KJm48DFQAAAAAdAAAAABAE"
            alt="Tim Nimas Medika yang ramah dan profesional"
            width={800}
            height={600}
            className="rounded-2xl shadow-xl"
          /> */}
        </motion.div>

        {/* Kolom Kanan: Narasi & Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Partner Terpercaya untuk Kesehatan Keluarga Anda di Madiun
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami paham, saat menyangkut kesehatan, Anda butuh lebih dari sekadar
            toko—Anda butuh kepastian. Sejak 2001, Nimas Medika hadir untuk
            memberikan solusi lengkap dan ketenangan bagi setiap keluarga yang
            kami layani.
          </p>
          <div className="mt-10">
            <Link
              href="/tentang-kami" // Mengarah ke halaman tentang kami
              className="inline-block rounded-full bg-gradient-to-r from-primary-dark to-primary px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Kisah Kami Sejak 2001
            </Link>
          </div>
        </motion.div>
      </Container>
      <h1 className="text-blue-500 bg-red-200 border-4 border-green-400">
        Hello world!
      </h1>
    </div>
  );
};
