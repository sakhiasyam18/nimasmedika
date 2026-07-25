//src/components/oksigen/ServiceArea.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { MapPin } from "lucide-react";

const coverageAreas = [
  "Kota Madiun",
  "Kabupaten Madiun",
  "Demangan",
  "Taman",
  "Mejayan",
  "Caruban",
  "Jiwan",
  "Wungu",
  "Dolopo",
  "Geger",
  "Sawahan",
  "Dagangan",
  "Kare",
  "Balerejo",
  "Pilangkenceng",
];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const ServiceArea = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl bg-slate-50/50 backdrop-blur-sm p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                Area Layanan Pesan Antar
              </h3>
              <p className="text-sm text-gray-600">
                Kami melayani pelanggan di seluruh wilayah Madiun dan sekitarnya.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {coverageAreas.map((area) => (
              <motion.span
                key={area}
                variants={itemVariants}
                className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 shadow-sm"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
