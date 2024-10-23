//src/app/blog/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import ListOfPost from '@/components/Blog/ListOfPost'; // Component Import

import { client } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult } from '@/sanity/types'; // Correct Type Import

const BlogPage: React.FC = () => {
  const [listofpostsData, setListOfPostData] = useState<POSTS_QUERYResult[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListOfPosts = async () => {
      try {
        const posts = await client.fetch<POSTS_QUERYResult[]>(ALL_POSTS_QUERY);
        if (posts && Array.isArray(posts)) {
          setListOfPostData(posts);
        } else {
          setError('Failed to fetch posts.');
        }
      } catch (err) {
        setError('An error occurred while fetching posts.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListOfPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest blog posts and updates."
      />

      <ListOfPost posts={listofpostsData} />
    </>
  );
};

export default BlogPage;
