// All page copy in both languages. Polish texts come from the previous version of the site
// (github.com/Pabiak/czekala); English is a translation of them – no new facts.

export type Lang = 'pl' | 'en';
export type PageKey = 'home' | 'glossary';
export const langs: Lang[] = ['pl', 'en'];

export const routes = {
	pl: {
		home: '/',
		glossary: '/eko-slownik',
		anchors: { about: 'o-mnie', science: 'dzialalnosc-naukowa', experience: 'doswiadczenie', glossary: 'ekoslownik', collab: 'wspolpraca', contact: 'kontakt' },
	},
	en: {
		home: '/en/',
		glossary: '/en/eco-glossary',
		anchors: { about: 'about', science: 'research', experience: 'experience', glossary: 'eco-glossary', collab: 'collaboration', contact: 'contact' },
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
	nav: { about: 'O mnie', glossary: 'Ekosłownik', collab: 'Współpraca', knowledge: 'Baza wiedzy', contact: 'Kontakt' },
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
			'godzin wykładów i szkoleń',
			'recenzowanych prac twórczych',
			'artykułów z listy filadelfijskiej',
			'prelekcji na konferencjach naukowych i branżowych',
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
		lead: 'Napisałem lub pracowałem jako współautor przy ponad 200 publikacjach naukowych, w tym ponad 80 opublikowanych w czasopismach znajdujących się na liście filadelfijskiej.',
		rankYears: '2022–2025',
		rankText:
			'W latach 2022–2025 zostałem sklasyfikowany na liście 2% najbardziej wpływowych naukowców na świecie pod względem cytowań w literaturze naukowej. Ranking został przygotowany przez Uniwersytet Stanforda we współpracy z wydawnictwem Elsevier.',
		journalsHeading: 'Najbardziej prestiżowe czasopisma, w których publikowałem',
		booksHeading: 'Książki',
		booksIntro:
			'Potwierdzeniem mojej szerokiej działalności prowadzonej na arenie międzynarodowej są m.in. trzy książki.',
		bookRoles: ['Autor książki', 'Edytor i współautor czterech rozdziałów', 'Edytor i współautor pięciu rozdziałów'],
		ecExpertLabel: 'Komisja Europejska',
		ecExpert: 'Pełnię rolę eksperta Komisji Europejskiej.',
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
	collab: {
		// Expert positioning, deliberately not a sales page (no offer list with prices, no hard sell).
		heading: 'Współpraca',
		lead: 'Skuteczna transformacja energetyczna oraz nowoczesna gospodarka odpadami wymagają ścisłego połączenia rzetelnej wiedzy naukowej z praktyką rynkową.',
		text: 'W swojej działalności łączę doświadczenie badawcze z doradztwem technologicznym, wspierając rozwój innowacyjnych projektów w obszarze bioenergii, biogazu oraz zagospodarowania biomasy.',
		invite: 'Zapraszam do współpracy przedstawicieli środowiska akademickiego, studentów oraz partnerów z sektora gospodarczego i samorządowego.',
		intro: 'Poniżej przedstawiam główne obszary, w których dzielę się swoją wiedzą oraz doświadczeniem eksperckim.',
		/** Item-count label in each panel header, keyed by Intl.PluralRules category. */
		countForms: { one: 'obszar', few: 'obszary', many: 'obszarów', other: 'obszaru' } as Record<string, string>,
		groups: [
			{
				title: 'Dla naukowców',
				items: [
					{ title: 'Publikacje naukowe', desc: 'Wspólne przygotowanie artykułów naukowych w czasopismach o wysokim wskaźniku wpływu.' },
					{ title: 'Projekty B+R', desc: 'Partnerstwo w aplikowaniu o granty krajowe i międzynarodowe oraz ich kompleksowa realizacja.' },
					{ title: 'Staże naukowe i wyjazdy studyjne', desc: 'Organizacja oraz udział w wymianach wiedzy, stażach przemysłowych i wizytach studyjnych w ośrodkach badawczych.' },
					{ title: 'Konsorcja badawczo-przemysłowe', desc: 'Inicjowanie i budowanie interdyscyplinarnych zespołów łączących świat nauki z partnerami z sektora gospodarczego.' },
					{ title: 'Recenzje i oceny merytoryczne', desc: 'Przygotowywanie profesjonalnych ocen prac naukowych, wniosków grantowych oraz opracowań technologicznych.' },
					{ title: 'Organizacja wydarzeń naukowo-technicznych', desc: 'Współpraca przy tworzeniu paneli dyskusyjnych, konferencji oraz specjalistycznych seminariów.' },
				],
			},
			{
				title: 'Dla studentów i doktorantów',
				items: [
					{ title: 'Opieka nad pracami inżynierskimi, magisterskimi i doktorskimi', desc: 'Prowadzenie tematów ukierunkowanych na realne wyzwania technologiczne i środowiskowe.' },
					{ title: 'Wspólne publikacje i projekty B+R', desc: 'Włączanie studentów w realizację badań aplikacyjnych oraz przygotowywanie artykułów naukowych.' },
					{ title: 'Udział w kołach naukowych i grantach', desc: 'Merytoryczne wsparcie w pozyskiwaniu grantów studenckich oraz w działaniach sekcji badawczych.' },
					{ title: 'Przygotowanie do pracy w biznesie', desc: 'Nauka przekładania wyników badań na język korzyści biznesowych i przygotowywania analiz komercyjnych.' },
					{ title: 'Łączenie z partnerami przemysłowymi', desc: 'Pomoc w znalezieniu staży, praktyk lub tematów prac w firmach współpracujących z otoczeniem gospodarczym.' },
				],
			},
			{
				title: 'Dla przedsiębiorstw',
				items: [
					{ title: 'Opinie, ekspertyzy, analizy i audyty', desc: 'Oceny merytoryczne technologii oraz audyty procesowe pozwalające zidentyfikować wyzwania i optymalizować koszty.' },
					{ title: 'Koncepcje zagospodarowania biomasy, w tym odpadów i produktów ubocznych, bioodpadów komunalnych i osadów ściekowych', desc: 'Opracowywanie kompleksowych dokumentacji zgodnie z oczekiwaniami Zamawiającego.' },
					{ title: 'Badania z zakresu odpadów, biomasy i biogazu', desc: 'Badania właściwości substratów oraz testy wydajnościowe na potrzeby instalacji biogazowych i kompostowni.' },
					{ title: 'Projekty B+R dla przemysłu', desc: 'Tworzenie i wdrażanie innowacji procesowych oraz produktowych we współpracy z sektorem gospodarczym.' },
					{ title: 'Przygotowanie warstwy naukowej / technologicznej / środowiskowej do wniosków i innych dokumentów', desc: 'Opracowywanie uzasadnienia merytorycznego do aplikacji o dofinansowania oraz dokumentacji środowiskowej.' },
					{ title: 'Recenzje i oceny merytoryczne', desc: 'Przygotowywanie profesjonalnych ocen prac naukowych, wniosków grantowych oraz opracowań technologicznych.' },
					{ title: 'Organizacja wydarzeń naukowo-technicznych', desc: 'Współpraca przy tworzeniu paneli dyskusyjnych, konferencji oraz specjalistycznych seminariów.' },
					{ title: 'Szkolenia i warsztaty dla Kadry JST i Spółek', desc: 'Praktyczne szkolenia z zakresu m.in. metod przetwarzania odpadów i biomasy.' },
					{ title: 'Doradztwo', desc: 'Bieżące konsultacje, wsparcie decyzyjne przy inwestycjach oraz stała opieka merytoryczna nad realizowanymi projektami.' },
				],
			},
		],
		cta: 'Przejdź do kontaktu',
		note: 'W zależności od rodzaju, skali i specyfiki poszczególne projekty i działania realizowane są w ramach współpracy instytucjonalnej (uczelni macierzystej) lub w ramach indywidualnej praktyki eksperckiej.',
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
	knowledge: {
		heading: 'Baza wiedzy',
		metaTitle: 'Baza wiedzy – Wojciech Czekała',
		description:
			'Artykuły prof. Wojciecha Czekały o gospodarce odpadami, energetyce, odnawialnych źródłach energii, biogazie, biopaliwach i gospodarce o obiegu zamkniętym.',
		empty: 'Pierwsze artykuły pojawią się wkrótce.',
		back: 'Wszystkie artykuły',
		listLabel: 'Artykuły',
		readMore: 'Czytaj dalej',
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
	nav: { about: 'About me', glossary: 'Eco-glossary', collab: 'Collaboration', knowledge: 'Knowledge base', contact: 'Contact' },
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
			'hours of lectures and training',
			'peer-reviewed works',
			'articles in JCR-indexed journals',
			'talks at scientific and industry conferences',
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
		lead: 'I have authored or co-authored more than 200 scientific publications, including more than 80 in journals indexed in the Journal Citation Reports (the so-called Philadelphia list).',
		rankYears: '2022–2025',
		rankText:
			'From 2022 to 2025 I was ranked among the world’s top 2% most influential scientists by citations in the scientific literature. The ranking is prepared by Stanford University in cooperation with Elsevier.',
		journalsHeading: 'The most prestigious journals I have published in',
		booksHeading: 'Books',
		booksIntro: 'My international work is reflected in, among others, three books.',
		bookRoles: ['Author', 'Editor and co-author of four chapters', 'Editor and co-author of five chapters'],
		ecExpertLabel: 'European Commission',
		ecExpert: 'I serve as an expert for the European Commission.',
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
	collab: {
		heading: 'Collaboration',
		lead: 'An effective energy transition and modern waste management require a close link between sound scientific knowledge and market practice.',
		text: 'In my work I combine research experience with technology consulting, supporting the development of innovative projects in bioenergy, biogas and biomass management.',
		invite: 'I welcome collaboration with members of the academic community, students, and partners from the business and local government sectors.',
		intro: 'Below are the main areas in which I share my knowledge and expert experience.',
		countForms: { one: 'area', other: 'areas' },
		groups: [
			{
				title: 'For researchers',
				items: [
					{ title: 'Scientific publications', desc: 'Co-authoring research articles in high-impact journals.' },
					{ title: 'R&D projects', desc: 'Partnering in applications for national and international grants and carrying the projects through.' },
					{ title: 'Research internships and study visits', desc: 'Organising and taking part in knowledge exchanges, industrial internships and study visits to research centres.' },
					{ title: 'Research–industry consortia', desc: 'Initiating and building interdisciplinary teams that bring science together with business partners.' },
					{ title: 'Reviews and expert assessments', desc: 'Preparing professional assessments of scientific work, grant applications and technology studies.' },
					{ title: 'Science and technology events', desc: 'Helping to create panel discussions, conferences and specialist seminars.' },
				],
			},
			{
				title: 'For students and PhD candidates',
				items: [
					{ title: 'Supervision of engineering, master’s and doctoral theses', desc: 'Topics focused on real technological and environmental challenges.' },
					{ title: 'Joint publications and R&D projects', desc: 'Involving students in applied research and in writing scientific articles.' },
					{ title: 'Student research groups and grants', desc: 'Substantive support in winning student grants and in the work of research sections.' },
					{ title: 'Preparing for work in business', desc: 'Learning to translate research results into business benefits and to prepare commercial analyses.' },
					{ title: 'Connecting with industry partners', desc: 'Help in finding internships, placements or thesis topics in companies working with the business community.' },
				],
			},
			{
				title: 'For companies',
				items: [
					{ title: 'Opinions, expert reports, analyses and audits', desc: 'Technology assessments and process audits that identify challenges and optimise costs.' },
					{ title: 'Biomass management concepts, including waste and by-products, municipal bio-waste and sewage sludge', desc: 'Comprehensive documentation prepared to the client’s requirements.' },
					{ title: 'Waste, biomass and biogas testing', desc: 'Analysis of substrate properties and performance tests for biogas plants and composting facilities.' },
					{ title: 'R&D projects for industry', desc: 'Developing and implementing process and product innovations together with businesses.' },
					{ title: 'Scientific, technological and environmental input for applications and other documents', desc: 'Preparing the substantive justification for funding applications and environmental documentation.' },
					{ title: 'Reviews and expert assessments', desc: 'Preparing professional assessments of scientific work, grant applications and technology studies.' },
					{ title: 'Science and technology events', desc: 'Helping to create panel discussions, conferences and specialist seminars.' },
					{ title: 'Training and workshops for local government staff and municipal companies', desc: 'Practical training on, among other things, waste and biomass processing methods.' },
					{ title: 'Advisory', desc: 'Ongoing consultations, decision support for investments and continuous expert supervision of projects.' },
				],
			},
		],
		cta: 'Go to contact',
		note: 'Depending on their type, scale and specifics, individual projects and activities are carried out either through institutional cooperation (my home university) or as part of my individual expert practice.',
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
	knowledge: {
		heading: 'Knowledge base',
		metaTitle: 'Knowledge base – Wojciech Czekała',
		description:
			'Articles by Prof. Wojciech Czekała on waste management, energy, renewable energy sources, biogas, biofuels and the circular economy.',
		empty: 'The first articles are coming soon.',
		back: 'All articles',
		listLabel: 'Articles',
		readMore: 'Read more',
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
