/** @type {import('next').NextConfig} */

/**
 * The three golf pools live in their own Vercel projects (one per pool, so no
 * pool's rosters or money are ever in another's bundle) but are served under
 * donofr.io paths.
 *
 * Each pool app sets a matching `basePath` in its own next.config, so its URLs
 * and assets are already under the prefix — these rewrites map 1:1 with no path
 * rewriting. If you change a prefix here you must change that app's basePath to
 * match, or every asset 404s.
 */
const POOLS = [
  { path: 'themen', host: 'https://golfmajors-themen.vercel.app' },
  { path: '4way', host: 'https://golfmajors-fourway.vercel.app' },
  { path: 'davemike', host: 'https://golfmajors-davemike.vercel.app' },
];

const nextConfig = {
  images: {
    unoptimized: false,
  },

  async rewrites() {
    // Two rules per pool, deliberately.
    //
    // A single `/themen/:path*` looks equivalent but causes a redirect loop:
    // `:path*` matches zero segments, so the bare /themen renders a destination
    // of `/themen/` WITH a trailing slash, which Next then 308s back to
    // /themen, which matches again. `:path+` requires at least one segment, so
    // the bare path is handled by its own exact rule and never gains a slash.
    //
    // There are no case-alias redirects here because Next matches these sources
    // case-insensitively already — /4Way and /DaveMike hit these same rules. An
    // explicit /THEMEN -> /themen redirect is what triggered the loop above.
    return POOLS.flatMap(({ path, host }) => [
      { source: `/${path}`, destination: `${host}/${path}` },
      { source: `/${path}/:path+`, destination: `${host}/${path}/:path+` },
    ]);
  },
};

module.exports = nextConfig;
