// src/components/oksigen/OxygenPricing.tsx
// ============================================================
// Section Pricing — Menampilkan 4 opsi layanan oksigen:
//   1. Sewa bulanan (+ add-on regulator/troli)
//   2. Beli paket lengkap (all-in-one)
//   3. Beli tabung saja (1m³ & 6m³)
//   4. Isi ulang cepat (±5 menit, 2000 PSI)
//
// Arsitektur komponen:
//   OxygenPricing (parent) → PricingCard (per opsi) → Lightbox (modal galeri)
//
// Fitur:
//   - Timeline layout vertikal dengan ikon + connector line
//   - Expand/collapse card detail (animasi framer-motion)
//   - Galeri gambar dengan swipe/drag support
//   - Lightbox modal full-screen dengan keyboard navigation
//   - Badge "Populer" pada opsi pertama (sewa)
//   - CTA WhatsApp langsung di setiap card
//   - Optimasi performa: React.memo, useCallback, useMemo
// ============================================================
"use client";

import { PanInfo } from "framer-motion";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronDown,
  ShoppingCart,
  Tag,
  RefreshCw,
  Box,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// ===== Utility: Conditional className =====
// Menggabungkan class names dengan filter falsy values
const cn = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(" ");

// ===== Type Definitions =====
// Tipe data untuk setiap opsi pricing (sewa/beli/isi ulang)
type PricingOption = {
  id: string; // Identifier unik untuk key & aria controls
  title: string; // Judul opsi (SEO-friendly)
  price: string; // Teks harga yang ditampilkan
  description: string; // Deskripsi singkat layanan
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Ikon Lucide
  features: string[]; // List fitur/keunggulan
  images: string[]; // Array path gambar galeri
  isPopular?: boolean; // Flag untuk badge "Populer"
};

// Props untuk komponen Lightbox (modal galeri full-screen)
type LightboxProps = {
  open: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  title: string;
};

// ===== Data Pricing (Static) =====
// Di-definisikan di luar komponen agar tidak re-create setiap render.
// Setiap item memiliki gambar-gambar galeri yang bisa di-swipe/click.
const pricingOptions: PricingOption[] = [
  {
    id: "sewa",
    title: "Sewa Tabung Oksigen Bulanan di Madiun",
    price: "Mulai dari Rp 200.000",
    description: "Bagi Anda yang mencari tempat sewa tabung oksigen terdekat di Madiun, Nimas Medika Alkes menyediakan layanan sewa bulanan. Kami melayani pengiriman langsung ke rumah Anda di wilayah Kota Madiun dan sekitarnya.",
    icon: Tag,
    isPopular: true, // Opsi yang paling sering dipilih — tampilkan badge
    features: [
      "Sewa tabung + isi: Rp 200.000/bln",
      "Add-on sewa regulator: +Rp 50.000/bln",
      "Add-on sewa troli: +Rp 50.000/bln",
      "Jaminan/refund penuh: Rp 600.000",
    ],
    images: [
      "/images/tabung oksigen.avif",
      "/images/pengisian oksigen di madiun.avif",
      "/images/tabung oksigen madiun.avif",
      "/images/oksigen di madiun.avif",
      "/images/oksigen di madiun.avif",
      "/images/proses pengiriman tabung oksigen.avif",
    ],
  },
  {
    id: "beli-paket",
    title: "Beli Paket Oksigen Lengkap Siap Pakai di Madiun",
    price: "Rp 1.000.000 & Rp 1.700.000",
    description: "Mencari toko alat kesehatan terdekat yang menjual tabung oksigen medis lengkap? Paket all-in-one dari Nimas Medika Alkes siap pakai, sudah termasuk tabung, regulator oksigen original, dan troli.",
    icon: ShoppingCart,
    features: [
      "Tabung + Regulator & Selang + Troli = Beres",
      "Produk original terdaftar KEMENKES RI",
      "Beli Terpisah Regulator: Rp 250.000",
      "Beli Terpisah Troli: Rp 125.000",
    ],
    images: [
      "/images/toko alkes madiun (9)_1_11zon.avif",
      "/images/toko alkes madiun (15)_11_11zon.avif",
      "/images/tabung oksigen di madiun.avif",
      "/images/penjualan tabung oksigen dan pengisian ulang.avif",
      "/images/oksigen madiun.avif",
      "/images/2000psi isi oksigen di madiun.avif",
    ],
  },
  {
    id: "beli-tabung",
    title: "Beli Tabung Oksigen 1m³ & 6m³ di Madiun",
    price: "Rp 500.000 & Rp 1.300.000",
    description: "Solusi bagi Anda yang ingin beli tabung oksigen baru tanpa perlengkapan tambahan. Produk terdaftar dan aman, tersedia langsung di toko kami di Jalan Kapten Tendean No. 68, Demangan, Kecamatan Taman.",
    icon: Box,
    features: [
      "Beli Oksigen Saja",
      "Terisi Penuh 2000 PSI",
      "Siap Dihubungkan ke Regulator",
      "Kondisi Baru",
    ],
    images: [
      "/images/toko alkes madiun (9)_1_11zon.avif",
      "/images/toko alkes madiun (15)_11_11zon.avif",
      "/images/tabung oksigen di madiun.avif",
      "/images/penjualan tabung oksigen dan pengisian ulang.avif",
      "/images/oksigen madiun.avif",
      "/images/2000psi isi oksigen di madiun.avif",
    ],
  },
  {
    id: "isi-ulang",
    title: "Isi Ulang Oksigen Cepat di Madiun",
    price: "Rp 45.000 & Rp 110.000",
    description:
      "Sedang mencari tempat isi ulang oksigen terdekat di Madiun? Kami menyediakan jasa isi ulang tabung oksigen cepat ±5 menit. Tekanan penuh 2000 PSI dengan 8 tabung besar, bisa ditunggu langsung di Nimas Medika.",
    icon: RefreshCw,
    features: [
      "Isi ulang ±5 menit",
      "Tekanan Full Tank 2000 PSI",
      "Untuk tabung standar 1m³",
      "Untuk Tabung Besar 6m³",
    ],
    images: [
      "/images/nimas medika jam buka.avif",
      "/images/oksigen di madiun2.avif",
      "/images/nimas medika.avif",
      "/images/terima tabung oksigen di madiun isi ulang 2000psi.avif",
      "/images/penjualan tabung oksigen dan pengisian ulang.avif",
      "/images/pengisian oksigen di madiun.avif",
    ],
  },
];

