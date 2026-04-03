import { createClient } from 'next-sanity';
import { isSanityConfigured, sanityEnv } from '@/lib/sanity/env';

export const sanityClient = isSanityConfigured()
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: false,
      token: sanityEnv.readToken || undefined,
      perspective: 'published',
    })
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, string> = {}) {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params, {
    cache: 'no-store',
    next: { revalidate: 0 },
  });
}
