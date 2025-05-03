import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { ALL_POSTS_QUERYResult } from '@/sanity/types'; // Import the type

// shadcn/ui
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

// Define the props type
interface CardBlogProps {
  post: ALL_POSTS_QUERYResult[number]; // Use the element type of the array
}

const CardBlog: React.FC<CardBlogProps> = ({ post }) => {
  // Apply the props type
  return (
    <Link key={post._id} href={`/blog/${post.slug!.current}`} className="group">
      <Card className="bg-background/40 hover:bg-background/60 transition rounded-lg shadow-none border-0 flex flex-col gap-2 py-0">
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

        <CardContent className="px-0">
          <h3 className="text-white text-lg font-semibold leading-snug">
            {post.title}
          </h3>
          <p
            className={`font-elysium-text-body-l-elysium text-projects-colorstylesdisable-text text-left mt-2 text-sm line-clamp-3`}
          >
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-0 mt-auto">
          <div className="flex items-center gap-3">
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).width(40).height(40).url()}
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
  );
};

export default CardBlog;
