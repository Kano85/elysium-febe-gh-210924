'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Slug } from '../sanity/types';

interface PostPreviewProps {
  title: string | null;
  mainImage: {
    asset?: {
      url: string;
    };
  } | null;
  excerpt: string | null;
  slug: Slug | null;
}

export default function PostPreview({
  title,
  mainImage,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      {mainImage && (
        <div className="relative mb-5 w-full aspect-[1240/540]">
          <Image
            src={mainImage.asset?.url ?? ''}
            alt={title ?? 'Post Image'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug?.current}`}>
          <span className="hover:underline">{title}</span>
        </Link>
      </h3>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
}
