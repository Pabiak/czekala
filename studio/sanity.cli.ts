import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
	api: {
		projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
		dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
	},
	// `pnpm deploy` publishes the editor at https://<studioHost>.sanity.studio
	studioHost: process.env.SANITY_STUDIO_HOST ?? 'wojciechczekala',
	deployment: { appId: 'v2qxbr1sfy36f0hqxbahn9od', autoUpdates: true },
});
