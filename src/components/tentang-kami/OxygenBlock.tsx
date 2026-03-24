// src/components/about/OxygenBlock.tsx
import React from "react";
import { Container } from "@/components/Container"; // Container kita

export const OxygenBlock = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Decor - Efek Gradasi Deep Teal/Cyan (Fokus ke Oksigen) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-500/20 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-700/20 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sisi Kiri (cols-5): Narasi Profesional & Berkelas */}
          <div className="lg:col-span-5 space-y-8 p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-teal-400/50 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center font-bold text-lg">
                  O₂
                </div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-300 to-white bg-clip-text text-transparent">
                Pilar Dedikasi: Menjaga Pasokan Oksigen
              </h2>
            </div>

            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Dedikasi kami diuji bukan dalam kondisi normal, melainkan saat
              krisis kesehatan melanda. Nimas Medika merespons kebutuhan
              mendesak masyarakat dengan memperkuat infrastruktur layanan
              oksigen medis, bermula dari kesiagaan **15 tabung oksigen besar**
              yang kami kelola secara mandiri.
            </p>

            <p className="font-sans text-slate-300 leading-relaxed text-lg">
              Momen tersebut mengubah fundamental layanan oksigen kami. Bukan
              lagi sekadar distribusi, melainkan komitmen untuk memastikan
              setiap keluarga di Madiun mendapatkan akses oksigen yang{" "}
              <span className="text-teal-400 font-medium">
                aman, stabil, dan teruji secara teknis
              </span>
              . Keamanan teknis yang presisi menjadi standar operasional yang
              tidak bisa ditawar.
            </p>
          </div>

          {/* Sisi Kanan (cols-7): SPACE VISUAL ESTETIK (REVISI BERIKUTNYA) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-[2.5rem] bg-slate-900/40 border border-dashed border-white/20 flex items-center justify-center group overflow-hidden">
            {/* Catatan: Bagian ini sengaja dikosongkan untuk:
                1. Foto Artistik Tabung Oksigen (seperti referensi image_d6d541.jpg)
                2. Angka "15" Besar dengan efek Neon Glow
                3. Animasi Visual yang bergerak lambat
            */}
            <div className="text-center p-8">
              <p className="text-teal-500/60 text-lg font-medium italic">
                [ Space Visual: Foto Artistik Tabung Oksigen / Angka "15" Neon ]
              </p>
              <p className="text-slate-600 text-sm mt-3">
                Menunggu revisi aset atau ilustrasi tabung dengan efek glow
              </p>
            </div>

            {/* Efek Neon Glow Halus (Teal) di sudut space kosong */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-500/15 blur-[100px] rounded-full" />

            {/* Overlay Bingkai Kaca Tipis di atas space kosong */}
            <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
};
