// src/components/AboutTeaser.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const AboutTeaser = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Kolom Kiri: Narasi & Tombol Aksi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Lorem Ipsum
              </Link>
            </div>
          </motion.div>

          {/* Kolom Kanan: Kolase Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square">
              <Image
                src="https://placehold.co/600x600/e0e7ff/313131?text=Aset+Visual+1"
                alt="Placeholder visual 1"
                width={600}
                height={600}
                className="rounded-2xl shadow-md w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="https://placehold.co/600x600/dbeafe/313131?text=Aset+Visual+2"
                alt="Placeholder visual 2"
                width={600}
                height={600}
                className="rounded-2xl shadow-md w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square col-span-2">
              <Image
                src="https://placehold.co/1200x600/bfdbfe/313131?text=Aset+Visual+3"
                alt="Placeholder visual 3"
                width={1200}
                height={600}
                className="rounded-2xl shadow-md w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
