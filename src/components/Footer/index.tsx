'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from 'lucide-react';
import SectionTitle from '@/components/Common/SectionTitle';
import Marquee from '@/components/Marquee/Marquee';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 bg-hero-dark pt-16 md:pt-20 lg:pt-24">
      {/* Section Title */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('Building lasting')}
          paragraph={t('partnerships')}
          center
          mb="60px"
        />
      </div>

      {/* Marquee Section */}
      <div className="relative overflow-visible p-4 sm:p-6 md:p-8">
        <Marquee />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* Logo and Social */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/elysium-logo.svg"
                  alt="Elysium Consulting"
                  width={140}
                  height={30}
                  className="w-auto h-auto"
                />
              </Link>
              <div className="flex space-x-4">
                {[
                  {
                    href: 'https://instagram.com',
                    label: 'Instagram',
                    icon: <Instagram size={24} />,
                  },
                  {
                    href: 'https://linkedin.com',
                    label: 'LinkedIn',
                    icon: <Linkedin size={24} />,
                  },
                ].map(({ href, label, icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark hover:text-[#c7b078] transition-colors duration-300"
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Enlaces */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Enlaces</h2>
              <ul className="space-y-4">
                {[
                  { href: '/about', text: 'Sobre nosotros' },
                  { href: '/news', text: 'Actualidad' },
                  { href: '/contact', text: 'Contacto' },
                ].map(({ href, text }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-body-color-dark hover:text-white transition-colors duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dirección */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Dirección</h2>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-body-color-dark"
                />
                <p className="text-body-color-dark">
                  Avinguda Carlemany 67, 6e 2a, AD700, Andorra
                </p>
              </div>
            </div>

            {/* Comunicación */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Comunicación</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="flex-shrink-0 text-body-color-dark"
                  />
                  <a
                    href="mailto:info@elysiumconsultingfirm.com"
                    className="text-body-color-dark hover:text-white transition-colors duration-300"
                  >
                    info@elysiumconsultingfirm.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="flex-shrink-0 text-body-color-dark"
                  />
                  <a
                    href="tel:+376659479"
                    className="text-body-color-dark hover:text-white transition-colors duration-300"
                  >
                    +376 659 479
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-body-color-dark">
            {t('© Elysium Consulting Firm. All rights reserved.')}
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-sm bg-[#c7b078] p-3 text-bg-color-dark hover:bg-[#d8c089] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c7b078] focus:ring-offset-2 focus:ring-offset-gray-dark"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
