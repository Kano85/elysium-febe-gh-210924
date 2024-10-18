'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { client } from '../sanity/lib/client';
import { POSTS_QUERY } from '../sanity/lib/queries';
import { POSTS_QUERYResult } from '../sanity/types';
// import { urlFor } from '../sanity/lib/image';
import IntroSection from '../components/IntroSection';
import ListOfPosts from '../components/ListOfPOsts';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<POSTS_QUERYResult[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts: POSTS_QUERYResult[] = await client.fetch(POSTS_QUERY);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="A collection of interesting blog posts"
        />
      </Head>

      <IntroSection />
      <ListOfPosts posts={posts} />
    </div>
  );
};

export default Home;
