import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const routes = ["/", "/soluciones", "/como-trabajamos", "/more-human", "/laboratorio", "/contacto"];
const configuredUrl = process.env.SITE_URL;

if (!configuredUrl) {
  throw new Error(
    "SITE_URL es obligatorio. Ejemplo: SITE_URL=https://dominio-confirmado.com pnpm sitemap:generate",
  );
}

const siteUrl = new URL(configuredUrl);
if (!/^https?:$/.test(siteUrl.protocol)) {
  throw new Error("SITE_URL debe usar http o https.");
}

const entries = routes
  .map((route) => {
    const url = new URL(route, siteUrl).href;
    return `  <url>\n    <loc>${url}</loc>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

await writeFile(resolve("public", "sitemap.xml"), sitemap, "utf8");
console.log(`Sitemap generado para ${siteUrl.origin} con ${routes.length} rutas.`);
