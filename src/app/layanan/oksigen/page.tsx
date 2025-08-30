// src/app/layanan/oksigen/page.tsx
// "use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OxygenHero } from "@/components/OxygenHero";
import { OxygenPricing } from "@/components/OxygenPricing";
import { OtherSizes } from "@/components/OtherSizes";
import { UsageGuide } from "@/components/UsageGuide";

export default function Oksigen() {
  return (
    <>
      <Container>
        <Header />
        <main className="relative bg-black text-gray-900">
          <OxygenHero />
          <OxygenPricing />
          <UsageGuide />
          {/* <OtherSizes /> */}
        </main>
        <Footer />
      </Container>
    </>
  );
}
