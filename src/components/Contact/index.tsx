// components/ContactForm.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/Common/label';
import { Input } from '@/components/Common/input';
import { Textarea } from '@/components/Common/textarea';
import { Button } from '@/components/Common/button';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('phone')) return;

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
        setError(null);
      } else {
        const data = await res.json();
        const msgs = data.errors?.map((e: any) => e.message).join(', ');
        throw new Error(msgs || 'Form submission failed');
      }
    } catch (err) {
      console.error(err);
      setError(t('contact.errorGeneric'));
    }
  };

  if (success) {
    return (
      <p className="text-green-600 font-medium">
        ✅ {t('contact.successMessage')}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <Label htmlFor="name">{t('contact.nameLabel')}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t('contact.namePlaceholder')}
        />
      </div>

      <div>
        <Label htmlFor="email">{t('contact.emailLabel')}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('contact.emailPlaceholder')}
        />
      </div>

      <div>
        <Label htmlFor="message">{t('contact.messageLabel')}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t('contact.messagePlaceholder')}
        />
      </div>

      {/* Honeypot field */}
      <div className="hidden">
        <Label htmlFor="phone">{t('contact.phoneLabel')}</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          placeholder={t('contact.phonePlaceholder')}
        />
      </div>

      <Button type="submit">{t('contact.submitButton')}</Button>

      {error && <p className="text-red-500 font-medium">{error}</p>}
    </form>
  );
};

export default ContactForm;
