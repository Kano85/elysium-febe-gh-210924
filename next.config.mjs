// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  env: {
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
  },
};

export default nextConfig;
