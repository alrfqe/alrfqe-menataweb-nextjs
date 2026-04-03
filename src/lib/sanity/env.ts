export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2025-08-15',
  readToken: process.env.SANITY_API_READ_TOKEN ?? '',
  studioBasePath: '/studio',
} as const;

export function isSanityConfigured() {
  return Boolean(sanityEnv.projectId && sanityEnv.dataset);
}
