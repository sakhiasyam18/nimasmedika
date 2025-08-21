// src/app/page.tsx
import { Container } from "@/components/Container";
import { Header } from "@/components/Header"; // 1. Impor komponen Header
import { Hero } from "@/components/Hero"; // Impor komponen Hero
import { TrustGallery } from "@/components/TrustGallery";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Location } from "@/components/Location"; // 1. Impor komponen baru
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 2. Letakkan Header di sini, di luar tag <main> */}
      <Header />

      <main className="bg-white text-gray-900">
        <Container>
          <Hero />

          <TrustGallery />
          <Services />
          <AboutTeaser />
          <Location />
          <Footer />
        </Container>
      </main>
    </>
  );
}