// ===== Animation Variant: Slide dari kanan =====
// Digunakan di Lightbox untuk transisi antar gambar
const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

// ============================================================
// Lightbox Component — Modal galeri gambar full-screen
// - Navigasi: tombol prev/next, keyboard arrows, swipe/drag
// - Pagination dots di bawah gambar
// - Counter gambar di pojok kiri atas
// - Click backdrop untuk tutup
// ============================================================
const Lightbox: React.FC<LightboxProps> = React.memo(
  ({ open, onClose, images, currentIndex, setCurrentIndex, title }) => {
    const totalImages = images.length;

    // ===== Navigation Handlers =====
    // Di-memoize agar tidak trigger re-render anak komponen
    const handlePrevious = useCallback(() => {
      if (totalImages > 0) {
        setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
      }
    }, [currentIndex, totalImages, setCurrentIndex]);

    const handleNext = useCallback(() => {
      if (totalImages > 0) {
        setCurrentIndex((currentIndex + 1) % totalImages);
      }
    }, [currentIndex, totalImages, setCurrentIndex]);

    // ===== Keyboard Navigation =====
    // ArrowLeft/Right untuk navigasi, Escape untuk tutup
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        switch (e.key) {
          case "ArrowLeft":
            handlePrevious();
            break;
          case "ArrowRight":
            handleNext();
            break;
          case "Escape":
            onClose();
            break;
        }
      },
      [handlePrevious, handleNext, onClose],
    );

    // ===== Swipe/Drag Navigation =====
    // Threshold 100px — jika drag melebihi threshold, navigasi ke gambar berikutnya
    const handleDragEnd = useCallback(
      (_: PointerEvent | TouchEvent | MouseEvent, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
          handlePrevious();
        } else if (info.offset.x < -threshold) {
          handleNext();
        }
      },
      [handlePrevious, handleNext],
    );

    // Jangan render jika modal tidak terbuka
    if (!open) return null;

    return (
      <AnimatePresence>
        {/* Backdrop overlay — klik untuk tutup */}
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-modal="true"
          role="dialog"
          aria-label="Galeri gambar"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Tombol tutup — pojok kanan atas */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-20 rounded-full p-2 bg-white/90 hover:bg-white text-gray-800 shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Tutup galeri"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Tombol navigasi kiri & kanan — hanya tampil jika gambar > 1 */}
          {totalImages > 1 && (
            <>
              {/* Tombol Previous */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-3 text-gray-800 shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Tombol Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-3 text-gray-800 shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* ===== Kontainer Gambar Utama ===== */}
          {/* Draggable: swipe kiri/kanan untuk navigasi di mobile */}
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={slideInFromRight.initial}
            animate={slideInFromRight.animate}
            exit={slideInFromRight.exit}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-[92vw] max-w-4xl aspect-video overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/20 shadow-2xl cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar yang sedang aktif */}
            {images[currentIndex] && (
              <Image
                src={images[currentIndex]}
                alt={`${title} - gambar ${currentIndex + 1}`}
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 1024px) 92vw, 1024px"
                priority
                quality={90}
              />
            )}

            {/* Gradient overlay kiri-kanan untuk estetika */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Pagination dots — indikator gambar aktif */}
            {totalImages > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4",
                        index === currentIndex
                          ? "bg-white scale-125"
                          : "bg-white/60 hover:bg-white/80 hover:scale-110",
                      )}
                      aria-label={`Lihat gambar ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Counter — "1 / 6" di pojok kiri atas */}
            <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
              {currentIndex + 1} / {totalImages}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  },
);

Lightbox.displayName = "Lightbox";

// ============================================================
// PricingCard Component — Card individual untuk setiap opsi
// - State: isExpanded (toggle detail), selectedImageIndex, isLightboxOpen
// - Fitur: badge "Populer", galeri swipeable, tombol WA per card
// ============================================================
const PricingCard: React.FC<{ option: PricingOption; index: number }> =
  React.memo(({ option, index }) => {
    // ===== State Management =====
    // Card pertama (index 0) otomatis expand saat load
    const [isExpanded, setIsExpanded] = useState(index === 0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // ===== Event Handlers (memoized untuk performa) =====
    const toggleExpanded = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);

    const openLightbox = useCallback(() => {
      setIsLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
      setIsLightboxOpen(false);
    }, []);

    const selectImage = useCallback((index: number) => {
      setSelectedImageIndex(index);
    }, []);

    // Navigasi galeri via drag/swipe
    const handleImageDragEnd = useCallback(
      (_: PointerEvent | TouchEvent | MouseEvent, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x > threshold && selectedImageIndex > 0) {
          setSelectedImageIndex(selectedImageIndex - 1);
        } else if (
          info.offset.x < -threshold &&
          selectedImageIndex < option.images.length - 1
        ) {
          setSelectedImageIndex(selectedImageIndex + 1);
        }
      },
      [selectedImageIndex, option.images.length],
    );

    // Memoize icon agar tidak re-create tiap render
    const IconComponent = useMemo(() => option.icon, [option.icon]);

    // Buat URL WhatsApp pre-filled sesuai opsi + footer promosi
    const waUrl = buildWhatsAppUrl(
      `Halo Nimas Medika, saya tertarik dengan layanan: ${option.title}. Bisa info lebih lanjut?`,
    );

    return (
      <>
        <div className="flex gap-4 sm:gap-8">
          {/* ===== Timeline Node (kiri) ===== */}
          {/* Ikon bulat + garis vertikal penghubung ke card berikutnya */}
          <div className="relative flex flex-col items-center">
            {/* Ikon animasi: spring bounce saat masuk viewport */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.1,
              }}
              className="z-10 grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white
                shadow-[0_4px_14px_rgba(78,113,255,0.4)] ring-4 ring-primary/20"
            >
              <IconComponent className="h-5 w-5" />
            </motion.div>

            {/* Connector line — gradient vertikal ke bawah */}
            <div className="w-px grow bg-gradient-to-b from-primary/30 via-blue-300/30 to-transparent" />
          </div>

          {/* ===== Main Card (kanan) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex-1 pb-16"
          >
            <div
              className={cn(
                "group relative bg-white/70 backdrop-blur-xl rounded-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-neon transition-all duration-300",
                // Card "Populer" dapat ring biru spesial
                option.isPopular
                  ? "border-primary/40 ring-4 ring-primary/10 bg-white/80"
                  : "border-white/60",
              )}
            >
              {/* Badge "Populer" — hanya tampil pada opsi sewa */}
              {option.isPopular && (
                <div className="absolute -top-3 right-6 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* ===== Card Header ===== */}
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {option.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {option.description}
                </p>
                {/* Harga — prominent dan berwarna primary */}
                <p className="mt-4 text-2xl sm:text-3xl font-black text-primary drop-shadow-sm">
                  {option.price}
                </p>

                {/* ===== Expandable Content ===== */}
                {/* AnimatePresence untuk animasi masuk/keluar */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`detail-${option.id}`}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-black/5 dark:border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* ===== Kolom Kiri: Features List ===== */}
                        <div>
                          <ul className="space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                            {option.features.map((feature, idx) => (
                              <li
                                key={`${option.id}-feature-${idx}`}
                                className="flex gap-2"
                              >
                                {/* Checkmark hijau untuk setiap fitur */}
                                <CheckCircle className="h-5 w-5 flex-none text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* ===== CTA WhatsApp per Card ===== */}
                          {/* Pre-filled message sesuai opsi + footer promosi Nimas Medika */}
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#20BD5A] transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Pesan via WhatsApp
                          </a>
                        </div>

                        {/* ===== Kolom Kanan: Image Gallery ===== */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Galeri
                          </h4>

                          {/* Gambar utama — klik untuk buka lightbox */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={selectedImageIndex}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              onDragEnd={handleImageDragEnd}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="relative aspect-video w-full overflow-hidden rounded-xl
                                ring-2 ring-transparent hover:ring-primary/60
                                focus-within:ring-primary/60
                                transition-all duration-200
                                cursor-grab active:cursor-grabbing"
                            >
                              <button
                                type="button"
                                onClick={openLightbox}
                                className="relative w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded-xl"
                                aria-label={`Perbesar gambar ${
                                  selectedImageIndex + 1
                                } dari ${option.title}`}
                              >
                                <Image
                                  src={option.images[selectedImageIndex]}
                                  alt={`${option.title} - gambar ${
                                    selectedImageIndex + 1
                                  }`}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                  sizes="(max-width:768px) 100vw, 50vw"
                                  priority={
                                    index === 0 && selectedImageIndex === 0
                                  }
                                />
                              </button>
                            </motion.div>
                          </AnimatePresence>

                          {/* Thumbnail grid — klik untuk select gambar */}
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {option.images.map((imageSrc, imgIndex) => (
                              <button
                                type="button"
                                key={`${option.id}-thumb-${imgIndex}`}
                                onClick={() => selectImage(imgIndex)}
                                className={cn(
                                  "relative aspect-video overflow-hidden rounded-lg ring-2 transition-all duration-200 group hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
                                  selectedImageIndex === imgIndex
                                    ? "ring-primary shadow-lg"
                                    : "ring-transparent hover:ring-primary/40",
                                )}
                                aria-label={`Pilih gambar ${imgIndex + 1}`}
                                style={{
                                  // Efek polaroid: rotasi bergantian
                                  transform:
                                    imgIndex % 2 === 0
                                      ? "rotate(-1.2deg)"
                                      : "rotate(1.2deg)",
                                }}
                              >
                                <Image
                                  src={imageSrc}
                                  alt={`Thumbnail ${imgIndex + 1}`}
                                  fill
                                  className={cn(
                                    "object-cover transition-opacity duration-200",
                                    selectedImageIndex === imgIndex
                                      ? "opacity-100"
                                      : "opacity-80 group-hover:opacity-100",
                                  )}
                                  sizes="100px"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ===== Toggle Button (Lihat Detail / Sembunyikan) ===== */}
                <button
                  onClick={toggleExpanded}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-5 text-white px-4 py-2 text-sm font-semibold ring-2 ring-primary/30 hover:translate-y-[-1px] active:translate-y-[1px] transition focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                  aria-expanded={isExpanded}
                  aria-controls={isExpanded ? `detail-${option.id}` : undefined}
                >
                  <span>
                    {isExpanded ? "Sembunyikan Detail" : "Lihat Detail Lengkap"}
                  </span>
                  {/* Chevron rotate 180° saat expanded */}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal Lightbox — render di luar card agar z-index tidak bentrok */}
        <Lightbox
          open={isLightboxOpen}
          onClose={closeLightbox}
          images={option.images}
          currentIndex={selectedImageIndex}
          setCurrentIndex={setSelectedImageIndex}
          title={option.title}
        />
      </>
    );
  });

PricingCard.displayName = "PricingCard";

// ============================================================
// OxygenPricing — Section utama yang menampung semua PricingCard
// - Section header dengan heading yang lebih pendek & impactful
// - Decorative gradient rail di sisi kanan
// - Mapping data pricing ke PricingCard components
// ============================================================
const OxygenPricing: React.FC = () => {
  return (
    <section
      id="harga"
      aria-label="Harga Tabung Oksigen Madiun"
      className="relative py-20 sm:py-28 bg-section"
    >
      {/* Dekorasi: gradient rail animasi di sisi kanan (halus, tidak mengganggu) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 gradient-rail opacity-50"
      />

      <div className="container mx-auto max-w-5xl px-4">
        {/* ===== Section Header ===== */}
        <header className="mb-10 sm:mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-heading text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            Pilih Layanan Oksigen yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF]">
              Tepat untuk Anda
            </span>
          </motion.h2>
          {/* Subtitle — menjelaskan keunggulan ringkas */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Tersedia layanan sewa, beli, dan isi ulang — semua ready stock dan
            bisa diantar ke rumah Anda di Madiun.
          </motion.p>
        </header>

        {/* ===== Pricing Cards (Timeline Layout) ===== */}
        <div className="space-y-4">
          {pricingOptions.map((option, index) => (
            <PricingCard key={option.id} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export dengan nama yang konsisten — default + named export
export default OxygenPricing;
export { OxygenPricing };
