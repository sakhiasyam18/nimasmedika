// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Layanan", href: "layanan/oksigen" },
    { label: "Tentang Kami", href: "#about" },
    // { label: "Kontak", href: "#contact" },
  ];

  // Hide/show header saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_12px_rgba(78,113,255,0.12)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <h1 className="flex items-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(78,113,255,0.5)]">
          <Link
            href="/"
            aria-label="Nimas Medika Alkes - Toko Alat Kesehatan Madiun"
          >
            <Image
              src="/images/logo-nimas-medika-alkes-madiun.svg"
              alt="Nimas Medika Alkes - Toko Alat Kesehatan Madiun"
              width={75}
              height={0}
            />
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-slate-700 hover:text-[#2C5BFF] transition-colors"
            >
              {item.label}
              {/* Underline animasi neon */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#2C5BFF] via-[#4E71FF] to-[#8DD8FF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute inset-x-0 top-16 z-40 px-4"
          >
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_0_25px_rgba(78,113,255,0.25)] p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-slate-700 hover:bg-[#2C5BFF]/10 hover:text-[#2C5BFF] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
