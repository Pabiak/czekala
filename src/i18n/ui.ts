// All page copy in both languages. Polish texts come from the previous version of the site
// (github.com/Pabiak/czekala); English is a translation of them – no new facts.

export type Lang = 'pl' | 'en';
export type PageKey = 'home' | 'glossary';
export const langs: Lang[] = ['pl', 'en'];

export const routes = {
	pl: {
		home: '/',
		glossary: '/eko-slownik',
		anchors: { about: 'o-mnie', science: 'dzialalnosc-naukowa', experience: 'doswiadczenie', glossary: 'ekoslownik', contact: 'kontakt' },
	},
	en: {
		home: '/en/',
		glossary: '/en/eco-glossary',
		anchors: { about: 'about', science: 'research', experience: 'experience', glossary: 'eco-glossary', contact: 'contact' },
	},
} as const;

type GlossaryKey =
	| 'biodegradation'
	| 'biomass'
	| 'biofuels'
	| 'energy'
	| 'renewables'
	| 'waste'
	| 'municipal'
	| 'industrial'
	| 'environment';

export const glossaryPreviewKeys: GlossaryKey[] = ['environment', 'waste', 'energy'];

const pl = {
	htmlLang: 'pl',
	ogLocale: 'pl_PL',
	numberLocale: 'pl-PL',
	meta: {
		title: 'Wojciech Czekała',
		description:
			'Oficjalna strona Prof. Wojciecha Czekały – naukowca, dydaktyka i pasjonata wiedzy. Informacje o działalności naukowej, publikacjach i kontakt.',
		glossaryTitle: 'Ekosłownik – Wojciech Czekała',
		personDescription:
			'Naukowiec, dydaktyk i praktyk w obszarach gospodarki odpadami, energetyki, energii odnawialnej, produkcji biopaliw, zrównoważonego rozwoju, gospodarki o obiegu zamkniętym oraz ochrony i kształtowania środowiska.',
		jobTitle: 'Profesor',
	},
	ui: {
		skip: 'Przejdź do treści',
		brandLabel: 'Wojciech Czekała – strona główna',
		navLabel: 'Główna nawigacja',
		menuOpen: 'Otwórz menu',
		menuClose: 'Zamknij menu',
		langLabel: 'Język',
		toTop: 'Przewiń do góry strony',
		newTab: '(otwiera się w nowej karcie)',
		madeBy: 'Realizacja:',
	},
	nav: { about: 'O mnie', glossary: 'Ekosłownik', blog: 'Blog', contact: 'Kontakt' },
	hero: {
		title: 'Ekspert w ekologicznym postępie',
		sub: 'Zbudujmy razem przyszłość',
		lead: 'naukowiec, dydaktyk i praktyk: gospodarka odpadami, energetyka, odnawialne źródła energii, biopaliwa i gospodarka o obiegu zamkniętym.',
		email: 'Napisz do mnie',
		call: 'Zadzwoń:',
		alt: 'Prof. Wojciech Czekała podczas wystąpienia, przy mównicy z mikrofonem',
	},
	stats: {
		heading: 'Dorobek w liczbach',
		/** Plural forms for the years-of-experience label, keyed by Intl.PluralRules category. */
		yearsPlural: {
			one: 'rok doświadczenia',
			few: 'lata doświadczenia',
			many: 'lat doświadczenia',
			other: 'lat doświadczenia',
		} as Record<string, string>,
		labels: [
			'lat doświadczenia',
			'projektów komercyjnych',
			'godzin szkoleń i wykładów',
			'prac twórczych',
			'artykułów z listy filadelfijskiej',
			'prelekcji na konferencjach',
		],
	},
	about: {
		heading: 'O mnie',
		areasHeading: 'Obszary zainteresowania',
		lead: 'Pracuję w obszarach gospodarki odpadami, energetyki, energii odnawialnej, produkcji biopaliw, zrównoważonego rozwoju, gospodarki o obiegu zamkniętym oraz szeroko rozumianej ochrony i kształtowania środowiska. Istotnym elementem mojej działalności jest również edukacja środowiskowa i popularyzacja wiedzy.',
		areas: [
			'Gospodarka odpadami',
			'Energetyka',
			'Energia odnawialna',
			'Produkcja biopaliw',
			'Zrównoważony rozwój',
			'Gospodarka o obiegu zamkniętym',
			'Ochrona i kształtowanie środowiska',
			'Edukacja środowiskowa i popularyzacja wiedzy',
		],
		alt: 'Prof. Wojciech Czekała przemawia z mikrofonem na konferencji branżowej',
		titleLabel: 'Tytuł profesora',
		titleKicker: '2023 · tytuł Profesora',
		titleBig: { before: 'Profesor w wieku ', num: '36', after: ' lat' },
		titleText:
			'W 2023 roku, w wieku 36 lat, za wybitne osiągnięcia naukowe oraz całokształt dorobku uzyskałem tytuł Profesora w dziedzinie Nauk Inżynieryjno-technicznych w dyscyplinie Inżynieria Środowiska, Górnictwo i Energetyka.',
	},
	science: {
		heading: 'Działalność naukowa',
		lead: 'Napisałem lub pracowałem jako współautor przy ponad 170 publikacjach naukowych, w tym ponad 50 opublikowanych w czasopismach znajdujących się na liście filadelfijskiej.',
		rankYears: '2022–2026',
		rankText:
			'W latach 2022–2026 zostałem sklasyfikowany na liście 2% najbardziej wpływowych naukowców na świecie pod względem cytowań w literaturze naukowej. Ranking został przygotowany przez Uniwersytet Stanforda we współpracy z wydawnictwem Elsevier.',
		journalsHeading: 'Najbardziej prestiżowe czasopisma, w których publikowałem',
		booksHeading: 'Książki',
		booksIntro:
			'Potwierdzeniem mojej szerokiej działalności prowadzonej na arenie międzynarodowej są m.in. dwie książki.',
		bookRoles: ['Autor książki', 'Edytor i współautor czterech rozdziałów'],
	},
	experience: {
		heading: 'Doświadczenie',
		quote: 'W swojej pracy łączę naukę, wiedzę, technologie i biznes.',
		alt: 'Prof. Wojciech Czekała z kaskiem ochronnym w hali instalacji do przetwarzania odpadów',
		items: [
			{
				marker: 'LIDER VII',
				title: 'Kierownik projektów badawczych',
				text: 'Podczas mojej pracy naukowej byłem kierownikiem licznych projektów badawczych, w tym grantu „IN-OIL: Innowacyjna metoda biokonwersji produktów ubocznych przemysłu spożywczego”, realizowanego w ramach projektu LIDER VII, finansowanego przez Narodowe Centrum Badań i Rozwoju.',
			},
			{
				marker: '2017',
				title: 'Stypendium dla wybitnych młodych naukowców',
				text: 'Jestem laureatem Stypendium dla wybitnych młodych naukowców, przyznawanego przez Ministerstwo Nauki i Szkolnictwa Wyższego dla najlepszych młodych naukowców w Polsce.',
			},
			{
				marker: '100+',
				title: 'Projekty z biznesem',
				text: 'Mimo tego, że jestem naukowcem oraz dydaktykiem, jestem również praktykiem posiadającym doświadczenie w realizacji ponad 100 projektów wspólnie z m.in. największymi podmiotami gospodarczymi w Polsce.',
			},
			{
				marker: 'od 2011',
				title: 'Wystąpienia na wydarzeniach branżowych',
				text: 'Być może znasz mnie również z wielu wydarzeń branżowych, na których systematycznie występuję od 2011 roku.',
			},
		],
	},
	glossary: {
		heading: 'Ekosłownik',
		cta: 'Sprawdź kompendium',
		back: 'Strona główna',
		indexLabel: 'Hasła',
		entries: {
			biodegradation: {
				term: 'Biodegradacja',
				definition:
					'Naturalny proces rozkładu materii organicznej zachodzący pod wpływem mikroorganizmów w warunkach tlenowych oraz beztlenowych.',
			},
			biomass: {
				term: 'Biomasa',
				definition:
					'Są to produkty, pozostałości oraz odpady pochodzenia roślinnego lub zwierzęcego, które ulegają biodegradacji. Biomasa jest najłatwiejszym do pozyskania oraz najszerzej wykorzystywanym odnawialnym źródłem energii.',
			},
			biofuels: {
				term: 'Biopaliwa',
				definition:
					'Są to paliwa wytworzone z biomasy. Ze względu na stan skupienia biopaliwa dzieli się na stałe, ciekłe oraz gazowe.',
			},
			energy: {
				term: 'Energia',
				definition:
					'Jest to skalarna wielkość fizyczna wyrażająca zdolność do wykonania pracy przez ciało lub układ ciał. Jednostką energii w układzie SI jest dżul [J].',
			},
			renewables: {
				term: 'Odnawialne źródła energii',
				definition:
					'Są to niewyczerpywalne źródła energii, które odnawiają się w sposób naturalny. Odnawialne źródła energii obejmują m.in. energię wiatru, energię promieniowania słonecznego, energię wody, energię geotermalną, energię otrzymywaną z biomasy, odpadów i biopaliw.',
			},
			waste: {
				term: 'Odpady',
				definition:
					'Przedmioty lub substancje powstałe w wyniku działalności człowieka, które nie są mu przydatne w danym miejscu i czasie.',
			},
			municipal: {
				term: 'Odpady komunalne',
				definition:
					'Są to wszystkie odpady powstające w gospodarstwach domowych. Odpady komunalne powstają w wyniku nieprzemysłowej działalności człowieka.',
			},
			industrial: {
				term: 'Odpady przemysłowe',
				definition: 'Są to wszystkie odpady powstające w wyniku gospodarczej działalności człowieka.',
			},
			environment: {
				term: 'Środowisko',
				definition:
					'Pod tym pojęciem należy rozumieć ogół elementów przyrodniczych ożywionych i nieożywionych, wzajemne oddziaływania pomiędzy nimi. Pojęcie środowiska obejmuje również jego elementy, które zostały przekształcone w wyniku działalności człowieka.',
			},
		} satisfies Record<GlossaryKey, { term: string; definition: string }>,
	},
	blog: {
		heading: 'Blog',
		metaTitle: 'Blog – Wojciech Czekała',
		description:
			'Wpisy prof. Wojciecha Czekały o gospodarce odpadami, energetyce, odnawialnych źródłach energii, biopaliwach i gospodarce o obiegu zamkniętym.',
		empty: 'Pierwsze wpisy pojawią się wkrótce.',
		back: 'Wszystkie wpisy',
		listLabel: 'Wpisy',
		readMore: 'Czytaj wpis',
		minutes: 'min czytania',
		authorHeading: 'O autorze',
		contactCta: 'Napisz do mnie',
		rss: 'Kanał RSS',
	},
	contact: {
		heading: 'Kontakt',
		email: 'E-mail',
		phone: 'Telefon',
		linkedin: 'LinkedIn',
		alt: 'Portret prof. Wojciecha Czekały',
	},
};

