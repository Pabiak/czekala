// Blog content from Sanity (the client edits posts in Sanity Studio, see /studio).
// Posts are fetched at build time only: the site stays fully static.
//
// Config (env, see .env.example): SANITY_PROJECT_ID, SANITY_DATASET.
// Without a project ID the build still works: the blog is empty in production,
// and `astro dev` shows one clearly-labelled sample post to preview the layout.

import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { toHTML, uriLooksSafe, escapeHTML, type PortableTextComponents } from '@portabletext/to-html';

const projectId = import.meta.env.SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.SANITY_DATASET as string | undefined) ?? 'production';

export const sanityConfigured = Boolean(projectId);

const client: SanityClient | null = projectId
	? createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: false, perspective: 'published' })
	: null;

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

/* ---------- Types ---------- */
export interface SanityImage {
	asset: { _ref?: string; _id?: string; url?: string; metadata?: { dimensions?: { width: number; height: number } } };
	alt?: string;
	caption?: string;
	hotspot?: unknown;
	crop?: unknown;
}

export interface Post {
	title: string;
	slug: string;
	publishedAt: string;
	updatedAt: string;
	excerpt: string;
	seoTitle?: string;
	mainImage?: SanityImage;
	body: unknown[];
}

/* ---------- Queries ---------- */
const imageProjection = `{ ..., asset->{ _id, url, metadata { dimensions { width, height } } } }`;
const postProjection = `{
	title,
	"slug": slug.current,
	publishedAt,
	"updatedAt": _updatedAt,
	excerpt,
	seoTitle,
	mainImage ${imageProjection},
	body[]{ ..., _type == "image" => ${imageProjection} }
}`;

/** Editors sometimes type a slug by hand ("/Mój wpis/"): reduce it to a clean URL segment. */
export function cleanSlug(raw: string): string {
	return raw
		.toLowerCase()
		.replace(/ł/g, 'l')
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export async function getPosts(): Promise<Post[]> {
	if (!client) return import.meta.env.DEV ? [samplePost] : [];
	const posts = await client.fetch<Post[]>(
		`*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) ${postProjection}`,
	);
	return posts
		.map((p) => ({ ...p, slug: cleanSlug(p.slug), body: p.body ?? [], excerpt: p.excerpt ?? '' }))
		.filter((p) => p.slug);
}

/* ---------- Images (served from Sanity's CDN, so they never weigh on the host) ---------- */
export function imageDimensions(img: SanityImage | undefined) {
	return img?.asset?.metadata?.dimensions;
}

/** A sized URL for one width, in WebP/AVIF where the browser supports it. */
export function imageUrl(img: SanityImage, width: number, height?: number): string {
	if (!builder) return img.asset?.url ?? '';
	let b = builder.image(img).width(width).auto('format').quality(78);
	if (height) b = b.height(height).fit('crop');
	return b.url();
}

export function imageSrcset(img: SanityImage, widths: number[], ratio?: number): string {
	return widths.map((w) => `${imageUrl(img, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`).join(', ');
}

/* ---------- Portable Text → HTML ---------- */
const components: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			const img = value as SanityImage;
			const dims = imageDimensions(img);
			if (!img?.asset) return '';
			const w = 1200;
			const h = dims ? Math.round((w * dims.height) / dims.width) : undefined;
			const caption = img.caption ? `<figcaption>${escapeHTML(img.caption)}</figcaption>` : '';
			return `<figure><img src="${imageUrl(img, w)}" srcset="${imageSrcset(img, [480, 800, 1200])}" sizes="(min-width: 768px) 68ch, 100vw" alt="${escapeHTML(img.alt ?? '')}"${h ? ` width="${w}" height="${h}"` : ''} loading="lazy" decoding="async">${caption}</figure>`;
		},
	},
	marks: {
		link: ({ children, value }) => {
			const href = String((value as { href?: string })?.href ?? '');
			if (!uriLooksSafe(href)) return children;
			const external = /^https?:\/\//.test(href) && !href.includes('wojciechczekala.pl');
			return `<a href="${escapeHTML(href)}"${external ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`;
		},
	},
};

export function renderBody(body: unknown[]): string {
	return toHTML(body as Parameters<typeof toHTML>[0], { components, onMissingComponent: false });
}

/** Plain text of a post body, for reading time and fallbacks. */
export function plainText(body: unknown[]): string {
	return (body as { _type?: string; children?: { text?: string }[] }[])
		.filter((b) => b._type === 'block')
		.map((b) => (b.children ?? []).map((c) => c.text ?? '').join(''))
		.join('\n');
}

export function readingMinutes(body: unknown[]): number {
	const words = plainText(body).split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/* ---------- Dev-only sample (never in production builds) ---------- */
const sampleBlock = (text: string, style = 'normal') => ({
	_type: 'block',
	_key: Math.random().toString(36).slice(2),
	style,
	markDefs: [],
	children: [{ _type: 'span', _key: 'k', text, marks: [] }],
});

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui, cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.';

const samplePost: Post = {
	title: 'Przykładowy wpis – podgląd układu (widoczny tylko lokalnie)',
	slug: 'przykladowy-wpis',
	publishedAt: '2026-11-01T09:00:00Z',
	updatedAt: '2026-11-01T09:00:00Z',
	excerpt: 'Ten wpis pokazuje układ bloga, dopóki nie podłączysz Sanity. Nie trafia do wersji produkcyjnej.',
	body: [
		sampleBlock(lorem),
		sampleBlock('Śródtytuł sekcji', 'h2'),
		sampleBlock(lorem),
		sampleBlock('Cytat lub wyróżniona myśl z tekstu.', 'blockquote'),
		sampleBlock('Kolejny śródtytuł', 'h3'),
		sampleBlock(lorem),
	],
};
