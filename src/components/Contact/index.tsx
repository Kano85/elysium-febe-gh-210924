// components/ContactForm.tsx
'use client';

import React, { FormEvent, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('phone')) return;

    // reCAPTCHA check
    if (!recaptchaToken) {
      toast.error(t('contact.recaptchaRequired'));
      return;
    }
    formData.append('g-recaptcha-response', recaptchaToken);

    try {
      const res = await fetch('https://formspree.io/f/xblojvll', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        toast.success(t('contact.successMessage'));
        form.reset();
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      } else {
        const data = await res.json();
        const msgs = data.errors?.map((e: any) => e.message).join(', ');
        throw new Error(msgs || 'Form submission failed');
      }
    } catch (err) {
      console.error(err);
      toast.error(t('contact.errorGeneric'));
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 px-4">
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

      {/* Google reCAPTCHA widget */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        ref={recaptchaRef}
        onChange={setRecaptchaToken}
      />

      <Button type="submit">{t('contact.submitButton')}</Button>

      {/* error handled via toast notifications */}
    </form>
  );
};

export default ContactForm;
