// src/components/about/OriginBlock.tsx
import React from "react";
import { Container } from "@/components/Container"; // Menggunakan Container yang kita buat kemarin

export const OriginBlock = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-950 text-white">
      {/* Background Decor - Efek Gradasi Mesh Halus */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* Judul Section - Berkelas & Profesional */}
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Dedikasi Dua Dekade Menjaga Madiun
          </h2>
        </div>

        {/* Card Glassmorphism - Blok 1 (2000-2004) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* Sisi Kiri: Narasi */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm font-medium">
              2000 — 2004
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white">
              Akar yang Kuat: Sebuah Transisi Strategis
            </h3>

            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Perjalanan ini bermula dari semangat kemandirian Anim Maulana
              bersama pasangan di tanah kelahiran mereka, Madiun. Setelah
              mengawali langkah di bidang perlengkapan transportasi pada tahun
              2000, sebuah titik balik terjadi di tahun 2004.
            </p>

            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Melihat terbatasnya akses kesehatan di wilayah ini, Nimas Medika
              hadir sebagai{" "}
              <span className="text-blue-400 font-medium">
                pionir supplier alat kesehatan pertama di Madiun
              </span>
              . Fokus kami jelas: mengisi celah kebutuhan medis yang saat itu
              masih sulit dijangkau oleh masyarakat lokal.
            </p>
          </div>

          {/* Sisi Kanan: SPACE KOSONG (REVISI BERIKUTNYA) */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl bg-slate-900/50 border border-dashed border-white/20 flex items-center justify-center group overflow-hidden">
            {/* Catatan: Bagian ini sengaja dikosongkan untuk:
                1. Ilustrasi Timeline
                2. Foto Anim Maulana / Foto Toko Lama
                3. Animasi Visual 
            */}
            <div className="text-center p-6">
              <p className="text-slate-500 text-sm font-medium italic">
                [ Space Visual: Timeline / Foto Sejarah ]
              </p>
              <p className="text-slate-600 text-xs mt-2">
                Menunggu revisi aset atau ilustrasi garis waktu
              </p>
            </div>

            {/* Efek Neon Halus di sudut space kosong */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};
