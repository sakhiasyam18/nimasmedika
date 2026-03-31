// src/components/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Instagram,
  Youtube,
  MapPin,
  Clock,
  ShoppingBag,
} from "lucide-react";
import { Container } from "./Container";

const STORE_NAME = "Nimas Medika Alkes";
const ADDRESS_LINE_1 = "Jl. Kapten Tendean No. 68";
const ADDRESS_LINE_2 = "Demangan, Taman, Kota Madiun";
const OPEN_DAYS = "Buka Setiap Hari";
const OPEN_HOURS = "06.00 - 22.00 WIB";
const WHATSAPP_DISPLAY = "0896-9683-5349";
const WHATSAPP_NUMBER = "6289696835349";
const PHONE_NUMBER = "081-2343-6075";
const PHONE_NUMBER_2 = "0896-9656-8358";
const SHOPEE_LINK = "https://shopee.co.id/nimasmedika";
const INSTAGRAM_LINK = "https://instagram.com/nimasmedika";
const YOUTUBE_LINK = "https://www.youtube.com/@alatkesehatanmadiun";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-gray-900 border-t border-slate-200">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 bg-[radial-gradient(closest-side,rgba(78,113,255,0.2),transparent_70%)]" />
      </div>

      <Container className="relative z-10 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl rounded-[2.5rem] p-[1px] bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 shadow-xl"
        >
          <div className="relative rounded-[2.5rem] bg-white/90 backdrop-blur-md p-8 sm:p-10 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-blue-600 mb-2">
              {STORE_NAME}
            </h2>
            <p className="text-slate-600 font-medium mb-8 italic">
              &quot;Pusat alat kesehatan dan layanan oksigen medis terlengkap di
              Madiun.&quot;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Telepon: {PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                <Phone className="w-5 h-5 text-blue-500" />
                <span>WhatsApp Cepat</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <InfoCard
            title="Lokasi Toko"
            icon={<MapPin className="h-5 w-5 text-[#2C5BFF]" />}
            lines={[ADDRESS_LINE_1, ADDRESS_LINE_2]}
          />
          <InfoCard
            title="Jam Operasional"
            icon={<Clock className="h-5 w-5 text-[#2C5BFF]" />}
            lines={[OPEN_DAYS, OPEN_HOURS]}
          />
          <InfoCard
            title="Hubungi Kami"
            icon={<Phone className="h-5 w-5 text-[#2C5BFF]" />}
            lines={[
              <a
                key="wa"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="hover:text-blue-600 transition block"
              >
                WA: {WHATSAPP_DISPLAY}
              </a>,
              <a
                key="p1"
                href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                className="hover:text-blue-600 transition block"
              >
                Telp 1: {PHONE_NUMBER}
              </a>,
              <a
                key="p2"
                href="tel:+6289696568358"
                className="hover:text-blue-600 transition block"
              >
                WA Telp 2: {PHONE_NUMBER_2}
              </a>,
            ]}
          />
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8">
            <IconLink href={INSTAGRAM_LINK} label="Instagram">
              <Instagram className="h-6 w-6" />
            </IconLink>
            <IconLink href={YOUTUBE_LINK} label="YouTube">
              <Youtube className="h-6 w-6" />
            </IconLink>
            <IconLink href={SHOPEE_LINK} label="Shopee">
              <ShoppingBag className="h-6 w-6" />
            </IconLink>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {STORE_NAME} Madiun.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function InfoCard({
  title,
  icon,
  lines,
}: {
  title: string;
  icon: React.ReactNode;
  lines: React.ReactNode[];
}) {
  return (
    <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 text-center transition-all">
      <div className="inline-flex items-center gap-2 font-bold text-slate-700 mb-2">
        {icon} {title}
      </div>
      <div className="text-sm text-slate-600 space-y-1">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label} // Tambahkan baris ini agar Google bisa membaca nama link-nya
      className="text-slate-400 hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  );
}
