// src/app/page.tsx
import { Container } from "@/components/Container";
// import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustGallery } from "@/components/TrustGallery";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <><Container>
      {/* Header selalu sticky di atas */}
      {/* <Header /> */}

      <main className="relative bg-white text-gray-900">
        {/* Hero Section */}
        <Hero />

        {/* Moodboard / Social Proof */}
        <TrustGallery />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <AboutTeaser />

        {/* Location / Map */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />
      </Container>
    </>
  );
}
