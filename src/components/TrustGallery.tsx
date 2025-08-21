// src/components/TrustGallery.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Package, Star } from "lucide-react"; // Ikon modern

const stats = [
  { name: "Berdiri Sejak", value: "2001", icon: Award },
  { name: "Jenis Produk", value: "1000+", icon: Package },
  { name: "Rating di Google", value: "4.8 ★", icon: Star },
];

export const TrustGallery = () => {
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
            Toko Fisik Kami, Jaminan Kepercayaan Anda
          </h2>
        </motion.div>

        {/* Social Proof Section */}
        <div className="mt-16 flex justify-center gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mt-2 font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder untuk Galeri Foto Dinamis */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 p-4 bg-gray-100 rounded-2xl border border-gray-200"
        >
          <div className="aspect-video w-full bg-gray-300 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">
              [Placeholder untuk Galeri Foto Utama]
            </p>
          </div>
        </motion.div> */}
      </Container>
      <h1 className="text-blue-500 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};
