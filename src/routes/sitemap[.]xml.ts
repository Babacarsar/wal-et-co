import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/lib/seo";

const BASE_URL = SITE.url;

type SitemapEntry = {
  path: string;
  changefreq: string;
  priority: string;
  images?: { loc: string; title: string }[];
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
            images: [
              { loc: `${BASE_URL}/og-image.jpg`, title: "WAL & Co — Diamants naturels certifiés" },
              { loc: `${BASE_URL}/wal-logo.png`, title: "Logo WAL & Co" },
            ],
          },
          {
            path: "/collection",
            changefreq: "weekly",
            priority: "0.95",
            images: [{ loc: `${BASE_URL}/og-image.jpg`, title: "Collection diamants WAL & Co" }],
          },
          {
            path: "/galerie",
            changefreq: "daily",
            priority: "0.85",
          },
          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.75",
          },
          {
            path: "/faq",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/contact",
            changefreq: "monthly",
            priority: "0.8",
          },
        ];

        const urls = entries.map((e) => {
          const imagesXml = (e.images ?? [])
            .map(
              (img) =>
                `    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${escapeXml(img.title)}</image:title>\n    </image:image>`,
            )
            .join("\n");

          return [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            imagesXml,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n");
        });

        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
          `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n` +
          `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
          urls.join("\n") +
          `\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
