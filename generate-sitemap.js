import fs from "fs";
import { projectsData } from "./src/data/projectsData.js";
import { posts } from "./src/data/postData.js";

const baseUrl = "https://www.studio1921.fr";
let urls = "";

// Échappe les caractères spéciaux XML
const escapeXml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

// Pages statiques
const staticPages = [
  "/", "/about", "/services", "/projets",
  "/contact", "/valide", "/mentions-legales", "/blog"
];

staticPages.forEach(page => {
  urls += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <priority>0.8</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
});

// Projets
projectsData.forEach(project => {
  const imageUrl = project.image?.startsWith("http")
    ? project.image
    : `${baseUrl}${project.image}`;

  urls += `
  <url>
    <loc>${baseUrl}/projets/${escapeXml(project.slug)}</loc>
    <priority>0.6</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:caption>${escapeXml(project.title)}</image:caption>
    </image:image>
  </url>`;
});

// Posts / Blog
posts.forEach(post => {
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${baseUrl}${post.image}`;

  urls += `
  <url>
    <loc>${baseUrl}/blog/${escapeXml(post.slug)}</loc>
    <priority>0.5</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:caption>${escapeXml(post.title)}</image:caption>
    </image:image>
  </url>`;
});

// Fichier sitemap final
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
console.log("✅ Sitemap XML généré correctement !");