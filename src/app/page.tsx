// src/app/page.tsx
import { Container } from "@/components/Container";
import { Header } from "@/components/Header"; // 1. Impor komponen Header
import { Hero } from "@/components/Hero"; // Impor komponen Hero
import { TrustGallery } from "@/components/TrustGallery";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Location } from "@/components/Location"; // 1. Impor komponen baru

export default function Home() {
  return (
    <>
      {/* 2. Letakkan Header di sini, di luar tag <main> */}
      <Header />

      <main>
        <Container>
          <Hero />

          <TrustGallery />
          <Services />
          <AboutTeaser />
          <Location />
        </Container>
        <h1 className="text-blue-500 text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </>
  );
}
