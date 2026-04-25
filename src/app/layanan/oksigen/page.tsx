// src/app/layanan/oksigen/page.tsx
// "use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OxygenHero } from "@/components/oksigen/OxygenHero";
import { OxygenPricing } from "@/components/oksigen/OxygenPricing";
import { UsageGuide } from "@/components/oksigen/UsageGuide";
import { OxygenFAQ } from "@/components/oksigen/OxygenFAQ";

export default function Oksigen() {
  return (
    <>
      <Container>
        <Header />
        <main className="relative bg-black text-gray-900">
          <OxygenHero />
          <OxygenPricing />
          <UsageGuide />
          <OxygenFAQ />
          {/* <OtherSizes /> */}
        </main>
        <Footer />
      </Container>
    </>
  );
}
