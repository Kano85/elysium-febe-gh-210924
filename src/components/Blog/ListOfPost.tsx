// src/components/Blog/ListOfPost.tsx
'use client';

import React from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface ListOfPostProps {
  posts: ALL_POSTS_QUERYResult;
}

const ListOfPost: React.FC<ListOfPostProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available at the moment. Please check back later!</p>;
  }

  return (
    <section
      id="listofposts"
      className="bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Nuestras últimas publicaciones"
          paragraph="Explora los artículos más recientes de nuestro blog..."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.map((post) => {
            const {
              _id,
              title,
              mainImage,
              excerpt,
              author,
              publishedAt,
              slug,
            } = post;

            return (
              <div key={_id} className="w-full">
                <div className="group relative overflow-hidden rounded-sm shadow-one duration-300 hover:shadow-two bg-dark hover:shadow-gray-dark">
                  <Link
                    href={`/blog/${slug?.current}`}
                    className="relative block aspect-[37/22] w-full"
                  >
                    {mainImage?.asset && (
                      <Image
                        src={urlFor(mainImage).url()}
                        alt={mainImage.alt ?? 'Post Image'}
                        fill
                      />
                    )}
                  </Link>
                  <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                      <Link
                        href={`/blog/${slug?.current}`}
                        className="mb-4 block text-xl font-bold text-white hover:text-primary sm:text-2xl"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="mb-6 border-b pb-6 text-base font-medium text-body-color-dark border-white border-opacity-10">
                      {excerpt}
                    </p>
                    <div className="flex items-center">
                      {author?.image?.asset && (
                        <div className="mr-5 flex items-center border-r pr-5 border-white border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                          <div className="mr-4">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src={urlFor(author.image).url()}
                                alt={author.name || 'Author'}
                                fill
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <h4 className="mb-1 text-sm font-medium text-white">
                              By {author.name}
                            </h4>
                          </div>
                        </div>
                      )}
                      <div className="inline-block">
                        <h4 className="mb-1 text-sm font-medium text-white">
                          Date
                        </h4>
                        <p className="text-xs text-body-color-dark">
                          {publishedAt
                            ? new Date(publishedAt).toLocaleDateString()
                            : 'No date'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListOfPost;
