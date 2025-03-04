//src/sanity/lib/client.ts

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studio', // Add this line - points to your Studio location
  },
});

interface FetchParams {
  query: string;
  params?: Record<string, unknown>;
}

export const sanityFetch = async <T>({
  query,
  params = {},
  tags = [],
}: FetchParams & { tags?: string[] }): Promise<T> => {
  return client.fetch<T>(query, params, {
    cache: 'force-cache',
    next: { tags },
  });
};
