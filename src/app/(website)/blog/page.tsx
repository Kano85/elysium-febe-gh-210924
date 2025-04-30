'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getFullLanguageName } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import useFetchPosts from '@/hooks/useFetchPosts';

// shadcn/ui
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const BlogPage = () => {
  const { i18n } = useTranslation();
  const langFull = getFullLanguageName((i18n.language || 'en') as any);
  const { posts, isLoading, error } = useFetchPosts(langFull);

  if (isLoading) return <div className="py-32 text-center">Loading…</div>;
  if (error)
    return <div className="py-32 text-center text-red-500">{error}</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-24">
      <h1 className="text-accent-400 font-serif text-4xl lg:text-5xl text-center mb-2">
        Insights from Our Specialists
      </h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        Discover personalized investment strategies to achieve your financial
        goals
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {posts
          .filter((post) => post.slug?.current)
          .map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug!.current}`}
              className="group"
            >
              <Card className="bg-background/40 hover:bg-background/60 transition rounded-xl shadow-none border-0 flex flex-col">
                {post.mainImage?.asset?.url && (
                  <CardHeader className="p-0">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt ?? post.title ?? ''}
                      width={800}
                      height={450}
                      className="aspect-[16/9] w-full object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform"
                    />
                  </CardHeader>
                )}

                <CardContent className="p-5">
                  <h3 className="text-white text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-5 pt-0 mt-auto">
                  <div className="flex items-center gap-3">
                    {post.author?.image && (
                      <Image
                        src={urlFor(post.author.image)
                          .width(40)
                          .height(40)
                          .url()}
                        alt={post.author.name ?? ''}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <span className="block text-sm font-semibold text-white">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString()
                          : 'No date'}
                      </span>
                      {post.author?.name && (
                        <span className="block text-xs text-muted-foreground">
                          {post.author.name}
                        </span>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default BlogPage;
