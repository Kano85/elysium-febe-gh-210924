// app/contact/page.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/Contact/index';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t('contact.pageTitle')}</h1>
      <ContactForm />
    </main>
  );
}
