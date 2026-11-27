import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { plPLLocale } from '@sanity/locale-pl-pl';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

export default defineConfig({
	name: 'default',
	title: 'Wojciech Czekała – baza wiedzy',
	projectId,
	dataset,
	plugins: [
		structureTool({
			// One clear entry point for a non-technical editor: the list of knowledge-base articles.
			structure: (S) =>
				S.list()
					.title('Treści')
					.items([S.documentTypeListItem('post').title('Baza wiedzy – artykuły')]),
		}),
		plPLLocale(),
	],
	schema: { types: schemaTypes },
	document: {
		// Nothing but posts can be created from the "+" menu.
		newDocumentOptions: (prev) => prev.filter((item) => item.templateId === 'post'),
	},
});
