// Generated at build time so new blog posts land in the sitemap automatically.
// Keeps the historical /sitemap.xml URL.
import { site } from '../data/site';
import { routes, langs, type PageKey } from '../i18n/ui';
import { getPosts } from '../lib/sanity';

const abs = (p: string) => new URL(p, site.url).href;

export async function GET() {
	const posts = await getPosts();
	const paired: PageKey[] = ['home', 'glossary'];

	const pairedUrls = paired.flatMap((page) =>
		langs.map((lang) => {
			const alternates = langs
				.map((l) => `\t\t<xhtml:link rel="alternate" hreflang="${l}" href="${abs(routes[l][page])}"/>`)
				.join('\n');
			return `\t<url>\n\t\t<loc>${abs(routes[lang][page])}</loc>\n${alternates}\n\t</url>`;
		}),
	);

	const blogUrls = [
		`\t<url>\n\t\t<loc>${abs('/blog')}</loc>${posts[0] ? `\n\t\t<lastmod>${posts[0].updatedAt}</lastmod>` : ''}\n\t</url>`,
		...posts.map(
			(p) => `\t<url>\n\t\t<loc>${abs(`/blog/${p.slug}`)}</loc>\n\t\t<lastmod>${p.updatedAt}</lastmod>\n\t</url>`,
		),
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pairedUrls, ...blogUrls].join('\n')}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
