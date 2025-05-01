'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/Contact';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Footer from '@/components/Footer';
import ContactMap from '@/components/ContactMap';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb pageName={t('title')} description={t('description')} />

      {/* inner section follows the same pattern you kept in ServicesPage */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <ContactForm />
        <ContactMap address="1600 Pennsylvania Ave NW, Washington, DC 20500" />
      </section>

      <Footer />
    </>
  );
}
