// Add this line at the top of your file
export const dynamic = 'force-dynamic';

import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import PostTitle from '../../../components/PostTitle';
import MoreStories from '../../../components/MoreStories';

import { sanityFetch } from '../../../sanity/lib/client';
import { POST_QUERY, ALL_POSTS_QUERY } from '../../../sanity/lib/queries';

import { notFound } from 'next/navigation';
import { POSTS_QUERYResult } from '../../../sanity/types'; // Import POSTS_QUERYResult

interface Params {
  params: {
    slug: string;
  };
}

// Extend POSTS_QUERYResult and add the author field
interface Post extends POSTS_QUERYResult {
  author: {
    name: string;
    image?: string | null;
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = params;

  const post = await sanityFetch<Post>({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    return notFound();
  }

  const morePosts = await sanityFetch<POSTS_QUERYResult[]>({
    query: ALL_POSTS_QUERY,
    params: {},
  });

  const otherPosts = morePosts.filter(
    (otherPost) => otherPost.slug?.current !== slug
  );

  return (
    <article className="mx-auto max-w-4xl px-6 lg:px-10">
      <header className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tighter md:text-4xl md:tracking-tighter">
        <a className="hover:underline" href="/">
          Blog
        </a>
      </header>

      <PostTitle>{post.title}</PostTitle>

      <PostHeader
        title={post.title ?? 'Untitled'}
        mainImage={post.mainImage}
        publishedAt={post.publishedAt ?? ''}
        author={post.author}
      />

      <PostBody content={post.body} />

      {otherPosts.length > 0 && <MoreStories posts={otherPosts} />}
    </article>
  );
}
