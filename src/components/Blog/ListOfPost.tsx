'use client';

import type React from 'react';
import type { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/Common/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Common/carousel';

interface ListOfPostProps {
  posts: ALL_POSTS_QUERYResult;
}

const ListOfPost: React.FC<ListOfPostProps> = ({ posts }) => {
  const { t } = useTranslation();

  if (!posts || posts.length === 0) {
    return <p>{t('no_posts_available')}</p>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  };

  return (
    <section id="listofposts" className="bg-[#1e2123] lg:py-28 md:py-20 py-16">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-[#ffb800] text-4xl md:text-5xl font-light mb-4">
            {t('recent_posts')}
          </h2>
          <p className="text-[#9d9b94]">{t('explore_recent_articles')}</p>
        </div>

        <div className="relative">
          <Carousel
            className="mx-auto w-full xl:max-w-[72rem]"
            opts={{ align: 'start' }}
          >
            <CarouselContent className="gap-24">
              {posts.map((post) => {
                return (
                  <CarouselItem
                    key={post._id}
                    className="basis-full lg:basis-1/4"
                  >
                    <Link
                      href={`/blog/${post.slug?.current}`}
                      className="block h-full w-full"
                      aria-label="Read full article"
                    >
                      <div className="relative rounded-lg overflow-hidden h-[448px] min-w-[208px] group">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: post.mainImage?.asset
                              ? `url('${urlFor(post.mainImage).url()}')`
                              : 'none',
                          }}
                        ></div>
                        <div className="absolute top-4 left-4 z-20">
                          <Badge
                            variant="outline"
                            className="text-white text-sm"
                          >
                            {post.category?.title || 'Finance'}
                          </Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h3 className="text-white text-xl font-medium mb-6">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm">
                              {post.author?.name || t('unknown_author')}
                            </span>
                            <span className="text-[#9d9b94] text-sm ml-auto">
                              {post.publishedAt
                                ? formatDate(post.publishedAt)
                                : t('no_date')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center shadow-lg bg-gradient-to-r from-amber-400 to-yellow-500 rounded-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center shadow-lg bg-gradient-to-r from-amber-400 to-yellow-500 rounded-none" />
          </Carousel>
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/blog"
            className="text-[#d9d9d9] hover:text-[#ffb800] transition-colors"
          >
            {t('discover_more')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListOfPost;
