// src/app/blog/page.tsx

'use client';

import React from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import ListOfPost from '@/components/Blog/ListOfPost';
import useFetchPosts from '@/hooks/useFetchPosts';

const BlogPage: React.FC = () => {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest blog posts and updates."
      />
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