export type Content = typeof pl;

const en: Content = {
	htmlLang: 'en',
	ogLocale: 'en_GB',
	numberLocale: 'en-GB',
	meta: {
		title: 'Wojciech Czekała',
		description:
			'Official website of Prof. Wojciech Czekała – scientist, academic teacher and knowledge enthusiast. Information about his research, publications and contact details.',
		glossaryTitle: 'Eco-glossary – Wojciech Czekała',
		personDescription:
			'Scientist, academic teacher and practitioner working in waste management, energy, renewable energy, biofuel production, sustainable development, the circular economy and environmental protection.',
		jobTitle: 'Professor',
	},
	ui: {
		skip: 'Skip to content',
		brandLabel: 'Wojciech Czekała – home page',
		navLabel: 'Main navigation',
		menuOpen: 'Open menu',
		menuClose: 'Close menu',
		langLabel: 'Language',
		toTop: 'Back to top',
		newTab: '(opens in a new tab)',
		madeBy: 'Website by',
	},
	nav: { about: 'About me', glossary: 'Eco-glossary', blog: 'Blog', contact: 'Contact' },
	hero: {
		title: 'An expert in ecological progress',
		sub: 'Let’s build the future together',
		lead: 'scientist, academic teacher and practitioner: waste management, energy, renewable energy sources, biofuels and the circular economy.',
		email: 'Email me',
		call: 'Call:',
		alt: 'Prof. Wojciech Czekała giving a talk at a lectern, holding a microphone',
	},
	stats: {
		heading: 'Track record in numbers',
		yearsPlural: {
			one: 'year of experience',
			other: 'years of experience',
		},
		labels: [
			'years of experience',
			'commercial projects',
			'hours of training and lectures',
			'creative works',
			'articles in JCR-indexed journals',
			'conference talks',
		],
	},
	about: {
		heading: 'About me',
		areasHeading: 'Areas of interest',
		lead: 'I work in waste management, energy, renewable energy, biofuel production, sustainable development, the circular economy and environmental protection and management in the broadest sense. Environmental education and science outreach are also an important part of my work.',
		areas: [
			'Waste management',
			'Energy',
			'Renewable energy',
			'Biofuel production',
			'Sustainable development',
			'Circular economy',
			'Environmental protection and management',
			'Environmental education and science outreach',
		],
		alt: 'Prof. Wojciech Czekała speaking with a microphone at an industry conference',
		titleLabel: 'Professorship',
		titleKicker: '2023 · Professor title',
		titleBig: { before: 'Professor at ', num: '36', after: '' },
		titleText:
			'In 2023, at the age of 36, I was awarded the title of Professor of Engineering and Technical Sciences in the discipline of Environmental Engineering, Mining and Energy for outstanding scientific achievements and my overall body of work.',
	},
	science: {
		heading: 'Research',
		lead: 'I have authored or co-authored more than 170 scientific publications, including more than 50 in journals indexed in the Journal Citation Reports (the so-called Philadelphia list).',
		rankYears: '2022–2026',
		rankText:
			'From 2022 to 2026 I was ranked among the world’s top 2% most influential scientists by citations in the scientific literature. The ranking is prepared by Stanford University in cooperation with Elsevier.',
		journalsHeading: 'The most prestigious journals I have published in',
		booksHeading: 'Books',
		booksIntro: 'My international work is reflected in, among others, two books.',
		bookRoles: ['Author', 'Editor and co-author of four chapters'],
	},
	experience: {
		heading: 'Experience',
		quote: 'In my work I combine science, knowledge, technology and business.',
		alt: 'Prof. Wojciech Czekała holding a safety helmet in the hall of a waste processing plant',
		items: [
			{
				marker: 'LIDER VII',
				title: 'Research project leader',
				text: 'Throughout my scientific career I have led numerous research projects, including the grant “IN-OIL: An innovative method for the bioconversion of food industry by-products”, carried out under the LIDER VII programme and funded by the National Centre for Research and Development.',
			},
			{
				marker: '2017',
				title: 'Scholarship for outstanding young scientists',
				text: 'I am a laureate of the Scholarship for Outstanding Young Scientists, awarded by the Polish Ministry of Science and Higher Education to the best young researchers in Poland.',
			},
			{
				marker: '100+',
				title: 'Projects with industry',
				text: 'Although I am a scientist and an academic teacher, I am also a practitioner with experience in more than 100 projects carried out with, among others, the largest companies in Poland.',
			},
			{
				marker: 'since 2011',
				title: 'Speaking at industry events',
				text: 'You may also know me from the many industry events where I have been speaking regularly since 2011.',
			},
		],
	},
	glossary: {
		heading: 'Eco-glossary',
		cta: 'Explore the glossary',
		back: 'Home',
		indexLabel: 'Terms',
		entries: {
			biodegradation: {
				term: 'Biodegradation',
				definition:
					'A natural process in which organic matter is broken down by microorganisms under aerobic and anaerobic conditions.',
			},
			biomass: {
				term: 'Biomass',
				definition:
					'Biodegradable products, residues and waste of plant or animal origin. Biomass is the easiest renewable energy source to obtain and the most widely used one.',
			},
			biofuels: {
				term: 'Biofuels',
				definition:
					'Fuels produced from biomass. By physical state, biofuels are divided into solid, liquid and gaseous fuels.',
			},
			energy: {
				term: 'Energy',
				definition:
					'A scalar physical quantity expressing the ability of a body or a system of bodies to do work. The SI unit of energy is the joule [J].',
			},
			renewables: {
				term: 'Renewable energy sources',
				definition:
					'Inexhaustible sources of energy that are replenished naturally. They include, among others, wind energy, solar radiation, hydropower, geothermal energy and energy obtained from biomass, waste and biofuels.',
			},
			waste: {
				term: 'Waste',
				definition:
					'Objects or substances resulting from human activity that are of no use to people at a given place and time.',
			},
			municipal: {
				term: 'Municipal waste',
				definition:
					'All waste generated in households. Municipal waste results from non-industrial human activity.',
			},
			industrial: {
				term: 'Industrial waste',
				definition: 'All waste generated by human economic activity.',
			},
			environment: {
				term: 'Environment',
				definition:
					'The totality of living and non-living natural elements and the interactions between them. The concept of the environment also covers those of its elements that have been transformed by human activity.',
			},
		},
	},
	blog: {
		heading: 'Blog',
		metaTitle: 'Blog – Wojciech Czekała',
		description:
			'Posts by Prof. Wojciech Czekała on waste management, energy, renewable energy sources, biofuels and the circular economy.',
		empty: 'The first posts are coming soon.',
		back: 'All posts',
		listLabel: 'Posts',
		readMore: 'Read the post',
		minutes: 'min read',
		authorHeading: 'About the author',
		contactCta: 'Email me',
		rss: 'RSS feed',
	},
	contact: {
		heading: 'Contact',
		email: 'Email',
		phone: 'Phone',
		linkedin: 'LinkedIn',
		alt: 'Portrait of Prof. Wojciech Czekała',
	},
};

export const ui: Record<Lang, Content> = { pl, en };

/** Lowercase ASCII slug for in-page anchors (handles Polish diacritics). */
export const slugify = (s: string) =>
	s
		.toLowerCase()
		.replace(/ł/g, 'l')
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
