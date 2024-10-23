// src/app/blog/page.tsx
'use client';

import React from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import ListOfPost from '@/components/Blog/ListOfPost'; // Component Import

import useFetchPosts from '@/hooks/useFetchPosts'; // Import the custom hook

const BlogPage: React.FC = () => {
  const { posts, isLoading, error } = useFetchPosts(); // Use the custom hook

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest blog posts and updates."
      />

      {/* Conditionally render ListOfPost based on loading/error states */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ListOfPost posts={posts} />
      )}
    </>
  );
};

export default BlogPage;
