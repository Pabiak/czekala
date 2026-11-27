import { defineArrayMember, defineField, defineType } from 'sanity';

// The editor is a non-technical author: every field has a plain-language title and
// hint, and the text editor offers only what the site styles (headings, emphasis,
// lists, quotes, links, images), so a post always looks right on the page.

export const post = defineType({
	name: 'post',
	title: 'Artykuł',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł',
			type: 'string',
			validation: (r) => r.required().max(120),
		}),
		defineField({
			name: 'slug',
			title: 'Adres artykułu',
			description:
				'Końcówka adresu, np. wojciechczekala.pl/baza-wiedzy/twoj-adres. Najprościej kliknąć „Generate”, aby utworzyć ją z tytułu.',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 90,
				// Polish letters → ASCII, spaces and symbols → hyphens.
				slugify: (input: string) =>
					input
						.toLowerCase()
						.replace(/ł/g, 'l')
						.normalize('NFD')
						.replace(/\p{M}/gu, '')
						.replace(/[^a-z0-9]+/g, '-')
						.replace(/^-+|-+$/g, '')
						.slice(0, 90),
			},
			validation: (r) =>
				r.required().custom((value) =>
					!value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)
						? true
						: 'Tylko małe litery bez polskich znaków, cyfry i myślniki (bez ukośników i spacji). Kliknij „Generate”.',
				),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Data publikacji',
			description: 'Artykuł pojawi się na stronie od tej daty (po najbliższej aktualizacji strony).',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'excerpt',
			title: 'Krótki opis',
			description: 'Jedno–dwa zdania. Widoczne na liście artykułów i w wynikach Google (najlepiej do 160 znaków).',
			type: 'text',
			rows: 3,
			validation: (r) => r.required().max(220).warning('Opis dłuższy niż 220 znaków zostanie ucięty w Google.'),
		}),
		defineField({
			name: 'mainImage',
			title: 'Zdjęcie główne',
			description: 'Pokazywane na górze artykułu, na liście artykułów i przy udostępnianiu w mediach społecznościowych.',
			type: 'image',
			options: { hotspot: true },
			fields: [
				defineField({
					name: 'alt',
					title: 'Opis zdjęcia (dla niewidomych i Google)',
					type: 'string',
					validation: (r) => r.required().warning('Dodaj krótki opis tego, co widać na zdjęciu.'),
				}),
				defineField({ name: 'caption', title: 'Podpis pod zdjęciem (opcjonalnie)', type: 'string' }),
			],
		}),
		defineField({
			name: 'body',
			title: 'Treść',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
					styles: [
						{ title: 'Zwykły tekst', value: 'normal' },
						{ title: 'Śródtytuł', value: 'h2' },
						{ title: 'Mniejszy śródtytuł', value: 'h3' },
						{ title: 'Cytat', value: 'blockquote' },
					],
					lists: [
						{ title: 'Punkty', value: 'bullet' },
						{ title: 'Numeracja', value: 'number' },
					],
					marks: {
						decorators: [
							{ title: 'Pogrubienie', value: 'strong' },
							{ title: 'Kursywa', value: 'em' },
						],
						annotations: [
							defineArrayMember({
								name: 'link',
								title: 'Link',
								type: 'object',
								fields: [
									defineField({
										name: 'href',
										title: 'Adres strony',
										type: 'url',
										validation: (r) => r.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
									}),
								],
							}),
						],
					},
				}),
				defineArrayMember({
					type: 'image',
					title: 'Zdjęcie',
					options: { hotspot: true },
					fields: [
						defineField({ name: 'alt', title: 'Opis zdjęcia', type: 'string' }),
						defineField({ name: 'caption', title: 'Podpis (opcjonalnie)', type: 'string' }),
					],
				}),
			],
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'seoTitle',
			title: 'Tytuł w Google (opcjonalnie)',
			description: 'Zostaw puste, aby użyć tytułu artykułu.',
			type: 'string',
			validation: (r) => r.max(70).warning('Google pokazuje zwykle do ok. 60 znaków.'),
		}),
	],
	orderings: [
		{ title: 'Najnowsze', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
	],
	preview: {
		select: { title: 'title', date: 'publishedAt', media: 'mainImage' },
		prepare: ({ title, date, media }) => ({
			title,
			subtitle: date ? new Date(date).toLocaleDateString('pl-PL') : 'Bez daty',
			media,
		}),
	},
});
