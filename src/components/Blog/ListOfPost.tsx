'use client';

import type React from 'react';
import type { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SectionTitle from '@/components/Common/SectionTitle';

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
    <section
      id="listofposts"
      className="flex flex-col w-full gap-[48px] px-8 pb-[30px] pt-[90px] lg:px-24 lg:pt-40 lg:pb-[80px]  sm:pt-[90px] sm:pb-[30px] "
    >
      <SectionTitle
        title={t('blogkey.hero.title')}
        paragraph={t('blogkey.hero.paragraph')}
        mb="mb-0"
        buttonText={t('discover_more')}
        buttonHref="/blog"
      />

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <Carousel className="w-screen" opts={{ align: 'start' }}>
          <CarouselContent className="gap-24">
            {posts.map((post) => {
              return (
                <CarouselItem
                  key={post._id}
                  className="basis-full lg:basis-[213px]"
                >
                  <Link
                    href={`/blog/${post.slug?.current}`}
                    className="block h-full w-full"
                    aria-label="Read full article"
                  >
                    <div className="relative rounded-lg overflow-hidden h-[520px] min-w-[243px] group">
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
                        <Badge variant="default" className="text-white text-sm">
                          {post.category?.title || 'Finance'}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <div className="elysium-body-s text-white font-medium mb-6">
                          {post.title}
                        </div>
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
          <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center shadow-lg bg-gradient-to-r from-gold-light to-gold-dark  rounded" />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center shadow-lg bg-gradient-to-r from-gold-light to-gold-dark  rounded" />
        </Carousel>
      </div>
    </section>
  );
};

export default ListOfPost;
