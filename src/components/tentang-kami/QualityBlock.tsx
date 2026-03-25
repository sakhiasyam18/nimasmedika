// src/components/about/QualityBlock.tsx
import React from "react";
import { Container } from "@/components/Container";

export const QualityBlock = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Decor - Efek Gradasi Indigo & Violet (Kesan Premium/Teknologi) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[40%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-white bg-clip-text text-transparent mb-6">
            Standar Kelengkapan & Pengawasan Mutu
          </h2>
          <p className="font-sans text-slate-400 text-lg leading-relaxed">
            Kualitas layanan kami ditentukan oleh presisi dan kesiapan setiap
            unit. Nimas Medika mengintegrasikan kurasi produk yang mendalam
            dengan pengawasan teknis yang ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kartu 1: Kelengkapan Tanpa Kompromi */}
          <div className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:bg-white/10">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-white">
              Kurasi Produk Mendalam
            </h3>
            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Kami memastikan aksesibilitas alat kesehatan yang lengkap di
              Madiun. Mulai dari instrumen kedokteran, kebutuhan laboratorium,
              hingga perangkat terapi, setiap kategori dipilih untuk menjamin
              kepastian bagi mitra klinik dan keluarga.
            </p>
            {/* Space Visual Placeholder */}
            <div className="mt-8 pt-8 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
                [ Inventory Standardized ]
              </span>
            </div>
          </div>

          {/* Kartu 2: Quality Control & Profesionalisme */}
          <div className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:bg-white/10">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-white">
              Verifikasi Mutu Ketat
            </h3>
            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Setiap unit instrumen sensitif melalui proses verifikasi
              fungsionalitas sebelum sampai ke tangan pelanggan. Kami menjamin
              orisinalitas dan standar teknis yang presisi demi menjaga
              kepercayaan yang telah kami bangun selama dua dekade.
            </p>
            {/* Space Visual Placeholder */}
            <div className="mt-8 pt-8 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
                [ Quality Verified ]
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
