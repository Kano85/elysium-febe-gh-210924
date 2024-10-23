'use client';

import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { client } from '../../sanity/lib/client';
import { ALL_POSTS_QUERY } from '../../sanity/lib/queries';
import { Blog } from '@/types/blog';
import SingleBlog from '@/components/Blog/SingleBlog'; // Direct import

const BlogPage: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await client.fetch<Blog[]>(ALL_POSTS_QUERY);
      if (blogs && Array.isArray(blogs)) {
        setBlogData(blogs);
      }
    };
    fetchBlogs();
  }, []);

  if (blogData.length === 0) {
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
                <SingleBlog blog={blog} /> {/* Use SingleBlog component */}
              </div>
            ))}
          </div>
          {/* Pagination code (if any) */}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
