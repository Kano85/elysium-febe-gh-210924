'use client';
// src/components/ListOfPost/index.tsx
import { useEffect, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { sanityFetch } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult } from '@/sanity/types';
import SinglePost from './SinglePost';

const ListOfPost = () => {
  const [listofpostsData, setListOfPostData] = useState<POSTS_QUERYResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch listofposts data from Sanity
    const fetchData = async () => {
      try {
        const posts = await sanityFetch<POSTS_QUERYResult[]>({
          query: ALL_POSTS_QUERY,
        });
        console.log('Fetched posts:', posts); // Debugging
        setListOfPostData(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setListOfPostData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listofpostsData || listofpostsData.length === 0) {
    return <p>No posts available at the moment. Please check back later!</p>;
  }

  return (
    <section
      id="listofposts"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest ListOfPosts"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {listofpostsData.map((listofposts) => (
            <div key={listofposts._id} className="w-full">
              <SinglePost listofposts={listofposts} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListOfPost;
