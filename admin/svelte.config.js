import adapter from 'sveltekit-adapter-wordpress-admin';

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
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			indexPath: 'index.php',
			shadow: false,
			menuOptions: {
				page_title: 'My plugin',
				menu_title: 'My plugin',
				icon: 'dashicons-lightbulb',
				slug: 'my-plugin'
			},
			prefix: 'admin_my_plugin',

			renderHead: (head) =>
				[...head.querySelectorAll(`link[rel="modulepreload"]`)]
					.map((element) => element.outerHTML)
					.join(''),

			renderBody: (body) => body.innerHTML
		}),

		embedded: true
	}
};

const base = '/wp-content/plugins/my-plugin/admin/build';

setPath(config, base);

export default config;
