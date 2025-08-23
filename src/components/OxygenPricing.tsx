// src/components/OxygenPricing.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import Image from 'next/image';
import { CheckCircle, ChevronDown, ShoppingCart, Tag, RefreshCw, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

// Data Opsi Harga (dengan copywriting SEO-friendly dan path gambar)
const pricingOptions = [
  {
    id: 'sewa',
    title: 'Sewa Tabung Oksigen Bulanan di Madiun',
    price: 'Mulai dari Rp 200.000',
    description: 'Solusi fleksibel dan terjangkau untuk perawatan jangka pendek di rumah. Jaminan kembali 100%.',
    icon: Tag,
    features: [
      'Sewa Tabung + Isi: Rp 200.000/bln',
      'Add-on Sewa Regulator: +Rp 50.000/bln',
      'Add-on Sewa Troli: +Rp 50.000/bln',
      'Jaminan: Rp 600.000 (uang kembali penuh)',
    ],
    images: [
      '/images/gallery-1.jpg',
      '/images/gallery-2.jpg',
      '/images/gallery-3.jpg',
    ],
  },
  {
    id: 'beli-paket',
    title: 'Beli Paket Oksigen Lengkap Siap Pakai',
    price: 'Rp 1.000.000',
    description: 'Pilihan terbaik untuk kepemilikan pribadi. Semua lengkap, original, dan siap pakai.',
    icon: ShoppingCart,
    features: [
      '1 Set Lengkap (Tabung, Isi, Regulator, Troli, Selang)',
      'Produk original terdaftar KEMENKES RI',
      'Siap pakai tanpa perlu setup tambahan',
      'Investasi kesehatan jangka panjang untuk keluarga',
    ],
    images: [
      '/images/gallery-4.jpg',
      '/images/gallery-5.jpg',
      '/images/gallery-6.jpg',
    ],
  },
    {
    id: 'beli-tabung',
    title: 'Beli Tabung Oksigen 1m³ Baru',
    price: 'Rp 400.000',
    description: 'Ideal jika Anda sudah memiliki regulator dan aksesoris lainnya. Kondisi baru dan terjamin.',
    icon: Box,
    features: [
      'Tabung oksigen 1m³ kondisi baru',
      'Sudah terisi penuh 2000 PSI',
      'Standar medis dan terjamin keamanannya',
      'Siap dihubungkan dengan regulator Anda',
    ],
    images: [
      '/images/gallery-7.jpg',
      '/images/gallery-8.jpg',
      '/images/gallery-9.jpg',
    ],
  },
  {
    id: 'isi-ulang',
    title: 'Jasa Isi Ulang Oksigen Cepat di Madiun',
    price: 'Rp 45.000',
    description: 'Layanan isi ulang oksigen cepat, hanya 5 menit dan bisa ditunggu.',
    icon: RefreshCw,
    features: [
      'Proses cepat hanya 5 menit, bisa ditunggu',
      'Tekanan dijamin penuh 2000 PSI',
      'Untuk semua jenis tabung standar 1m³',
      'Pelayanan profesional dan ramah',
    ],
    images: [
      '/images/gallery-10.jpg',
      '/images/gallery-11.jpg',
      '/images/gallery-12.jpg',
    ],
  },
];

// Komponen Kartu Individual yang Interaktif
const PricingCard = ({ option, index }: { option: (typeof pricingOptions)[0], index: number }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4 sm:gap-8">
      {/* Garis Timeline & Ikon */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white shadow-lg shadow-primary/50"
        >
          <option.icon className="h-6 w-6" />
        </motion.div>
        <div className="w-px h-full bg-gray-200" />
      </div>

      {/* Konten Kartu yang Bisa Expand */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 pb-16"
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-shadow hover:shadow-2xl hover:shadow-primary/20">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900">{option.title}</h3>
            <p className="mt-1 text-gray-600">{option.description}</p>
            <p className="mt-4 text-3xl font-bold text-primary">{option.price}</p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '24px' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-4">Fitur & Keunggulan:</h4>
                      <ul className="space-y-3 text-sm leading-6 text-gray-600">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckCircle className="h-6 w-5 flex-none text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                       <h4 className="font-heading font-semibold text-gray-800 mb-4">Galeri Visual:</h4>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-video w-full rounded-lg overflow-hidden"
                          >
                            <Image
                              src={option.images[selectedImage]}
                              alt={`${option.title} - gambar ${selectedImage + 1}`}
                              width={500}
                              height={281}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>
                        <div className="grid grid-cols-3 gap-2">
                          {option.images.map((img, idx) => (
                            <button key={idx} onClick={() => setSelectedImage(idx)} className="aspect-video rounded-md overflow-hidden ring-2 ring-transparent hover:ring-primary focus:ring-primary transition-all">
                              <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                width={150}
                                height={84}
                                className={cn("w-full h-full object-cover", selectedImage === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100')}
                              />
                            </button>
                          ))}
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{isExpanded ? 'Sembunyikan Detail' : 'Lihat Detail Lengkap'}</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


// Komponen Utama yang akan diekspor
export const OxygenPricing = () => {
  return (
    <div id="harga" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        {pricingOptions.map((option, index) => (
          <PricingCard key={option.id} option={option} index={index} />
        ))}
      </Container>
    </div>
  );
};