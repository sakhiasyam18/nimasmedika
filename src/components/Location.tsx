"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { MapPin, Building, ShoppingCart, Factory } from "lucide-react";
import Image from "next/image";

const landmarks = [
  { name: "Kanan Jalan Sebelah Timur RS Darmayu", icon: Building },
  { name: "Persis di samping Laraiya Supermarket", icon: ShoppingCart },
  {
    name: "Dari arah Pabrik Gula Kanigoro → toko ada di kiri jalan",
    icon: Factory,
  },
  {
    name: "Dari arah Ponorogo, setelah perempatan Te’an lanjut ke timur 400 meter.",
    icon: Factory,
  },
];

export const Location = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-gray-900"
      aria-label="Lokasi Nimas Medika di Madiun"
    >
      {/* Efek Radial Glow biru */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(78,113,255,0.1)_0%,transparent_80%)]"
      />

      <Container>
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center font-heading text-4xl sm:text-5xl font-extrabold mb-12"
        >
          Lokasi Kami
        </motion.h2> */}
        <div className="relative h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-[0_0_28px_rgba(78,113,255,0.25)]">
          {/* ====== Google Maps Embed ====== */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2116681758357!2d111.5330224!3d-7.6603772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bc2f3a7d4f99%3A0xbcc0af6ff8a96018!2sNimas%20Medika%20Alkes!5e0!3m2!1sid!2sid!4v1755791599163!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
          ></iframe>

          {/* Card info alamat + patokan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-8 sm:bottom-8
            w-[90%] sm:w-96 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-[0_0_24px_rgba(78,113,255,0.3)]
            p-6 text-gray-900 overflow-hidden"
          >
            {/* Neon aura border */}
            <div className="absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl bg-[conic-gradient(from_90deg,#4E71FF,#8DD8FF,#BBFBFF,#4E71FF)]"></div>

            {/* Alamat utama */}
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-[#4E71FF] drop-shadow-[0_0_10px_rgba(78,113,255,0.6)]" />
              <div>
                <h3 className="font-heading font-semibold text-xl">
                  Alamat Lengkap
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  Jl. Kapten Tendean No. 68, Demangan, Kec. Taman, Kota Madiun,
                  Jawa Timur 63136
                </p>
              </div>
            </div>

            {/* Landmark sekitar */}
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-4">
              <h3 className="font-heading font-semibold text-lg">
                Patokan Lokasi
              </h3>
              {landmarks.map((landmark, i) => (
                <motion.div
                  key={landmark.name}
                  whileHover={{ scale: 1.05, x: 6 }}
                  className="flex items-center gap-3 group"
                >
                  <landmark.icon className="h-5 w-5 text-[#4E71FF] drop-shadow-[0_0_6px_rgba(141,216,255,0.6)] group-hover:rotate-12 transition-transform" />
                  <p className="text-sm text-slate-600">{landmark.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
