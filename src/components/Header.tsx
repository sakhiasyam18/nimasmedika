// src/components/Header.tsx
import React from "react";
import { Container } from "./Container"; // Menggunakan Container kita
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="bg-background/80 sticky top-0 z-50 backdrop-blur-sm">
      <Container className="flex items-center justify-between h-16">
        <div className="font-heading font-bold text-lg text-primary-dark">
          Nimas Medika
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Layanan
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Kontak
          </a>
        </nav>
      </Container>
    </header>
  );
};
