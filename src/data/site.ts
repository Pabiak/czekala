// Language-independent data. Translatable copy lives in src/i18n/ui.ts.

export const site = {
	url: 'https://wojciechczekala.pl',
	name: 'Wojciech Czekała',
	ogImage: { url: 'https://wojciechczekala.pl/czekala1.jpg', width: 2500, height: 1667, alt: 'Wojciech Czekała' },
};

export const contact = {
	email: 'kontakt@wojciechczekala.pl',
	phone: '+48 794-265-938',
	phoneHref: 'tel:+48794265938',
	linkedIn:
		'https://www.linkedin.com/in/wojciechczekala/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=pl',
};

/** First year of professional experience: 15 years in 2024. */
export const experienceSince = 2009;

/**
 * Values for the stats band; labels come from ui[lang].stats.labels in the same order.
 * `since` marks a value that grows every year: the build writes the current count as a
 * fallback and motion.ts recomputes it in the browser, so it stays right without a rebuild.
 */
export const stats: { value: number; suffix: string; since?: number }[] = [
	{ value: new Date().getFullYear() - experienceSince, suffix: '', since: experienceSince },
	{ value: 100, suffix: '+' },
	{ value: 2500, suffix: '+' },
	{ value: 200, suffix: '+' },
	{ value: 80, suffix: '+' },
	{ value: 100, suffix: '+' },
];

export const journals = [
	'Renewable & Sustainable Energy Reviews',
	'Waste Management',
	'Energy',
	'Journal of Cleaner Production',
	'Bioresource Technology',
	'Science of The Total Environment',
];

/** Book titles stay in their original (English) form in both languages. */
export const books = [
	{
		year: '2023',
		publisher: 'Springer Nature',
		title: 'Biological treatment of waste and by‑product from food industry',
	},
	{
		year: '2024',
		publisher: 'Wiley',
		title: 'Biogas Plants – Waste Management, Energy Production, and Carbon Footprint Reduction',
	},
	{
		year: '2026',
		publisher: 'Elsevier',
		title: 'Sustainable Bioenergy Production from Agricultural Biomass and Waste',
	},
];
