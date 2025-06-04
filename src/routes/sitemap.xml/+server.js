export async function GET() {
  const baseUrl = 'https://sigmaroofingllc.com'; // Update this with your actual domain
  
  const pages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/sitemap',
    '/hail-damage',
    '/tornado-damage',
    '/admin'
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}