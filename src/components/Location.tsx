// src/components/Location.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { MapPin, Building, ShoppingCart, Factory } from "lucide-react"; // Ikon untuk patokan

const landmarks = [
  { name: "Sebelah Timur RS Darmayu", icon: Building },
  { name: "Tepat di Samping Laraiya Supermarket", icon: ShoppingCart },
  { name: "Dari arah Pabrik Gula Kanigoro", icon: Factory },
];

export const Location = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kunjungi Kami, Lokasinya Sangat Mudah Ditemukan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Peta Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            className="aspect-video w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.551221711208!2d111.53492727476532!3d-7.62340299238318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf01b1f1f9a9%3A0x1d3a5a753e11718!2sApotek%20Nimas%20Medika%20Farrmma!5e0!3m2!1sen!2sid!4v1724220055374!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-xl"
            ></iframe>
          </motion.div>

          {/* Kolom Kanan: Alamat & Patokan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-gray-900">
                  Alamat Lengkap
                </h3>
                <p className="mt-1 text-gray-600">
                  Jl. Kapten Tendean No. 68, Demangan, Kecamatan Taman, Kota
                  Madiun, Jawa Timur 63136
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-heading font-semibold text-gray-900">
                Patokan Lokasi
              </h3>
              {landmarks.map((landmark) => (
                <div key={landmark.name} className="flex items-start gap-4">
                  <landmark.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{landmark.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
      <h1 className="text-blue-500 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};
