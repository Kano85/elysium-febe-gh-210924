// src/app/page.tsx

'use client';

import React from 'react';
import Head from 'next/head';

import Hero from '@/components/Hero';
import USP from '@/components/USP/USP';
import Pricing from '@/components/Pricing/Pricing';
import Carousel from '@/components/Carousel/Carousel';
import Marquee from '@/components/Marquee/Marquee';
import Video from '@/components/Video';
import Brands from '@/components/Brands';
import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Testimonials from '@/components/Testimonials';
import ListOfPost from '@/components/Blog/ListOfPost';
import Contact from '@/components/Contact';
import ScrollUp from '@/components/Common/ScrollUp';

import useFetchPosts from '@/hooks/useFetchPosts';

const Home: React.FC = () => {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <>
      <Head>
        <title>Merged Home Page</title>
        <meta
          name="description"
          content="Merged Home Page combining content from two projects"
        />
      </Head>
      <ScrollUp />
      <main>
        <Hero />
        <USP />
        <Pricing />
        <Carousel />
        <Marquee />
        <Video />
        <Brands />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Testimonials />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ListOfPost posts={posts} />
        )}
        <Contact />
      </main>
    </>
  );
};

export default Home;
