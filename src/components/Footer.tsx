// src/components/Footer.tsx
"use client";

import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Store,
  ShoppingBag,
} from "lucide-react";
import { Container } from "./Container"; // asumsi sudah ada di project

/**
 * Footer modern bergaya Gen Z:
 * - Glassmorphism CTA card dengan gradient-border halus
 * - Background gradient + blob animasi + grid mask + noise overlay
 * - Hover/interaksi halus (tilt, lift, focus ring, underline animasi)
 * - A11y: aria-label, focus-visible ring, prefer-reduced-motion dihandle oleh framer-motion
 */

// Ganti sesuai kebutuhan Anda
const STORE_NAME = "Nimas Medika Alkes";
const ADDRESS_LINE_1 = "Jl. Kapten Tendean No. 68";
const ADDRESS_LINE_2 = "Demangan, Madiun";
const OPEN_DAYS = "Senin - Minggu";
const OPEN_HOURS = "06.00 - 21.00 WIB";
const WHATSAPP_DISPLAY = "0812-3436-075";
const WHATSAPP_NUMBER = "628123436075"; // tanpa +
const PHONE_NUMBER = "089696835349";
const SHOPEE_LINK = "https://shopee.co.id/nimasmedika";
const INSTAGRAM_LINK = "https://instagram.com/nimasmedika";

export function Footer() {
  // Parallax-ish cursor aura untuk CTA button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.5 });
  const radial = useMotionTemplate`radial-gradient(240px 240px at ${springX}px ${springY}px, rgba(255,255,255,0.25), transparent 70%)`;

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-tr from-primary-dark via-primary to-secondary text-white">
      {/* Background decorative layers */}
      <BackgroundDecor />

      <Container
        className="relative z-10 pt-24 sm:pt-32 pb-16"
        onMouseMove={handleMouseMove}
      >
        {/* CTA Card */}
        <motion.div
          style={{ backgroundImage: radial }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative mx-auto max-w-4xl rounded-3xl p-[1px] shadow-2xl bg-gradient-to-r from-white/60 via-white/10 to-white/60"
          aria-label="Ajakan menghubungi toko"
        >
          <div className="relative rounded-3xl bg-white/85 backdrop-blur-xl p-8 sm:p-12 text-center text-gray-900">
            {/* subtle top light */}
            <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-white/30 blur-2xl" />

            <motion.h2
              className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              Nimas Medika Alkes
            </motion.h2>

            <motion.p
              className="mt-4 text-base sm:text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              Sehat itu gampang: simple, cepat, terpercaya.
            </motion.p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button relative flex items-center justify-center gap-2 w-full sm:w-auto rounded-full px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 bg-gradient-to-r from-primary-dark to-primary hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-[.98]"
                  aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
                >
                  {/* WhatsApp icon */}
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
                    className="transition-transform duration-300 group-hover/button:-rotate-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Chat Cepat : {WHATSAPP_DISPLAY}</span>
                </a>
              </MagneticButton>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="relative flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-primary/30 bg-white/20 px-8 py-3 font-semibold text-primary-foreground/90 transition-all duration-300 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 active:scale-[.98]"
                aria-label="Telepon Toko"
              >
                <Phone className="h-5 w-5" />
                <span>Telepon: 089696835349</span>
              </a>
            </div>

            {/* subtle bottom gradient border */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </motion.div>

        {/* Info Sekunder */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white/85">
          <InfoCard
            title="Alamat"
            icon={<MapPin className="h-5 w-5" />}
            lines={[ADDRESS_LINE_1, ADDRESS_LINE_2]}
          />
          <InfoCard
            title="Open Everyday"
            icon={<Clock className="h-5 w-5" />}
            lines={[OPEN_DAYS, OPEN_HOURS]}
          />
          <div className="mx-auto w-full max-w-sm">
            <h3 className="inline-flex items-center gap-2 font-semibold text-white">
              <Store className="h-5 w-5" /> Stay Updated!
            </h3>
            <div className="mt-3 flex justify-center gap-4">
              <IconLink href={INSTAGRAM_LINK} label="Instagram">
                <Instagram className="h-6 w-6" />
              </IconLink>
              <IconLink href={SHOPEE_LINK} label="Shopee">
                <ShoppingBag className="h-6 w-6" />
              </IconLink>
            </div>
            <p className="mt-3 text-xs text-white/70">
              Produk lengkap juga ada di Shopee.
            </p>
            <p className="mt-3 text-xs text-white/70">
              Cek update seru di Instagram kami!
            </p>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {STORE_NAME}
          </p>

        </div>
      </Container>
    </footer>
  );
}

/* --------------------------- Sub Components --------------------------- */

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* grid mask */}
      <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_0%,black,transparent)] opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* animated blobs */}
      <motion.div
        className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-white/30 to-white/0 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-gradient-to-tr from-white/25 to-white/0 blur-3xl"
        animate={{ x: [0, -15, 10, 0], y: [0, 12, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* noise overlay */}
      <div
        className="absolute inset-0 opacity-[.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.3\\'/></svg>')",
        }}
      />
    </div>
  );
}

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
      className="mx-auto w-full max-w-sm rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="inline-flex items-center gap-2 font-semibold text-white">
        {icon} {title}
      </h3>
      <div className="mt-2 text-sm">
        {lines.map((l, i) => (
          <p key={i} className="text-white/80">
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
      className="group relative inline-flex items-center justify-center rounded-full p-2 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </a>
  );
}

function AnimatedUnderline({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-white/60 transition-transform duration-300 hover:scale-x-100" />
    </a>
  );
}

// Button wrapper dengan efek magnetik ringan (mengikuti cursor)
function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 200, damping: 15 });
  const ry = useSpring(y, { stiffness: 200, damping: 15 });

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.08);
    y.set(my * 0.08);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: rx, y: ry }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
