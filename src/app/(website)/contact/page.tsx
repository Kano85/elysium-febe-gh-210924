// app/contact/page.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/Contact/index';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb pageName={t('title')} description={t('description')} />
      <section className="container mx-auto px-4 py-12">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
