// src/components/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Store,
  ShoppingBag,
} from "lucide-react";
import { Container } from "./Container";

const STORE_NAME = "Nimas Medika Alkes";
const ADDRESS_LINE_1 = "Jl. Kapten Tendean No. 68";
const ADDRESS_LINE_2 = "Demangan, Taman, Kota Madiun";
const OPEN_DAYS = "Always Ready!";
const OPEN_HOURS = "06.00 - 22.00 WIB";
const WHATSAPP_DISPLAY = "0812-3436-075";
const WHATSAPP_NUMBER = "628123436075"; // tanpa +
const PHONE_NUMBER = "089696835349";
const SHOPEE_LINK = "https://shopee.co.id/nimasmedika";
const INSTAGRAM_LINK = "https://instagram.com/nimasmedika";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-gray-900 border-t border-slate-200">
      {/* Background aura biru */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(78,113,255,0.25),transparent_70%)]" />
        <div className="absolute -bottom-20 -right-20 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(141,216,255,0.25),transparent_70%)]" />
      </div>

      <Container className="relative z-10 pt-20 sm:pt-28 pb-16">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl rounded-3xl p-[1px] shadow-[0_0_28px_rgba(78,113,255,0.25)] bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF]"
        >
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl p-8 sm:p-12 text-center">
            <motion.h2
              className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-[#2C5BFF]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              {STORE_NAME}
            </motion.h2>

            <motion.p
              className="mt-4 text-base sm:text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              Sehat itu gampang: simple, cepat, terpercaya.
            </motion.p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(78,113,255,0.4)] transition-all bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF] hover:shadow-[0_0_40px_rgba(141,216,255,0.6)]"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Toko Masih Tutup Telepon Saja : {WHATSAPP_DISPLAY}</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-8 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100"
                aria-label="Telepon Toko"
              >
                <Phone className="h-5 w-5 text-[#2C5BFF]" />
                <span>Chat Cepat: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Info Sekunder */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <InfoCard
            title="Ketemu Kita di Sini:"
            icon={<MapPin className="h-5 w-5 text-[#2C5BFF]" />}
            lines={[ADDRESS_LINE_1, ADDRESS_LINE_2]}
          />
          <InfoCard
            title="Buka Setiap Hari"
            icon={<Clock className="h-5 w-5 text-[#2C5BFF]" />}
            lines={[OPEN_DAYS, OPEN_HOURS]}
          />
          <div className="mx-auto w-full max-w-sm">
            <h3 className="inline-flex items-center gap-2 font-semibold text-slate-700">
              <Store className="h-5 w-5 text-[#2C5BFF]" /> Stay Updated!
            </h3>
            <div className="mt-3 flex justify-center gap-4">
              <IconLink href={INSTAGRAM_LINK} label="Instagram">
                <Instagram className="h-6 w-6 text-[#2C5BFF]" />
              </IconLink>
              <IconLink href={SHOPEE_LINK} label="Shopee">
                <ShoppingBag className="h-6 w-6 text-[#2C5BFF]" />
              </IconLink>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Produk lengkap juga ada di Shopee.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Cek update seru di Instagram kami!
            </p>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {STORE_NAME} Madiun.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- Sub Components ---------- */

function InfoCard({
  title,
  icon,
  lines,
}: {
  title: string;
  icon: React.ReactNode;
  lines: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-[0_4px_16px_rgba(78,113,255,0.15)] hover:shadow-[0_6px_20px_rgba(141,216,255,0.25)] transition"
    >
      <h3 className="inline-flex items-center gap-2 font-semibold text-slate-700">
        {icon} {title}
      </h3>
      <div className="mt-2 text-sm">
        {lines.map((l, i) => (
          <p key={i} className="text-slate-600">
            {l}
          </p>
        ))}
      </div>
    </motion.div>
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
      aria-label={label}
      className="group relative inline-flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-100"
    >
      {children}
    </a>
  );
}
