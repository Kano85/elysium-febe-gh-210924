'use client';
// src/components/Blog/index.tsx
import { useEffect, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { sanityFetch } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult } from '@/sanity/types';
import SingleBlog from './SingleBlog';

const Blog = () => {
  const [blogData, setBlogData] = useState<POSTS_QUERYResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from Sanity
    const fetchData = async () => {
      try {
        const posts = await sanityFetch<POSTS_QUERYResult[]>({
          query: ALL_POSTS_QUERY,
        });
        console.log('Fetched posts:', posts); // Debugging
        setBlogData(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setBlogData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogData || blogData.length === 0) {
    return <p>No posts available at the moment. Please check back later!</p>;
  }

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog._id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
