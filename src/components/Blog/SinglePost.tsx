//src/components/Blog/SinglePost.tsx

import { POSTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image'; // Correct import path for urlFor

interface SinglePostProps {
  listofposts: POSTS_QUERYResult;
}

const SinglePost = ({ listofposts }: SinglePostProps) => {
  const { title, mainImage, excerpt, author, publishedAt, slug } = listofposts;

  return (
    <div className="group relative overflow-hidden rounded-sm shadow-one duration-300 hover:shadow-two bg-dark hover:shadow-gray-dark">
      <Link
        href={`/blog/${slug?.current}`}
        className="relative block aspect-[37/22] w-full"
      >
        {mainImage && mainImage.asset && (
          <Image
            src={urlFor(mainImage).url()}
            alt={mainImage.alt ?? 'ListOfPost Image'}
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
          {author && author.image && author.image.asset && (
            <div className="mr-5 flex items-center border-r pr-5 border-white border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={urlFor(author.image).url()}
                    alt={author.name}
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
            <h4 className="mb-1 text-sm font-medium text-white">Date</h4>
            <p className="text-xs text-body-color-dark">
              {publishedAt
                ? new Date(publishedAt).toLocaleDateString()
                : 'No date'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
