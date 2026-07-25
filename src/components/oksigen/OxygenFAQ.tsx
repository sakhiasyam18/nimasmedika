// src/components/oksigen/OxygenFAQ.tsx
// ============================================================
// Section FAQ Layanan Oksigen Nimas Medika
// - Accordion interaktif: klik pertanyaan untuk buka/tutup jawaban
// - Hanya 1 FAQ yang terbuka sekaligus (single-open mode)
// - Chevron icon rotate saat buka/tutup (smooth animation)
// - Nomor FAQ di setiap item untuk navigasi visual
// - JSON-LD FAQPage schema untuk SEO (rich snippet di Google)
// - Staggered entrance animation saat scroll
// ============================================================
"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// ===== Data FAQ =====
// Konten pertanyaan & jawaban — di-definisikan di luar komponen
// agar tidak re-create setiap render
const faqData = [
  // Layanan Utama & Harga
  {
    question: "Di mana tempat isi ulang oksigen terdekat atau sewa tabung oksigen 24 jam di Madiun?",
    answer: "Bagi masyarakat yang mencari toko alat kesehatan atau tempat isi ulang tabung oksigen terdekat di Madiun, Nimas Medika Alkes siap membantu. Jika Anda sedang mencari 'oksigen dekat saya', kami berlokasi strategis di Jalan Kapten Tendean No. 68, Demangan, Kecamatan Taman, Kota Madiun. Kami melayani sewa, beli, dan isi ulang oksigen medis setiap hari pukul 06.00–22.00 WIB, lengkap dengan fasilitas pengantaran ke rumah."
  },
  {
    question: "Berapa ukuran tabung oksigen yang tersedia di Nimas Medika?",
    answer: "Kami menyediakan dua ukuran standar medis: tabung oksigen 1m³ (portabel, cocok untuk mobilitas atau kondisi darurat sementara) dan tabung oksigen 6m³ (besar, untuk pemakaian jangka panjang atau stok utama di rumah/klinik)."
  },
  {
    question: "Berapa harga sewa tabung oksigen di Madiun?",
    answer: "Biaya sewa tabung oksigen (termasuk isinya) di Nimas Medika Madiun mulai dari Rp 200.000 per bulan. Anda juga bisa menyewa tambahan regulator (Rp 50.000/bulan) dan troli (Rp 50.000/bulan). Jaminan atau deposit sebesar Rp 600.000 akan dikembalikan penuh (refund) setelah masa sewa berakhir."
  },
  {
    question: "Berapa lama minimal atau maksimal durasi sewa tabung oksigen?",
    answer: "Durasi sewa standar adalah bulanan (per 30 hari). Anda bebas memperpanjang sewa di bulan berikutnya dengan hanya membayar biaya sewa bulanan, atau mengembalikannya jika sudah tidak diperlukan."
  },
  {
    question: "Berapa harga isi ulang oksigen medis di Madiun?",
    answer: "Untuk isi ulang tabung oksigen 1m³ biayanya Rp 45.000, sedangkan untuk tabung besar 6m³ biayanya Rp 110.000. Pengisian dijamin penuh hingga tekanan 2000 PSI."
  },
  
  // Proses Isi Ulang & Operasional
  {
    question: "Berapa lama proses isi ulang oksigen di Nimas Medika Madiun?",
    answer: "Sangat cepat, rata-rata hanya 5 menit! Anda bisa menunggunya langsung di tempat karena kami menggunakan sistem pengisian bertekanan tinggi dari 8 tabung besar."
  },
  {
    question: "Berapa tekanan maksimal isi ulang tabung oksigen?",
    answer: "Kami mengisi penuh (full tank) hingga 2000 PSI untuk memastikan Anda mendapatkan volume oksigen yang optimal dan tahan lama."
  },
  {
    question: "Apa jam operasional Nimas Medika Madiun?",
    answer: "Toko alat kesehatan Nimas Medika buka setiap hari mulai pukul 06.00 pagi hingga 22.00 malam."
  },
  {
    question: "Apakah Nimas Medika buka hari Minggu atau tanggal merah?",
    answer: "Ya, kami tetap buka dan beroperasi normal setiap hari, termasuk hari Minggu dan tanggal merah, untuk melayani kebutuhan medis darurat Anda."
  },
  {
    question: "Bagaimana jika butuh tabung oksigen di luar jam operasional (malam hari)?",
    answer: "Untuk kebutuhan darurat di luar jam operasional, silakan hubungi nomor WhatsApp darurat kami di +62 812-3436-075 atau +62 896-9656-8358. Kami akan berusaha merespons secepat mungkin."
  },
  
  // Pengiriman & Pembayaran
  {
    question: "Apakah Nimas Medika melayani pesan antar (delivery) tabung oksigen ke rumah?",
    answer: "Tentu. Kami menyediakan layanan pengiriman langsung ke rumah (home care) menggunakan armada khusus atau kurir seperti GoSend untuk seluruh wilayah Kota dan Kabupaten Madiun."
  },
  {
    question: "Daerah mana saja yang masuk jangkauan pengiriman Nimas Medika?",
    answer: "Kami melayani pengiriman ke seluruh Madiun dan sekitarnya, mencakup Demangan, Taman, Mejayan, Caruban, Jiwan, Wungu, Dolopo, Geger, Sawahan, Dagangan, Kare, Balerejo, hingga Pilangkenceng."
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima pembayaran secara tunai, transfer bank (BCA, Mandiri, BRI, BNI), QRIS, maupun melalui marketplace seperti Shopee untuk pembelian online."
  },
  
  // Perlengkapan Tambahan (Regulator & Troli)
  {
    question: "Apakah bisa beli atau sewa regulator oksigen terpisah?",
    answer: "Ya, kami menjual regulator oksigen original (Rp 250.000) dan menyewakannya (Rp 50.000/bulan). Regulator sangat penting untuk mengatur aliran liter per menit (LPM) oksigen ke pasien."
  },
  {
    question: "Apakah trolley (kereta dorong) tabung oksigen juga tersedia?",
    answer: "Tersedia. Anda bisa membeli troli baru (Rp 125.000) atau menyewanya (Rp 50.000/bulan) agar tabung oksigen mudah dipindahkan tanpa harus diangkat."
  },
  {
    question: "Apakah tabung oksigen Nimas Medika kompatibel dengan regulator merk lain?",
    answer: "Ya, tabung oksigen kami menggunakan drat/katup standar medis yang kompatibel dengan mayoritas regulator oksigen medis yang beredar di Indonesia."
  },
  
  // Penggunaan & Keselamatan
  {
    question: "Berapa lama tabung oksigen 1m³ bisa habis dipakai?",
    answer: "Durasi pemakaian sangat bergantung pada bukaan regulator (LPM). Pada bukaan standar 2 LPM, tabung 1m³ biasanya bertahan sekitar 6-8 jam non-stop."
  },
  {
    question: "Apakah aman menyimpan tabung oksigen di rumah?",
    answer: "Aman, asalkan disimpan dengan benar. Hindarkan tabung dari suhu panas, api terbuka, benda yang mudah terbakar, serta pastikan tabung tidak mudah jatuh (gunakan troli atau dirantai/diikat pada dinding)."
  },
  {
    question: "Bagaimana cara memasang regulator oksigen yang benar?",
    answer: "Pastikan knop utama tabung tertutup (Close). Pasang regulator ke drat tabung, kencangkan dengan kunci pas/Inggris agar tidak ada kebocoran, lalu buka keran tabung utama perlahan, dan atur flowmeter sesuai anjuran."
  },
  {
    question: "Bagaimana cara mengetahui tabung oksigen masih isi atau sudah kosong?",
    answer: "Anda bisa melihatnya pada indikator tekanan (pressure gauge) di regulator. Jika jarum menunjuk ke angka mendekati 0, artinya oksigen hampir habis dan perlu segera diisi ulang."
  },
  
  // Kebutuhan Pasien & Home Care
  {
    question: "Dalam kondisi apa tabung oksigen medis biasanya digunakan di rumah (home care)?",
    answer: "Tabung oksigen sering disiapkan untuk membantu perawatan pasien dengan gangguan pernapasan, asma berat, pemulihan pasca operasi, atau sebagai bantuan sementara menunggu tindakan medis lanjutan."
  },
  {
    question: "Apakah tabung oksigen cocok untuk pasien lansia?",
    answer: "Sangat cocok. Oksigen medis membantu menjaga saturasi oksigen pada pasien lansia yang mengalami kelelahan ekstrem atau penurunan fungsi paru. (Harap selalu konsultasikan dengan dokter untuk durasi dan dosis pemakaian yang tepat)."
  },
  {
    question: "Apakah bisa digunakan untuk pasien pemulihan stroke?",
    answer: "Beberapa pasien stroke yang mengalami kesulitan bernapas atau penurunan kadar oksigen dalam darah mungkin memerlukan terapi oksigen. Namun, dosis (LPM) harus selalu sesuai dengan instruksi dokter yang menangani."
  },
  {
    question: "Apakah penderita PPOK (COPD) membutuhkan tabung oksigen di rumah?",
    answer: "Pasien PPOK kronis seringkali memerlukan terapi oksigen jangka panjang di rumah. Kami menyediakan oksigen medis yang dibutuhkan, tetapi pengaturan laju aliran oksigen wajib diawasi oleh tenaga medis karena terlalu banyak oksigen bisa berbahaya bagi pasien PPOK."
  },
  {
    question: "Apakah Nimas Medika memberikan anjuran medis terkait pemakaian oksigen?",
    answer: "Sebagai toko alat kesehatan, Nimas Medika hanya menyediakan produk (tabung, isi ulang, regulator). Untuk dosis aliran (LPM) dan lamanya terapi oksigen, Anda diwajibkan mengikuti anjuran dan resep dari dokter atau rumah sakit."
  }
];

