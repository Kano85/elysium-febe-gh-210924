'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getFullLanguageName } from '@/lib/utils';
import useFetchPosts from '@/hooks/useFetchPosts';
import RelatedPost from './RelatedPost';

type Props = {
  currentSlug: string;
  categories: string[];
};

const RelatedPostsSection: React.FC<Props> = ({ currentSlug, categories }) => {
  const { i18n } = useTranslation();
  const langFull = getFullLanguageName(i18n.language || 'en');
  const primaryCategory = categories[0] || '';

  // Fetch posts in the primary category
  const { posts: postsInCategory, isLoading: isLoadingCategory } =
    useFetchPosts(primaryCategory);
  // Fetch posts in the current language (for fallback)
  const { posts: postsInLanguage, isLoading: isLoadingLanguage } =
    useFetchPosts(langFull);

  const isLoading = isLoadingCategory || isLoadingLanguage;
  if (isLoading) return <p className="text-center">Loading related posts…</p>;

  // Try filtering posts in the same category first
  let related = postsInCategory
    .filter((p) => p.slug?.current && p.slug.current !== currentSlug)
    .slice(0, 3);

  // If no related posts found in the same category, fall back to any posts in the same language
  if (related.length === 0) {
    related = postsInLanguage
      .filter((p) => p.slug?.current && p.slug.current !== currentSlug)
      .slice(0, 3);
  }

  if (related.length === 0)
    return (
      <p className="text-center text-body-color">No related posts found.</p>
    );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {related.map((rp) => (
        <RelatedPost
          key={rp._id}
          image={rp.mainImage?.asset?.url || ''}
          slug={`/blog/${rp.slug!.current}`}
          title={rp.title || ''}
          date={
            rp.publishedAt
              ? new Date(rp.publishedAt).toLocaleDateString()
              : 'No date'
          }
        />
      ))}
    </div>
  );
};

export default RelatedPostsSection;
