"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { HeartPulse, Info } from "lucide-react";

export const SafeUsage = () => {
  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-2xl bg-blue-50/50 p-6 sm:p-8 border border-blue-100"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mt-1">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Kebutuhan Oksigen untuk Home Care
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Tabung oksigen medis sering disiapkan di rumah untuk berbagai
                kebutuhan perawatan, seperti pendampingan pasien lansia, proses
                pemulihan pasca rawat inap, atau bantuan pernapasan sementara.
              </p>
              
              <div className="flex items-start gap-2 bg-white/60 rounded-lg p-3 border border-blue-100/50">
                <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-xs text-slate-600">
                  <strong>Penting:</strong> Penggunaan oksigen medis di rumah harus
                  selalu mengikuti anjuran, dosis, dan resep dari dokter atau tenaga
                  kesehatan profesional. Informasi ini bukan merupakan saran medis.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
