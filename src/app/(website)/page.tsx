// src/app/page.tsx

'use client';

import React from 'react';

import Hero from '../../components/Hero/Hero';
import USP from '../../components/USP/USP';
import { MetricsMarketing } from '../../components/Carousel/Carousel';
import AboutUs from '../../components/AboutUs';
import Brands from '../../components/Brands';
import Mission from '../../components/Mission/Mission';
import ScrollUp from '../../components/Common/ScrollUp';
import Footer from '../../components/Footer';

// Import the presentational ListOfPost
import ListOfPost from '@/components/Blog/ListOfPost';
import useFetchPosts from '@/hooks/useFetchPosts';

import { useTranslation } from 'react-i18next';
import { getFullLanguageName, LanguageCodes } from '@/lib/utils';
const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = (i18n.language || 'en') as LanguageCodes;
  const { posts, isLoading, error } = useFetchPosts(
    getFullLanguageName(selectedLanguage)
  );

  return (
    <>
      <ScrollUp />
      <main>
        <Hero />
        <USP />
        <Mission />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ListOfPost posts={posts} />
        )}
        <AboutUs />
        <Brands />
        <MetricsMarketing />
        <Footer />
      </main>
    </>
  );
};

export default Home;
