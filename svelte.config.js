import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
		  pages: "build",
		  fallback: "index.html",
		}),
		alias: {
		  $lib: "./src/lib",
		  $data: "./src/data",
		},
		paths: {
		  base: process.argv.includes("dev") ? "" : "/StudioMysteryWebsite", //process.env.BASE_PATH,
		},
		//outDir: "build",
	  },

	extensions: ['.svelte', '.svx']
};

export default config;
