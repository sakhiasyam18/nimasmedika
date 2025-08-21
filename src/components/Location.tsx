// src/components/Location.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { MapPin, Building, ShoppingCart, Factory } from "lucide-react";

const landmarks = [
  { name: "Sebelah Timur RS Darmayu", icon: Building },
  { name: "Tepat di Samping Laraiya Supermarket", icon: ShoppingCart },
  { name: "Dari arah Pabrik Gula Kanigoro, toko di kiri jalan", icon: Factory },
];

export const Location = () => {
  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Latar Belakang Gradasi Dinamis */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-light via-white to-secondary opacity-50" />
      </div>

      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {/* Kunjungi Kami, Lokasinya Sangat Mudah Ditemukan */}
          </motion.h2>
        </div>

        <div className="relative h-[500px] sm:h-[600px]">
          {/* Peta Google Maps di Latar Belakang */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute inset-0 h-full w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.551221711208!2d111.53492727476532!3d-7.62340299238318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf01b1f1f9a9%3A0x1d3a5a753e11718!2sApotek%20Nimas%20Medika%20Farrmma!5e0!3m2!1sen!2sid!4v1724220055374!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-2xl saturate-[1.1]"
            ></iframe>
          </motion.div>

          {/* Kartu Informasi "Mengambang" dengan Efek Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 sm:w-96 p-6 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-primary-dark flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-gray-900">
                  Alamat Lengkap
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Jl. Kapten Tendean No. 68, Demangan, Kec. Taman, Kota Madiun,
                  Jawa Timur 63136
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-black/10 pt-4">
              <h3 className="font-heading font-semibold text-gray-900">
                Patokan Lokasi
              </h3>
              {landmarks.map((landmark) => (
                <div
                  key={landmark.name}
                  className="flex items-center gap-3 group"
                >
                  <landmark.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125" />
                  <p className="text-sm text-gray-700">{landmark.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
