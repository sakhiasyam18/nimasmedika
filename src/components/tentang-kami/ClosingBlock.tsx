// src/components/about/ClosingBlock.tsx
import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

export const ClosingBlock = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Decor - Cahaya Pusat (Center Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/20 blur-[160px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ringkasan Angka (Minimalis & Berkelas) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { label: "Tahun Berdiri", val: "2000" },
              { label: "Mitra Terpercaya", val: "1000+" },
              { label: "Alat Terkurasi", val: "500+" },
              { label: "Layanan Oksigen", val: "24 Jam" },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent group-hover:to-blue-400 transition-all duration-500">
                  {item.val}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* The Visionary Card (Glassmorphism Floating Island) */}
          <div className="relative p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] overflow-hidden">
            {/* Dekorasi Neon Garis di dalam kartu */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Melangkah Bersama <br />
              <span className="text-blue-400">Kesehatan Madiun.</span>
            </h2>

            <p className="font-sans text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Seperempat abad bukan sekadar angka, melainkan bukti keteguhan.
              Nimas Medika akan terus berevolusi, memastikan standar kesehatan
              terbaik dapat diakses oleh setiap pintu rumah di Madiun.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://wa.me/628123436075"
                className="px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95"
              >
                Hubungi Layanan 24 Jam
              </Link>
              <Link
                href="/"
                className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                Lihat Katalog Produk
              </Link>
            </div>
          </div>

          {/* Tagline Akhir (Subtle) */}
          <p className="mt-16 text-slate-600 text-sm tracking-[0.3em] uppercase">
            Nimas Medika — Terpercaya Sejak 2000
          </p>
        </div>
      </Container>
    </section>
  );
};
