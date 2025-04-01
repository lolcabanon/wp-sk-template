const host =
  process.env.WRAP_TARGET === 'prod'
    ? 'https://example.com' // your target domain for production builds
    : 'https://wp.dev.local'; // your test domain, or maybe localhost

/**
 *
 * @param {import("@sveltejs/kit").Config} config
 * @param {'' | `/${string}`} base
 */
export const setPath = (config, base) => {
  // handle wordpress url structure
  if (process.env.NODE_ENV === 'production') {
    config.kit.paths = {
      base,
      assets: host + base,
      relative: false
    };
  }

  return config;
};
