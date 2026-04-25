import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/private/", // Opsional: Halaman yang tidak boleh di-index
    },
    sitemap: "https://nimasmedika.com/sitemap.xml",
  };
}
