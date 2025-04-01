import adapter from 'sveltekit-adapter-wordpress-shortcode';

import { sveltePreprocess } from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { setPath } from '../sharedConfig.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [sveltePreprocess(), vitePreprocess()],

	kit: {
		alias: {
			$shared: '../shared/*'
		},

		typescript: {
			config(config) {
				config.include.push('../../shared/**/*');
				return config;
			}
		},

		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			indexPath: 'index.php',
			shadow: true,
			shortcode: 'my-shortcode',
			prefix: 'client_my_plugin',

			renderHead: (head) => {
				return [
					// default modulepreload
					[...head.querySelectorAll(`link[rel="modulepreload"]`)].map(
						(element) => element.outerHTML
					),
					// also include styles to avoid FOUC
					[...head.querySelectorAll(`link[rel="stylesheet"]`)].map((element) => element.outerHTML)
				]
					.flat()
					.join('');
			},

			renderBody: (body) => body.innerHTML
		}),

		embedded: true
	}
};

const base = '/wp-content/plugins/my-plugin/client/build';

setPath(config, base);

export default config;
