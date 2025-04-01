// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		wp: WordPress;
	}

	declare let wp: WordPress;
}

export {};

/**
 * TODO: wp object annotation
 *
 * https://dev.to/kelin1003/utilising-wordpress-media-library-for-uploading-files-2b01
 * https://github.com/ericandrewlewis/wp-media-javascript-guide
 * https://webkul.com/blog/how-to-use-wordpress-media-upload-in-plugin-theme/
 */
