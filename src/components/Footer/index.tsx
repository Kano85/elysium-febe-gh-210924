'use client';

import type { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import NextLink from 'next/link';
import Social from './social';
import SectionTitle from '../Common/SectionTitle';
import Marquee from '../Marquee/Marquee';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: NextPage = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col w-full gap-[12px] px-8 lg:px-24 lg:pt-40 lg:pb-[40px] sm:pt-[90px] sm:pb-[15px] relative bg-[#1e2123] overflow-hidden items-center justify-start text-[#9d9b94]">
      {/* Home-only hero */}
      {isHome && (
        <section className="self-stretch text-center my-8">
          <SectionTitle
            title={t('footer.hero.title')}
            paragraph={t('footer.hero.paragraph')}
            mb="mb-12"
          />
          <Marquee />
        </section>
      )}

      {/* Main footer grid */}
      <section className="w-full flex flex-wrap justify-between gap-y-12 py-12">
        {/* Logo + socials */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/logo/elysium-logo.svg"
            alt={t('footer.logoAlt')}
            width={300}
            height={84}
            className="object-cover"
            loading="lazy"
          />
          <div className="flex gap-10">
            <Social socialIcon="instagram" />
            <Social socialIcon="linkedin" />
          </div>
        </div>

        {/* Links / address / contact */}
        <div className="flex flex-wrap gap-12 min-w-[33.813rem] text-[1.125rem]">
          {/* 1 — Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a78952] to-[#dfc383] leading-7">
              {t('footer.links.title')}
            </h3>
            <nav className="flex flex-col gap-2 text-[0.875rem]">
              <NextLink href="#about" className="hover:text-[#dfc383]">
                {t('footer.links.about')}
              </NextLink>
              <NextLink href="#news" className="hover:text-[#dfc383]">
                {t('footer.links.news')}
              </NextLink>
              <NextLink href="#contact" className="hover:text-[#dfc383]">
                {t('footer.links.contact')}
              </NextLink>
            </nav>
          </div>

          {/* 2 — Address */}
          <div className="flex flex-col gap-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a78952] to-[#dfc383] leading-7">
              {t('footer.address.title')}
            </h3>
            <address className="not-italic flex gap-2 text-[0.875rem]">
              <MapPin size={20} className="text-[#dfc383] mt-1 shrink-0" />
              <div>
                <span>Avinguda Carlemany 657</span>
                <br />
                <span>6e 2a</span>
                <br />
                <span>AD700, Andorra</span>
              </div>
            </address>
          </div>

          {/* 3 — Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a78952] to-[#dfc383] leading-7">
              {t('footer.contact.title')}
            </h3>

            {/* e-mail */}
            <div className="flex items-center gap-2 text-[0.875rem]">
              <Mail size={16} className="text-[#dfc383]" />
              <NextLink
                href="mailto:info@elysiumconsultingfirm.com"
                className="hover:text-[#dfc383] transition-colors"
              >
                {t('footer.contact.email')}
              </NextLink>
            </div>

            {/* phone */}
            <div className="flex items-center gap-2 text-[0.875rem]">
              <Phone size={16} className="text-[#dfc383]" />
              <NextLink
                href="tel:+376659479"
                className="hover:text-[#dfc383] transition-colors"
              >
                {t('footer.contact.phone')}
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="w-full border-t border-[#dfc383] opacity-30" />

      {/* Bottom bar */}
      <div className="flex justify-between py-2 text-[0.875rem] w-full">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.rights')}</span>
      </div>
    </div>
  );
};

export default Footer;
