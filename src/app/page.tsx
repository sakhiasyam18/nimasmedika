// src/app/page.tsx
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const TrustGallery = dynamic(() => import("@/components/TrustGallery").then(m => m.TrustGallery));
const Services = dynamic(() => import("@/components/Services").then(m => m.Services));
const AboutTeaser = dynamic(() => import("@/components/AboutTeaser").then(m => m.AboutTeaser));
const Location = dynamic(() => import("@/components/Location").then(m => m.Location));
const Footer = dynamic(() => import("@/components/Footer").then(m => m.Footer));

export default function Home() {
  return (
    <><Container>
      {/* Header selalu sticky di atas */}
      <Header />

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
