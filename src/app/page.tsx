//src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult } from '@/sanity/types';
// import { urlFor } from '../sanity/lib/image';

import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import ListOfPost from '@/components/Blog/ListOfPost';
import Brands from '@/components/Brands';
import ScrollUp from '@/components/Common/ScrollUp';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';

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
        <title>My ListOfPost & Startup Template</title>
        <meta
          name="description"
          content="A collection of interesting listofposts posts and a great template for startups"
        />
      </Head>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <ListOfPost />
      <Contact />
    </div>
  );
};

export default Home;
