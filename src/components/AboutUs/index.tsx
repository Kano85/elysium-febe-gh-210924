import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-[48px] pt-[90px] pb-[30px] sm:pt-[90px] sm:pb-[30px] lg:pt-40 lg:pb-[80px] lg:px-24 lg:gap-[80px] px-8">
      <SectionTitle
        title={t('aboutUs.hero.title')}
        paragraph={t('aboutUs.hero.paragraph')}
      />

      {/* Mobile layout (sm) - Single column */}
      <div className="grid grid-cols-1 gap-md h-auto md:hidden">
        {[
          {
            src: '/images/about/aboutus1.jpeg',
            alt: 'Abstract metal chains',
          },
          { src: '/images/about/aboutus2.jpeg', alt: 'Team members' },
          { src: '/images/about/aboutus3.png', alt: 'Lady Justice statue' },
          { src: '/images/about/aboutus4.png', alt: 'Elysium sign' },
          { src: '/images/about/aboutus5.png', alt: 'Office space' },
          {
            src: '/images/about/aboutus6.png',
            alt: 'Professional in formal attire',
          },
        ].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-auto"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={450}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        ))}
      </div>

      {/* Tablet layout (md) - Special arrangement */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-md auto-rows-auto">
        {/* Large feature image spanning full width */}
        <div className="col-span-2 h-[400px] overflow-hidden">
          <Image
            src="/images/about/aboutus1.jpeg"
            alt="Team members"
            width={800}
            height={400}
            className="object-cover w-full h-full grayscale"
          />
        </div>

        {/* 2x2 grid below */}
        <div className="h-[300px] overflow-hidden">
          <Image
            src="/images/about/aboutus2.jpeg"
            alt="Abstract metal chains"
            width={400}
            height={300}
            className="object-cover w-full h-full grayscale"
          />
        </div>
        <div className="h-[300px] overflow-hidden">
          <Image
            src="/images/about/aboutus3.png"
            alt="Lady Justice statue"
            width={400}
            height={300}
            className="object-cover w-full h-full grayscale"
          />
        </div>
        <div className="h-[300px] overflow-hidden">
          <Image
            src="/images/about/aboutus4.png"
            alt="Elysium sign"
            width={400}
            height={300}
            className="object-cover w-full h-full grayscale"
          />
        </div>
        <div className="h-[300px] overflow-hidden">
          <Image
            src="/images/about/aboutus5.png"
            alt="Professional in formal attire"
            width={400}
            height={300}
            className="object-cover w-full h-full grayscale"
          />
        </div>

        {/* Bottom image spanning full width */}
        <div className="col-span-2 h-[250px] overflow-hidden">
          <Image
            src="/images/about/aboutus6.png"
            alt="Office space"
            width={800}
            height={250}
            className="object-cover w-full h-full grayscale"
          />
        </div>
      </div>

      {/* Desktop layout (lg) - 3 columns with masonry */}
      <div className="hidden  lg:grid grid-cols-3 gap-md w-full max-w-[1200px] mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-md h-full">
          <div className="overflow-hidden h-[40%]">
            <Image
              src="/images/about/aboutus1.jpeg"
              alt="Abstract metal chains"
              width={400}
              height={500}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="overflow-hidden h-[60%]">
            <Image
              src="/images/about/aboutus2.jpeg"
              alt="Elysium sign"
              width={400}
              height={700}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-md h-full">
          <div className="overflow-hidden h-[65%]">
            <Image
              src="/images/about/aboutus3.png"
              alt="Team members"
              width={400}
              height={800}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="overflow-hidden h-[35%]">
            <Image
              src="/images/about/aboutus4.png"
              alt="Office space"
              width={400}
              height={400}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-md h-full">
          <div className="overflow-hidden h-[55%]">
            <Image
              src="/images/about/aboutus5.png"
              alt="Lady Justice statue"
              width={400}
              height={600}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="overflow-hidden h-[45%]">
            <Image
              src="/images/about/aboutus6.png"
              alt="Professional in formal attire"
              width={400}
              height={600}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
