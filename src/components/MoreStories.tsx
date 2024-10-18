'use client';
import React from 'react';
import PostPreview from './PostPreview';
import { POSTS_QUERYResult } from '../sanity/types';

interface MoreStoriesProps {
  posts: POSTS_QUERYResult[];
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Weitere Beiträge
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-32">
        {posts.map(
          (post) =>
            post.slug && (
              <PostPreview
                key={post.slug.current}
                title={post.title}
                mainImage={post.mainImage}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            )
        )}
      </div>
    </section>
  );
}
