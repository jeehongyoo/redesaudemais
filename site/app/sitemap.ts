import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://redesaudemais.com";
  const pages = ["", "/especialidades", "/exames", "/convenios", "/unidades", "/contato", "/privacidade"];
  return pages.map((p) => ({ url: base + p, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
