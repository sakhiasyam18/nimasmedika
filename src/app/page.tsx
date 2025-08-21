// src/app/page.tsx
import { Container } from "@/components/Container";
import { Header } from "@/components/Header"; // 1. Impor komponen Header

export default function Home() {
  return (
    <>
      {/* 2. Letakkan Header di sini, di luar tag <main> */}
      <Header />

      <main>
        <Container>
          {/* Kotak biru ini masih ada sebagai placeholder untuk konten kita nanti */}
          <div className="bg-primary-light h-40 flex items-center justify-center rounded-lg mt-8">
            <p className="text-primary-dark font-heading font-bold text-xl">
              Area Konten Utama Nimas Medika
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
