// src/lib/whatsapp.ts
// ============================================================
// Helper untuk generate link WhatsApp dengan footer promosi
// - Semua link WA di website menggunakan helper ini
// - Footer berisi info bisnis lengkap (website, sosmed, maps)
// - Format: api.whatsapp.com/send untuk kompatibilitas maksimal
// ============================================================

// Nomor WhatsApp resmi Nimas Medika (tanpa tanda +)
const WA_PHONE = "628123436075";

// ===== Footer Promosi =====
// "Ekor" pesan yang otomatis ditambahkan di setiap pesan WA.
// Berfungsi sebagai watermark/branding di setiap interaksi pelanggan.
const WA_FOOTER = `
———————————————
*Nimas Medika*
Alat Kesehatan & Isi Ulang Oksigen di Madiun

🌐 Website : https://nimasmedika.com
💬 WhatsApp : wa.me/${WA_PHONE}
🛒 Shopee : https://shopee.co.id/nimasmedika
🎬 YouTube : https://www.youtube.com/@alatkesehatanmadiun/
📸 Instagram : https://www.instagram.com/nimasmedika/
🎵 Tiktok : https://www.tiktok.com/@alkesmadiun
📍 Maps : https://maps.app.goo.gl/FDmqBXBo689UGCsz7`;

/**
 * Generate URL WhatsApp dengan pesan pre-filled + footer promosi.
 *
 * @param message - Pesan utama yang ingin dikirim (tanpa footer).
 *                  Jika kosong, hanya footer yang dikirim.
 * @returns URL lengkap ke api.whatsapp.com/send
 *
 * @example
 * // Dengan pesan custom
 * buildWhatsAppUrl("Halo, saya tertarik sewa tabung oksigen")
 *
 * // Tanpa pesan (hanya footer)
 * buildWhatsAppUrl()
 */
export function buildWhatsAppUrl(message?: string): string {
  // Gabungkan pesan + footer, lalu encode untuk URL
  const fullMessage = message
    ? `${message}\n${WA_FOOTER}`
    : `Halo Nimas Medika!${WA_FOOTER}`;

  const encodedText = encodeURIComponent(fullMessage);

  // Format api.whatsapp.com/send untuk kompatibilitas desktop & mobile
  return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${encodedText}&type=phone_number&app_absent=0`;
}
