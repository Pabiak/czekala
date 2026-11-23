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

/** Values for the stats band; labels come from ui[lang].stats.labels in the same order. */
export const stats = [
	{ value: 15, suffix: '' },
	{ value: 100, suffix: '+' },
	{ value: 2000, suffix: '+' },
	{ value: 170, suffix: '+' },
	{ value: 50, suffix: '+' },
	{ value: 80, suffix: '+' },
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
];
