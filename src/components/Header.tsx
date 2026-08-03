// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Layanan", href: "/layanan/oksigen" },
    { label: "Tentang Kami", href: "/#about" },
  ];

  // Hide/show header saat scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        setIsOpen(false); 
      } else {
        setVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-8 md:pt-6 transition-all duration-[400ms] ease-out ${
        visible ? "translate-y-0 opacity-100 blur-0" : "-translate-y-full opacity-0 blur-sm"
      }`}
    >
      <div
        className={`relative flex items-center justify-between w-full max-w-7xl mx-auto rounded-full transition-all duration-[400ms] ease-out px-6 ${
          isScrolled 
            ? "py-[12px] bg-white/[0.58] backdrop-blur-[26px] backdrop-saturate-[180%] border border-white/30 shadow-[0_10px_35px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]" 
            : "py-[20px] bg-transparent border border-transparent"
        }`}
      >
        {/* Top Highlight (subtle lighting effect) */}
        {isScrolled && (
          <div className="absolute top-0 inset-x-0 h-[1px] rounded-t-full bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />
        )}

        {/* Logo */}
        <div className="flex items-center transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(44,91,255,0.18)]">
          <Link href="/" aria-label="Halaman Utama Nimas Medika Alkes" className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
            <Image
              src="/images/logo-nimas-medika-alkes-madiun.svg"
              alt="Nimas Medika Alkes - Toko Alat Kesehatan Madiun"
              width={80}
              height={42}
              priority
              className="object-contain"
              style={{ width: "auto", height: "auto", maxHeight: "42px" }}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-10 text-[15px] font-medium"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/#about" && pathname === "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative transition-all duration-[350ms] hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-md ${
                  isActive ? "text-[#2C5BFF]" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                {/* Underline halus */}
                <span className={`absolute left-0 -bottom-1.5 h-[3px] rounded-full bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF] shadow-[0_0_10px_rgba(78,113,255,0.2)] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://wa.me/628123436075"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full px-6 py-2.5 bg-gradient-to-b from-[#5B8CFF] to-[#2C5BFF] text-white font-medium text-sm border border-white/30 shadow-[inset_0_1px_rgba(255,255,255,0.45)] transition-all duration-[350ms] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(44,91,255,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className={`md:hidden relative z-50 inline-flex items-center justify-center rounded-full p-2.5 transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
            isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-slate-800 hover:bg-white/50"
          }`}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Floating Sheet Menu */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="md:hidden absolute inset-x-4 top-[92px] z-50"
            >
              <div
                id="mobile-menu"
                className="rounded-[2rem] bg-white/[0.85] backdrop-blur-[26px] backdrop-saturate-[180%] border border-white/40 shadow-[0_15px_40px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] p-6 space-y-4"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href === "/#about" && pathname === "/");
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-5 py-3.5 transition-all duration-[350ms] font-medium active:scale-[0.98] ${
                        isActive 
                          ? "bg-blue-50/50 text-[#2C5BFF]" 
                          : "text-slate-700 hover:bg-blue-50/30 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                
                <div className="pt-2">
                  <Link
                    href="https://wa.me/628123436075"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-full px-5 py-4 bg-gradient-to-b from-[#5B8CFF] to-[#2C5BFF] text-white font-medium border border-white/30 shadow-[inset_0_1px_rgba(255,255,255,0.45)] transition-all duration-[350ms] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(44,91,255,0.18)] active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
