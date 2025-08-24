// src/components/OxygenPricing.tsx
"use client";

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
} from "lucide-react";

// ===== Utility Function (untuk className conditional) =====
const cn = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(" ");

// ===== Types =====
type PricingOption = {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  images: string[];
};

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  title: string;
};

// ===== Data Static (untuk mengurangi re-render) =====
const pricingOptions: PricingOption[] = [
  {
    id: "sewa",
    title: "Sewa Tabung Oksigen Bulanan di Madiun",
    price: "Mulai dari Rp 200.000",
    description:
      "Layanan sewa tabung oksigen di Madiun untuk perawatan di rumah—fleksibel, ekonomis, dan bisa diantar.",
    icon: Tag,
    features: [
      "Sewa tabung + isi: Rp 200.000/bln",
      "Add-on sewa regulator: +Rp 50.000/bln",
      "Add-on sewa troli: +Rp 50.000/bln",
      "Jaminan/refund penuh: Rp 600.000",
    ],
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-13.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
    ],
  },
  {
    id: "beli-paket",
    title: "Beli Paket Oksigen Lengkap Siap Pakai",
    price: "Rp 1.000.000",
    description:
      "Paket lengkap: tabung 1m³ + regulator + troli + selang. Siap pakai, bergaransi, terdaftar Kemenkes.",
    icon: ShoppingCart,
    features: [
      "Set lengkap (tabung + isi + regulator + troli + selang)",
      "Produk original terdaftar KEMENKES RI",
      "Siap pakai tanpa setting rumit",
      "Investasi kesehatan jangka panjang",
    ],
    images: [
      "/images/gallery-6.jpg",
      "/images/gallery-14.jpg",
      "/images/gallery-7.jpg",
      "/images/gallery-8.jpg",
      "/images/gallery-9.jpg",
      "/images/gallery-15.jpg",
    ],
  },
  {
    id: "beli-tabung",
    title: "Beli Tabung Oksigen 1m³ Baru",
    price: "Rp 400.000",
    description:
      "Tabung oksigen 1m³ baru standar medis—pas bila kamu sudah punya regulator & aksesoris lain.",
    icon: Box,
    features: [
      "Kondisi baru, standar medis",
      "Terisi penuh 2000 PSI",
      "Siap hubungkan ke regulator",
      "Kualitas terjamin & aman",
    ],
    images: [
      "/images/gallery-7.jpg",
      "/images/gallery-8.jpg",
      "/images/gallery-9.jpg",
      "/images/gallery-15.jpg",
      "/images/gallery-10.jpg",
      "/images/gallery-11.jpg",
    ],
  },
  {
    id: "isi-ulang",
    title: "Isi Ulang Oksigen Cepat di Madiun",
    price: "Rp 45.000",
    description:
      "Jasa isi ulang ±5 menit, tekanan penuh 2000 PSI. Bisa ditunggu, cepat & profesional.",
    icon: RefreshCw,
    features: [
      "Isi ulang ±5 menit",
      "Tekanan penuh 2000 PSI",
      "Untuk tabung standar 1m³",
      "Tim berpengalaman & sigap",
    ],
    images: [
      "/images/gallery-10.jpg",
      "/images/gallery-11.jpg",
      "/images/gallery-12.jpg",
      "/images/gallery-16.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-6.jpg",
    ],
  },
];

// ===== Animation Variants (untuk performance) =====
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

