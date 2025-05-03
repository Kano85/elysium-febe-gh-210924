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
      toast.error(t('contactForm.recaptchaRequired'));
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
        toast.success(t('contactForm.successMessage'));
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
      toast.error(t('contactForm.errorGeneric'));
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 px-4">
      <div>
        <Label htmlFor="name">{t('contactForm.nameLabel')}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t('contactForm.namePlaceholder')}
        />
      </div>

      <div>
        <Label htmlFor="email">{t('contactForm.emailLabel')}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('contactForm.emailPlaceholder')}
        />
      </div>

      <div>
        <Label htmlFor="message">{t('contactForm.messageLabel')}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t('contactForm.messagePlaceholder')}
        />
      </div>

      {/* Honeypot field */}
      <div className="hidden">
        <Label htmlFor="phone">{t('contactForm.phoneLabel')}</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          placeholder={t('contactForm.phonePlaceholder')}
        />
      </div>

      {/* Google reCAPTCHA widget */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        ref={recaptchaRef}
        onChange={setRecaptchaToken}
      />

      <Button
        type="submit"
        variant="default"
        className="mt-12 bg-gradient-to-r from-gold-light to-gold-dark text-hero-dark hover:from-gold-light/90 hover:to-gold-dark/90"
      >
        {t('contactForm.submitButton')}
      </Button>

      {/* error handled via toast notifications */}
    </form>
  );
};

export default ContactForm;
