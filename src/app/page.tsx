// src/app/page.tsx
'use client';

import React from 'react';
import Head from 'next/head';

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

import useFetchPosts from '@/hooks/useFetchPosts'; // Import the custom hook

const Home: React.FC = () => {
  const { posts, isLoading, error } = useFetchPosts(); // Use the custom hook

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
      {/* Conditionally render the ListOfPost component based on loading and error states */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ListOfPost posts={posts} />
      )}
      <Contact />
    </div>
  );
};

export default Home;
