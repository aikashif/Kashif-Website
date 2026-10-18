import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// Public address of the site. Set SITE_URL once you have a domain.
// Netlify sets URL on every build, so it is the fallback.
const siteUrl = (process.env.SITE_URL || process.env.URL || '').replace(/\/$/, '');

// Adds canonical and absolute share tags, plus robots.txt and sitemap.xml.
// Without a site URL, it leaves out the tags that need an absolute address.
function siteMeta(): Plugin {
  return {
    name: 'site-meta',
    apply: 'build',
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      const tags = [
        `<link rel="canonical" href="${siteUrl}/" />`,
        `<meta property="og:url" content="${siteUrl}/" />`,
      ].join('\n    ');
      return html
        .replace('</head>', `    ${tags}\n  </head>`)
        .replaceAll('content="/og-image.png"', `content="${siteUrl}/og-image.png"`);
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /'];
      if (siteUrl) robots.push(`Sitemap: ${siteUrl}/sitemap.xml`);
      this.emitFile({type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n'});
      if (siteUrl) {
        const sitemap =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url><loc>${siteUrl}/</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>\n` +
          '</urlset>\n';
        this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: sitemap});
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
});
