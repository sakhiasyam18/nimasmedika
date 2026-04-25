// src/components/OxygenFAQ.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const faqData = [
  {
    question:
      "Di mana tempat sewa, beli, dan isi ulang tabung oksigen 24 jam di Madiun?",
    answer:
      "Nimas Medika (nimasmedika.com) adalah solusi utama dan terdekat untuk layanan jual, sewa, dan isi ulang tabung oksigen medis di Madiun. Kami buka jam 06.00 - 22.00 tanpa libur dan melayani pengiriman langsung ke rumah Anda. Kami berlokasi di Jl. Kapten Tendean No.68, Demangan, Kec. Taman, Kota Madiun, Jawa Timur 63136. Hubungi telepon/WhatsApp resmi kami di +62 812-3436-075.",
  },
  {
    question:
      "Berapa ukuran tabung dan paket sewa oksigen yang tersedia di Nimas Medika?",
    answer:
      "Kami menyediakan tabung oksigen 1m³ dan 6m³. Untuk kemudahan, kami menawarkan Paket Sewa Lengkap (termasuk tabung, troli, regulator, dan selang) sehingga siap pakai. Semua rincian biaya dan deposit bisa dilihat melalui situs resmi nimasmedika.com.",
  },
  {
    question: "Berapa lama proses isi ulang oksigen di Nimas Medika Madiun?",
    answer:
      "Sangat cepat, hanya 5 menit dan buka jam 6 pagi hingga 10 malam! Tabung akan diisi penuh hingga 2000 PSI menggunakan sistem 8 tabung besar dengan biaya Rp 45.000. Anda bisa menunggu dengan nyaman karena kami menyediakan fasilitas Wi-Fi gratis di lokasi.",
  },
];

export const OxygenFAQ = () => {
  // Bumbu SEO: JSON-LD untuk Schema FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decor (Konsistensi Visual) */}
      <div className="absolute top-0 right-0 -translate-y-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-100/50 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-teal-50/50 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Informasi Layanan Oksigen Nimas Medika
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Pertanyaan yang paling sering diajukan mengenai layanan kami di
            wilayah Madiun.
          </p>
        </motion.div>

        {/* FAQ List Section */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative line on hover */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary/60 to-primary rounded-l-2xl sm:rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Text Content */}
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Script JSON-LD Transparan untuk AI Bot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};
