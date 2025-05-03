// src/app/blog/[slug]/page.tsx

// import SharePost from '@/components/Blog/SharePost';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { client, sanityFetch } from '../../../../sanity/lib/client';
import { POST_QUERY } from '../../../../sanity/lib/queries';
import { POST_QUERYResult, Slug } from '../../../../sanity/types';
import RelatedPostsSection from '../../../../components/Blog/RelatedPostsSection';
import Footer from '@/components/Footer';
// Define the Props type exactly like in the Sanity documentation example
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current)]{ slug }`;
  const posts = await client.fetch<{ slug: Slug | null }[]>(query);

  return posts
    .filter((post) => post.slug?.current)
    .map((post) => ({
      slug: post.slug!.current,
    }));
}

const ListOfPostDetailsPage = async (props: Props) => {
  // Await the params Promise before accessing slug
  const params = await props.params;
  const { slug } = params;

  const post: POST_QUERYResult = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    tags: [`post-${slug}`],
  });

  if (!post || !post.slug?.current) {
    notFound();
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left mb-4">
                  {post.title}
                </h2>
                {/* Categories and other metadata below author/date */}
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  {/* Keep categories section */}
                  <div className="mb-5">
                    {post.categories?.map((category) => (
                      <a
                        key={category.title}
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white mr-2 mb-2" // Added margin
                      >
                        {category.title}
                      </a>
                    ))}
                  </div>
                  {/* Add any other metadata here if needed */}
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.mainImage?.asset?.url && (
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={
                            post.mainImage.alt ||
                            post.title ||
                            'Blog Post Image'
                          }
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )}
                  <div className="mb-10">
                    {post.body?.map((block) => {
                      if (block._type !== 'block' || !block.children)
                        return null;
                      return (
                        <p
                          key={block._key}
                          className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed mb-4"
                        >
                          {block.children.map((child) => child.text)}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-10">
        <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
        <RelatedPostsSection
          currentSlug={slug}
          categories={
            post.categories
              ?.map((c) => c.title || '')
              .filter((t): t is string => t !== '') || []
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default ListOfPostDetailsPage;
