import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nimasmedika.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Kalau nanti ada halaman lain seperti /tentang-kami atau /katalog, tambahkan di sini
  ];
}
