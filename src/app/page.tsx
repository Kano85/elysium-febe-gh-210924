// src/app/page.tsx

'use client';

import React from 'react';

import Hero from '@/components/Hero';
import USP from '@/components/USP/USP';
import Carousel from '@/components/Carousel/Carousel';
// import Marquee from '@/components/Marquee/Marquee';
import Video from '@/components/Video';
import Brands from '@/components/Brands';
import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import ScrollUp from '@/components/Common/ScrollUp';

// Import the presentational ListOfPost
import ListOfPost from '@/components/Blog/ListOfPost';
import useFetchPosts from '@/hooks/useFetchPosts';

const Home: React.FC = () => {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <>
      <ScrollUp />
      <main>
        <Hero />
        <USP />
        <AboutSectionOne />
        <AboutSectionTwo />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ListOfPost posts={posts} />
        )}
        <Video />
        <Brands />
        <Carousel />
        {/* <Marquee /> */}
      </main>
    </>
  );
};

export default Home;
