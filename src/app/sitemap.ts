import type { MetadataRoute } from "next";

const BASE_URL = "https://3slandcraft.example.com"; // update once the real domain is live

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/progress", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
