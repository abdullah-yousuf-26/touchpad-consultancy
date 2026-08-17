import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.touchpadconsultancy.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Protects private endpoints from search indexing
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
