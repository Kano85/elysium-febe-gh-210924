// src/components/Blog/ListOfPost.tsx
'use client';

import React from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/Common/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/Common/card';
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

const categories = ['economy', 'finance', 'politics'];

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
      className="bg-bg-color-dark lg:py-28 md:py-20 py-16"
    >
      <div className="container">
        <SectionTitle
          title={t('recent_posts')}
          paragraph={t('explore_recent_articles')}
          center
        />
        <Carousel
          className="mx-auto w-full xl:max-w-[72rem]"
          opts={{ align: 'start' }}
        >
          <CarouselContent>
            {posts.map((post) => {
              const randomCategory =
                categories[Math.floor(Math.random() * categories.length)];

              return (
                <CarouselItem
                  key={post._id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Link
                    href={`/blog/${post.slug?.current}`}
                    className="group block h-full w-full"
                    aria-label="Read full article"
                  >
                    <Card
                      className="relative flex h-[426px] w-full items-center justify-center bg-cover bg-bottom transition-transform group-hover:scale-98"
                      style={{
                        backgroundImage: post.mainImage?.asset
                          ? `url('${urlFor(post.mainImage).url()}')`
                          : 'none',
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-black opacity-20 transition-opacity group-hover:opacity-30" />
                      <CardContent className="absolute z-10 flex h-full flex-col items-start justify-between px-5 py-7">
                        <CardHeader>
                          <Badge variant="outline">{randomCategory}</Badge>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-8">
                          <CardTitle className="text-white">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="flex w-full flex-row items-center justify-between gap-1 text-white">
                            <div className="date font-medium tabular-nums">
                              {post.publishedAt
                                ? formatDate(post.publishedAt)
                                : t('no_date')}
                            </div>
                            <div className="author font-medium tabular-nums">
                              {post.author?.name || t('unknown_author')}
                            </div>
                          </CardDescription>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4 flex h-8 w-8 items-center justify-center rounded-none bg-gradient-to-r from-purple-500 to-pink-500 text-white xl:-left-12 xl:h-12 xl:w-12" />
          <CarouselNext className="right-4 flex h-8 w-8 items-center justify-center rounded-none bg-gradient-to-l from-purple-500 to-pink-500 text-white xl:-right-12 xl:h-12 xl:w-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ListOfPost;
