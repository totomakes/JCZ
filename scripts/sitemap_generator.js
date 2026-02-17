import fs from 'fs';
import path from 'path';

const pages = [
    { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 1.0 },
    { url: '/case-studies', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
    { url: '/method', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
    { url: '/thesis', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
    { url: '/apply', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.9 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://jcz.marketing${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

const outputPath = path.resolve('public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap.trim());
console.log(`Sitemap generated at: ${outputPath}`);
