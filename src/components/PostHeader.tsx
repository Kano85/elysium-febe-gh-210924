'use client';

import { POSTS_QUERYResult } from '../sanity/types';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';

interface PostHeaderProps {
  title: string;
  mainImage?: POSTS_QUERYResult['mainImage'] | null;
  publishedAt: string;
  author: {
    name: string;
    image?: string | null;
  };
}
export default function PostHeader({
  title,
  mainImage,
  publishedAt,
  author,
}: PostHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      {mainImage?.asset && (
        <div className="relative mb-6 w-full aspect-[1240/540]">
          <Image
            src={urlFor(mainImage).url()}
            alt={mainImage.alt ?? 'Post Image'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <p>Published at: {new Date(publishedAt).toLocaleDateString()}</p>
      <p>Author: {author.name}</p>
    </header>
  );
}
