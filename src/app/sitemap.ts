import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SitemapService {
  private baseUrl = 'https://agrouniaogroup.com';

  private routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/products', priority: '0.9', changefreq: 'weekly' },
    { path: '/get-a-quote', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/sustainability', priority: '0.7', changefreq: 'monthly' },
    { path: '/community', priority: '0.6', changefreq: 'monthly' },
  ];

  generateSitemap(): string {
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

    this.routes.forEach((route) => {
      xml += `  <url>
    <loc>${this.baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
    });

    xml += '</urlset>';
    return xml;
  }
}
