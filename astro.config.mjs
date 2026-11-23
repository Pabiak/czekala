// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wojciechczekala.pl',
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Newsreader',
			// Tailwind's --font-serif token points at this variable (src/styles/global.css).
			cssVariable: '--font-newsreader',
			weights: [400],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['Georgia', 'serif'],
			display: 'swap',
		},
		{
			provider: fontProviders.google(),
			name: 'Hanken Grotesk',
			cssVariable: '--font-hanken',
			weights: ['400 600'],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['system-ui', 'sans-serif'],
			display: 'swap',
		},
	],
});
