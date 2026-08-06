// src/components/lab/LabFAQ.tsx
// ============================================================
// FAQ Section — Glassmorphic Accordion + SEO keywords
// ============================================================
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const faqs = [
  {
    question: "Apakah Nimas Medika menjual alat laboratorium di Madiun?",
    answer:
      "Ya, Nimas Medika Alkes menyediakan berbagai alat laboratorium medis dan praktikum di Madiun. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Kami siap melayani kebutuhan alat lab untuk rumah sakit, klinik, maupun kampus.",
  },
  {
    question: "Jas dokter ukuran apa saja yang tersedia di Nimas Medika Madiun?",
    answer:
      "Nimas Medika menyediakan jas dokter berbagai ukuran mulai dari S hingga XXL. Lorem ipsum dolor sit amet consectetur adipiscing elit ut enim ad minim veniam quis nostrud exercitation ullamco laboris. Tersedia jas dokter lengan pendek dan panjang untuk kebutuhan medis profesional.",
  },
  {
    question: "Berapa harga jas lab di Madiun?",
    answer:
      "Harga jas lab di Nimas Medika sangat terjangkau dan kompetitif. Lorem ipsum dolor sit amet consectetur adipiscing elit duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Silakan hubungi kami via WhatsApp untuk mendapatkan informasi harga terkini.",
  },
  {
    question: "Apakah bisa memesan alat lab secara online dari luar Madiun?",
    answer:
      "Tentu saja! Nimas Medika melayani pemesanan online dan pengiriman ke seluruh wilayah. Lorem ipsum dolor sit amet consectetur adipiscing elit excepteur sint occaecat cupidatat non proident sunt in culpa. Hubungi kami via WhatsApp untuk detail pemesanan dan ongkos kirim.",
  },
  {
    question: "Apakah produk jas dokter dan alat lab di Nimas Medika original?",
    answer:
      "Semua produk yang kami jual adalah original dan berkualitas tinggi, terdaftar di KEMENKES. Lorem ipsum dolor sit amet consectetur adipiscing elit mollit anim id est laborum. Kami berkomitmen untuk menyediakan produk medis yang aman dan terpercaya untuk tenaga kesehatan.",
  },
  {
    question: "Bagaimana cara memesan jas lab atau alat lab di Nimas Medika?",
    answer:
      "Pemesanan sangat mudah! Anda bisa langsung datang ke toko kami di Jl. Kapten Tendean No. 68 Madiun, atau pesan via WhatsApp. Lorem ipsum dolor sit amet consectetur adipiscing elit nisi ut aliquip ex ea commodo consequat. Tim kami siap membantu Anda setiap hari pukul 06.00–22.00.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-2xl overflow-hidden transition-all duration-300
      bg-white/50 backdrop-blur-xl border
      shadow-[3px_3px_10px_rgba(0,0,0,0.04),-3px_-3px_10px_rgba(255,255,255,0.7)]
      ${isOpen
        ? "border-blue-200/40 shadow-[4px_4px_16px_rgba(0,0,0,0.06),-4px_-4px_16px_rgba(255,255,255,0.8)]"
        : "border-white/50 hover:border-blue-100/40"
      }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-gray-900 text-sm leading-snug">{question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-primary" : "text-gray-400"}`}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-slate-100/80 pt-4">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const LabFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" aria-label="FAQ alat laboratorium dan jas medis Madiun">
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white to-slate-50/30" />
        <div
          className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(78,113,255,0.08),transparent_70%)] blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite 1s" }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pertanyaan yang Sering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Ditanyakan
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Tidak menemukan jawaban? Langsung tanya kami via WhatsApp, kami siap bantu!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={buildWhatsAppUrl("Halo, saya ingin bertanya seputar alat lab dan jas medis di Nimas Medika Madiun.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5
              bg-white/60 backdrop-blur-xl border border-white/50
              shadow-[3px_3px_8px_rgba(0,0,0,0.04),-3px_-3px_8px_rgba(255,255,255,0.7)]
              text-sm font-semibold text-slate-700
              hover:shadow-[4px_4px_12px_rgba(0,0,0,0.06),-4px_-4px_12px_rgba(255,255,255,0.8)]
              hover:border-primary/30
              transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Tanya via WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
