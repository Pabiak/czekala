import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../../lib/sanity';
import { ui } from '../../i18n/ui';

export async function GET(context: APIContext) {
	const t = ui.pl.blog;
	const posts = await getPosts();
	return rss({
		title: t.metaTitle,
		description: t.description,
		site: context.site ?? 'https://wojciechczekala.pl',
		items: posts.map((p) => ({
			title: p.title,
			description: p.excerpt,
			pubDate: new Date(p.publishedAt),
			link: `/blog/${p.slug}`,
		})),
		customData: '<language>pl</language>',
	});
}
