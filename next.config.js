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

/** Capitalised spellings people actually type, redirected to the canonical lowercase. */
const ALIASES = {
  themen: ['TheMen', 'Themen', 'THEMEN'],
  '4way': ['4Way', '4WAY'],
  davemike: ['DaveMike', 'Davemike', 'DAVEMIKE'],
};

const nextConfig = {
  images: {
    unoptimized: false,
  },

  async rewrites() {
    // `:path*` matches zero or more segments, so this covers the bare /themen
    // as well as everything beneath it.
    return POOLS.map(({ path, host }) => ({
      source: `/${path}/:path*`,
      destination: `${host}/${path}/:path*`,
    }));
  },

  async redirects() {
    return Object.entries(ALIASES).flatMap(([canonical, variants]) =>
      variants.map((variant) => ({
        source: `/${variant}/:path*`,
        destination: `/${canonical}/:path*`,
        // Deliberately temporary: a 308 gets cached hard by browsers and is
        // painful to undo if these paths ever move.
        permanent: false,
      })),
    );
  },
};

module.exports = nextConfig;
