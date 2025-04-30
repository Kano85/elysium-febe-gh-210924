'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb pageName={t('services')} description={t('services')} />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4">{t('services')}</h2>
        {/* Service offerings will be added here */}
      </section>
    </>
  );
}
