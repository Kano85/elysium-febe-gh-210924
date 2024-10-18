'use client';
import Link from 'next/link';
import Image from 'next/image';
import { POSTS_QUERYResult } from '../sanity/types';
import { urlFor } from '../sanity/lib/image';

interface ListOfPostsProps {
  posts: POSTS_QUERYResult[] | null;
}

export default function ListOfPosts({ posts }: ListOfPostsProps) {
  if (!posts) {
    return <p>No posts available at the moment. Please check back later!</p>;
  }

  return (
    <section className="px-6 lg:px-10">
      <h2 className="mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Aktuelle Beiträge
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug?.current ?? post._id} className="mb-10">
            <Link href={`/posts/${post.slug?.current}`}>
              {post.mainImage?.asset && (
                <div className="relative mb-6 w-full aspect-[1240/540]">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt ?? 'Post Image'}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold">{post.title}</h3>
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt ?? '').toLocaleDateString('de-DE')}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
