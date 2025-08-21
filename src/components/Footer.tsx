// src/components/Footer.tsx
"use client";

import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

// Ganti dengan link Shopee & Instagram Anda
const SHOPEE_LINK = "https://shopee.co.id/nimasmedika";
const INSTAGRAM_LINK = "https://instagram.com/nimasmedika";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-primary-dark via-primary to-secondary pt-24 sm:pt-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Kartu CTA "Mengambang" */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-white/90 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Siap Menjadi Solusi Kesehatan Terbaik Anda?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Hubungi kami atau kunjungi langsung toko kami di Madiun. Staf ahli
            kami siap membantu Anda menemukan produk yang tepat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/628123436075" // Ganti dengan nomor WA Anda
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gradient-to-r from-primary-dark to-primary px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>WhatsApp: 0812-3436-075</span>
            </a>
            <a
              href="tel:089696835349" // Ganti dengan nomor telepon Anda
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Telepon Toko</span>
            </a>
          </div>
        </motion.div>

        {/* Info Sekunder */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white/80">
          <div>
            <h3 className="font-semibold text-white">Kunjungi Kami</h3>
            <p className="mt-2 text-sm">
              Jl. Kapten Tendean No. 68
              <br />
              Demangan, Madiun
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Jam Buka</h3>
            <p className="mt-2 text-sm">
              Senin - Minggu
              <br />
              06.00 - 21.00 WIB
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Ikuti Kami</h3>
            <div className="mt-2 flex justify-center gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={SHOPEE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {/* Placeholder untuk ikon Shopee */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.23 4.416c.3.3.72.416 1.13.316.41-.1.75-.386.9-.786.13-.35.08-.75-.13-1.066a1.22 1.22 0 0 0-1.05-.516c-.41.034-.8.25-.98.616a1.14 1.14 0 0 0 .13 1.434zM10.5 13.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0zM12 10a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5A.75.75 0 0 0 12 10zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Nimas Medika Alkes. Didesain
            dengan Hati.
          </p>
        </div>
      </Container>
    </footer>
  );
};
