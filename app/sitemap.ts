import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/about", "/services", "/contact"].map((p) => ({ url: `${site.url}${p}` }));
  return [...base, ...services.map((s) => ({ url: `${site.url}/services/${s.slug}` }))];
}
