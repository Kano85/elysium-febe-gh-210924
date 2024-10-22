'use client';

import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { client } from '../../sanity/lib/client';
import { ALL_POSTS_QUERY } from '../../sanity/lib/queries';

import { Blog } from '@/types/blog';
import { urlFor } from '../../sanity/lib/image'; // Import the urlFor function

const BlogPage: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [SingleBlog, setSingleBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await client.fetch<Blog[]>(ALL_POSTS_QUERY);

      if (blogs && Array.isArray(blogs)) {
        const formattedBlogs = blogs.map((data) => ({
          _id: data._id,
          title: data.title,
          excerpt: data.excerpt,
          mainImage: data.mainImage ? urlFor(data.mainImage).url() : '', // Use urlFor to format the image URL
          author: {
            name: data.author?.name ?? '',
            image: data.author?.image ? urlFor(data.author.image).url() : '', // Use urlFor to format the author image URL
            designation: '', // Since 'designation' isn't available, set it to an empty string
          },
          tags: [], // 'tags' isn't available, so set it to an empty array
          publishedAt: data.publishedAt ?? '',
          slug: data.slug,
        }));
        setBlogData(formattedBlogs);
      }
    };

    fetchBlogs();

    // Dynamically import SingleBlog component
    import('@/components/Blog/SingleBlog').then((module) => {
      setSingleBlog(() => module.default);
    });
  }, []);

  if (!SingleBlog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog._id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <ul className="flex items-center">
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  1
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  2
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  3
                </a>
              </li>
              <li className="mx-1">
                <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                  ...
                </span>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  12
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
