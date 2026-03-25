// src/app/about/page.tsx
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OriginBlock } from "@/components/tentang-kami/OriginBlock";
import { OxygenBlock } from "@/components/tentang-kami/OxygenBlock"; // <-- Import komponen baru
import { QualityBlock } from "@/components/tentang-kami/QualityBlock"; // <-- Import baru
import { ClosingBlock } from "@/components/tentang-kami/ClosingBlock"; // <-- Import Penutup

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Kita panggil Header yang sudah kamu punya di GitHub */}
      <Header />

      {/* Ini adalah Blok 1 yang kita buat tadi */}
      <OriginBlock />

      <OxygenBlock />

      {/* Blok 3: Kualitas & Kelengkapan */}
      <QualityBlock />

      {/* Bagian Penutup & Aksi */}
      <ClosingBlock />
      {/* Space untuk Blok berikutnya (Oksigen, dll) nanti di sini
      <div className="py-20 text-center text-slate-700 italic">
        [ Blok berikutnya akan kita susun di sini... ]
      </div> */}

      <Footer />
    </main>
  );
}
