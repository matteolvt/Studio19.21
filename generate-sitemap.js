import fs from "fs";
import { projectsData } from "./src/data/projectsData.js";
import { posts } from "./src/data/postData.js";

const baseUrl = "https://www.studio1921.fr";
let urls = "";

// Pages statiques
const staticPages = [
  "/", "/about", "/services", "/projets",
  "/contact", "/validé", "/mentions-legales", "/blog"
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
  urls += `
  <url>
    <loc>${baseUrl}/projets/${project.slug}</loc>
    <priority>0.6</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <image:image>
      <image:loc>${baseUrl}${project.image}</image:loc>
      <image:caption>${project.title}</image:caption>
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
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <priority>0.5</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:caption>${post.title}</image:caption>
    </image:image>
  </url>`;
});

// Fichier sitemap final
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
console.log("✅ Sitemap XML généré correctement !");