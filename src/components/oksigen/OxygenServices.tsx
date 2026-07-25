//src/components/oksigen/OxygenServices.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Sewa Tabung Oksigen Madiun",
  "Jual Tabung Oksigen Madiun",
  "Isi Ulang Tabung Oksigen",
  "Regulator Oksigen",
  "Troli Tabung Oksigen",
  "Tabung Oksigen Medis",
  "Oksigen Home Care",
  "Toko Alat Kesehatan Madiun",
];

export const OxygenServices = () => {
  return (
    <section className="relative py-12 bg-slate-50/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-slate-700">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
