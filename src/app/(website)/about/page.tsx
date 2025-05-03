'use client';

import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

// ──────────────────────────────────────────────────────────────────────────────
// Grid wrapper: 7 columns (text) + 5 columns (images) from `lg` breakpoint up
// ──────────────────────────────────────────────────────────────────────────────
const LgTwoCol: React.FC<{
  children: React.ReactNode;
  images: React.ReactNode;
}> = ({ children, images }) => (
  <section className="space-y-lg lg:grid lg:grid-cols-12 lg:gap-x-lg lg:space-y-0">
    <div className="lg:col-span-7 space-y-lg">{children}</div>
    <aside className="lg:col-span-5 space-y-lg">{images}</aside>
  </section>
);

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        pageName={t('aboutPage.breadcrumb.pageName')}
        description={t('aboutPage.breadcrumb.description')}
      />

      {/* Outer container handled by layout; this div keeps inner vertical rhythm */}
      <div className="py-lg space-y-xl">
        {/* ───── WHO WE ARE ─────────────────────────────────────────── */}
        <LgTwoCol
          images={
            <>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/about/about1.png"
                  alt="Elysium Team Discussion"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/about/about3.png"
                  alt="Elysium Office Detail 1"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/about/about4.png"
                  alt="Elysium Office Detail 2"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </>
          }
        >
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p1')}
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p2')}
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p3')}
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p4')}
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p5')}
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whoWeAre.p6')}
          </p>
        </LgTwoCol>

        {/* ───── HISTORY ────────────────────────────────────────────── */}
        {/* Replaced LgTwoCol with direct grid layout to reverse order */}
        <section className="space-y-lg lg:grid lg:grid-cols-12 lg:gap-x-lg lg:space-y-0">
          {/* Images on the left */}
          <aside className="lg:col-span-5 space-y-lg">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/about/about2.png"
                alt="Elysium Office Environment"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/about/about5.png"
                alt="Elysium Office Detail 3"
                fill
                className="object-cover rounded"
              />
            </div>
          </aside>
          {/* Text on the right */}
          <div className="lg:col-span-7 space-y-lg">
            <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
              {t('aboutPage.history.title')}
            </h3>

            <div className="space-y-sm">
              <h4 className="elysium-heading-5">
                {t('aboutPage.history.originsTitle')}
              </h4>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.history.origins')}
              </p>

              <h4 className="elysium-heading-5">
                {t('aboutPage.history.developmentTitle')}
              </h4>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.history.development')}
              </p>

              <h4 className="elysium-heading-5">
                {t('aboutPage.history.birthTitle')}
              </h4>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.history.birth')}
              </p>

              <h4 className="elysium-heading-5">
                {t('aboutPage.history.valuesTitle')}
              </h4>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.history.values')}
              </p>
            </div>
          </div>
        </section>

        {/* ───── WHAT IS ELYSIUM? ───────────────────────────────────── */}
        <section className="space-y-md">
          <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            {t('aboutPage.whatIsElysium.title')}
          </h3>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            {t('aboutPage.whatIsElysium.description')}
          </p>
          <ul className="list-disc list-inside font-elysium-text-body-XS-elysium space-y-xs text-projects-colorstylesdisable-text">
            <li>
              <strong>{t('aboutPage.whatIsElysium.list.nameTitle')}:</strong>{' '}
              {t('aboutPage.whatIsElysium.list.name')}
            </li>
            <li>
              <strong>{t('aboutPage.whatIsElysium.list.sloganTitle')}:</strong>{' '}
              {t('aboutPage.whatIsElysium.list.slogan')}
            </li>
            <li>
              <strong>{t('aboutPage.whatIsElysium.list.symbolTitle')}:</strong>{' '}
              {t('aboutPage.whatIsElysium.list.symbol')}
            </li>
            <li>
              <strong>{t('aboutPage.whatIsElysium.list.coloursTitle')}:</strong>{' '}
              {t('aboutPage.whatIsElysium.list.colours')}
            </li>
          </ul>
        </section>

        {/* ───── VALUES ─────────────────────────────────────────────── */}
        <section className="space-y-sm">
          <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            {t('aboutPage.valuesSection.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div>
              <h5 className="elysium-body-l">
                {t('aboutPage.valuesSection.items.excellenceTitle')}
              </h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.valuesSection.items.excellence')}
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">
                {t('aboutPage.valuesSection.items.honestyTitle')}
              </h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.valuesSection.items.honesty')}
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">
                {t('aboutPage.valuesSection.items.securityTitle')}
              </h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.valuesSection.items.security')}
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">
                {t('aboutPage.valuesSection.items.trustTitle')}
              </h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                {t('aboutPage.valuesSection.items.trust')}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
