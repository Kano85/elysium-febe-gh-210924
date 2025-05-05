import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    // Make section relative, remove padding/gap
    <section className="relative w-full">
      {/* Video Section - Make relative, full width, full screen height */}
      <div className="relative w-full h-screen overflow-hidden">
        {' '}
        {/* Changed height to h-screen */}
        <video
          src="/videos/about-us-video.mov" // Corrected video path
          autoPlay
          loop
          muted
          playsInline
          // Make video absolute, cover container
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        {/* Absolute positioned container for SectionTitle, matching Hero padding */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 pl-[50px] lg:pl-[130px] pr-[3.125rem]">
          <SectionTitle
            title={t('aboutUskey.hero.title')}
            paragraph={t('aboutUskey.hero.paragraph')}
          />
        </div>
      </div>

      {/* Content below the video can go here if needed */}
    </section>
  );
}