// ===== Lightbox Component (diperbaiki navigasi) =====
const Lightbox: React.FC<LightboxProps> = React.memo(
  ({ open, onClose, images, currentIndex, setCurrentIndex, title }) => {
    const totalImages = images.length;

    // Memoize navigation functions untuk mengurangi re-render
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

    // Handle keyboard navigation
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
      [handlePrevious, handleNext, onClose]
    );

    // Handle drag end untuk swipe navigation
    const handleDragEnd = useCallback(
      (_: any, info: any) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
          handlePrevious();
        } else if (info.offset.x < -threshold) {
          handleNext();
        }
      },
      [handlePrevious, handleNext]
    );

    if (!open) return null;

    return (
      <AnimatePresence>
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
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-20 rounded-full p-2 bg-white/90 hover:bg-white text-gray-800 shadow-lg hover:scale-105 transition-all duration-200"
            aria-label="Tutup galeri"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-3 text-gray-800 shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-3 text-gray-800 shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Main Image Container */}
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

            {/* Gradient overlay untuk aesthetic */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Pagination Dots */}
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
                        "h-2 w-2 rounded-full transition-all duration-200",
                        index === currentIndex
                          ? "bg-white scale-125"
                          : "bg-white/60 hover:bg-white/80 hover:scale-110"
                      )}
                      aria-label={`Lihat gambar ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
              {currentIndex + 1} / {totalImages}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

Lightbox.displayName = "Lightbox";

// ===== Pricing Card Component =====
const PricingCard: React.FC<{ option: PricingOption; index: number }> =
  React.memo(({ option, index }) => {
    // State management
    const [isExpanded, setIsExpanded] = useState(index === 0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Memoized handlers untuk mengurangi re-render
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

    // Handle image navigation dengan drag
    const handleImageDragEnd = useCallback(
      (_: any, info: any) => {
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
      [selectedImageIndex, option.images.length]
    );

    // Memoized icon component
    const IconComponent = useMemo(() => option.icon, [option.icon]);

    return (
      <>
        <div className="flex gap-4 sm:gap-8">
          {/* Timeline Node */}
          <div className="relative flex flex-col items-center">
            <motion.div
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.1,
              }}
              className="z-10 grid place-items-center h-10 w-10 rounded-full bg-primary text-white shadow-[0_0_0_6px_rgba(78,113,255,0.15)] ring-4 ring-primary/20"
            >
              <IconComponent className="h-5 w-5" />
            </motion.div>

            {/* Timeline connector line */}
            <div className="w-px grow bg-gradient-to-b from-primary/30 via-blue-300/30 to-transparent" />
          </div>

          {/* Main Card */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex-1 pb-16"
          >
            <div className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 shadow-xl hover:shadow-neon transition-shadow duration-300">
              <div className="p-6">
                {/* Card Header */}
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {option.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {option.description}
                </p>
                <p className="mt-4 text-2xl sm:text-3xl font-black text-primary drop-shadow-sm">
                  {option.price}
                </p>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-black/5 dark:border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Features List */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Fitur & Keunggulan
                          </h4>
                          <ul className="space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                            {option.features.map((feature, idx) => (
                              <li
                                key={`${option.id}-feature-${idx}`}
                                className="flex gap-2"
                              >
                                <CheckCircle className="h-5 w-5 flex-none text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* SEO Keywords */}
                          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            Kata kunci: layanan oksigen Madiun, tabung oksigen,
                            isi ulang oksigen, sewa tabung oksigen, paket
                            oksigen lengkap.
                          </p>
                        </div>

                        {/* Image Gallery */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Galeri
                          </h4>

                          {/* Main Image Display */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={selectedImageIndex}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              onDragEnd={handleImageDragEnd}
                              variants={slideInFromRight}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="relative aspect-video w-full overflow-hidden rounded-xl ring-2 ring-transparent hover:ring-primary/60 focus-within:ring-primary/60 transition-all duration-200 cursor-grab active:cursor-grabbing"
                            >
                              <button
                                type="button"
                                onClick={openLightbox}
                                className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 rounded-xl"
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

                          {/* Thumbnail Grid */}
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {option.images.map((imageSrc, imgIndex) => (
                              <button
                                type="button"
                                key={`${option.id}-thumb-${imgIndex}`}
                                onClick={() => selectImage(imgIndex)}
                                className={cn(
                                  "relative aspect-video overflow-hidden rounded-lg ring-2 transition-all duration-200 group hover:scale-105",
                                  selectedImageIndex === imgIndex
                                    ? "ring-primary shadow-lg"
                                    : "ring-transparent hover:ring-primary/40"
                                )}
                                aria-label={`Pilih gambar ${imgIndex + 1}`}
                                style={{
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
                                      : "opacity-80 group-hover:opacity-100"
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

                {/* Toggle Button */}
                <button
                  onClick={toggleExpanded}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-5 text-white px-4 py-2 text-sm font-semibold ring-2 ring-primary/30 hover:translate-y-[-1px] active:translate-y-[1px] transition"
                  aria-expanded={isExpanded}
                  aria-controls={`detail-${option.id}`}
                >
                  <span>
                    {isExpanded ? "Sembunyikan Detail" : "Lihat Detail Lengkap"}
                  </span>
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

        {/* Lightbox Modal */}
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

// ===== Main Component =====
const OxygenPricing: React.FC = () => {
  return (
    <section
      id="harga"
      aria-label="Harga Tabung Oksigen Madiun"
      className="relative py-20 sm:py-28 bg-section"
    >
      {/* Decorative gradient (optional) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 gradient-rail opacity-50"
      />

      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-heading text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            Tabung Oksigen 1m³ di Madiun — Beli, Sewa, atau Isi Ulang
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-gray-600 dark:text-gray-300"
          >
            Pilihan lengkap dengan harga transparan. Klik kartu untuk melihat
            detail, fitur, dan galeri gambar.
          </motion.p>
        </header>

        {/* Pricing Cards */}
        <div className="space-y-4">
          {pricingOptions.map((option, index) => (
            <PricingCard key={option.id} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export dengan nama yang konsisten
export default OxygenPricing;
export { OxygenPricing };
