import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to fetch the latest data
});

interface FetchParams {
  query: string;
  params?: Record<string, unknown>;
}

export const sanityFetch = async <T>({
  query,
  params = {},
}: FetchParams): Promise<T> => {
  const data = await client.fetch<T>(query, params);
  return data;
};