// ===== Accordion Item Component =====
// Komponen per-item FAQ dengan toggle expand/collapse
const AccordionItem: React.FC<{
  item: (typeof faqData)[0]; // Tipe data FAQ dari array
  index: number; // Nomor urut (0-based)
  isOpen: boolean; // Apakah item ini sedang terbuka
  onToggle: () => void; // Callback saat diklik
}> = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1, // Stagger: item berikutnya muncul 100ms lebih lambat
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
        isOpen
          ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-primary/30"
          : "bg-white/60 backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-white/60 hover:border-primary/20 hover:bg-white/80 hover:shadow-lg"
      }`}
    >
      {/* Decorative line di kiri — muncul saat hover/open */}
      <div
        className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary/60 to-primary rounded-l-2xl sm:rounded-l-3xl transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* ===== Tombol Toggle (seluruh header bisa diklik) ===== */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-8 flex items-start gap-4 sm:gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-2xl sm:rounded-3xl"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        {/* Nomor FAQ — lingkaran gradient */}
        <div
          className={`flex-shrink-0 grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full text-sm font-bold transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-br from-[#4E71FF] to-[#8DD8FF] text-white shadow-md"
              : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          {index + 1}
        </div>

        {/* Teks pertanyaan */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 leading-snug pr-8">
            {item.question}
          </h3>
        </div>

        {/* Chevron icon — rotate 180° saat terbuka */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown
            className={`h-5 w-5 transition-colors duration-300 ${
              isOpen ? "text-primary" : "text-slate-400 group-hover:text-primary"
            }`}
          />
        </motion.div>
      </button>

      {/* ===== Jawaban (Expandable) ===== */}
      {/* AnimatePresence untuk smooth height animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Padding content jawaban — border-top sebagai separator */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
              <div className="border-t border-slate-100 pt-4 ml-12 sm:ml-14">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================
// OxygenFAQ — Komponen utama section FAQ
// - Mengelola state "openIndex" (single-open accordion)
// - Render JSON-LD schema untuk Google rich snippet
// ============================================================
export const OxygenFAQ = () => {
  // ===== State: Index FAQ yang sedang terbuka =====
  // null = semua tertutup, number = index yang terbuka
  // Default: item pertama (index 0) terbuka saat load
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Toggle handler — klik item yang sudah terbuka akan menutupnya
  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // ===== JSON-LD Schema: FAQPage =====
  // Bumbu SEO: Schema.org FAQPage agar Google menampilkan
  // pertanyaan & jawaban langsung di halaman hasil pencarian
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* ===== Background Decor ===== */}
      {/* Gradient halus yang konsisten dengan section lain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/70 to-white" />
        <div className="absolute top-0 right-0 -translate-y-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[radial-gradient(closest-side,rgba(78,113,255,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[radial-gradient(closest-side,rgba(141,216,255,0.1),transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Pertanyaan yang Sering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Ditanyakan
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Informasi penting mengenai layanan oksigen Nimas Medika di wilayah
            Madiun. Klik pertanyaan untuk melihat jawaban.
          </p>
        </motion.div>

        {/* ===== FAQ Accordion List ===== */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* ===== CTA di bawah FAQ ===== */}
        {/* Link ke WhatsApp untuk pertanyaan lain yang belum terjawab */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500 mb-3">
            Punya pertanyaan lain? Kami siap membantu.
          </p>
          <a
            href={buildWhatsAppUrl("Halo, saya punya pertanyaan mengenai layanan oksigen Nimas Medika.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5
              border border-slate-200 bg-white/70 backdrop-blur-sm
              text-sm font-semibold text-slate-700
              shadow-sm hover:shadow-md hover:border-primary/30
              transition-all hover:scale-[1.02]"
          >
            Tanya via WhatsApp
          </a>
        </motion.div>
      </Container>

      {/* ===== JSON-LD Schema Script ===== */}
      {/* Script ini tidak terlihat oleh user, tapi dibaca oleh Google Bot
          untuk menampilkan FAQ langsung di Search Result (rich snippet) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};
