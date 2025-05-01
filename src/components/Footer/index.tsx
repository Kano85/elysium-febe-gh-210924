'use client';

import type { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import NextLink from 'next/link';
import Social from './social';
import SectionTitle from '../Common/SectionTitle';
import Marquee from '../Marquee/Marquee';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: NextPage = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="w-full relative bg-[#1e2123] overflow-hidden flex flex-col items-center justify-start py-0 px-[6.25rem] text-[#9d9b94]">
      {/* Home-only hero */}
      {isHome && (
        <section className="self-stretch text-center my-8">
          <SectionTitle
            title="Building Lasting partnerships"
            paragraph="Descúbrenos"
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
            alt="Elysium logo"
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
              Enlaces
            </h3>
            <nav className="flex flex-col gap-2 text-[0.875rem]">
              <NextLink href="#about" className="hover:text-[#dfc383]">
                Sobre nosotros
              </NextLink>
              <NextLink href="#news" className="hover:text-[#dfc383]">
                Actualidad
              </NextLink>
              <NextLink href="#contact" className="hover:text-[#dfc383]">
                Contacto
              </NextLink>
            </nav>
          </div>

          {/* 2 — Address */}
          <div className="flex flex-col gap-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a78952] to-[#dfc383] leading-7">
              Dirección
            </h3>
            <address className="not-italic flex gap-2 text-[0.875rem]">
              <MapPin size={20} className="text-[#dfc383] mt-1 shrink-0" />
              <span>
                Avinguda Carlemany&nbsp;657&nbsp;6e&nbsp;2a
                <br />
                AD700&nbsp;Escaldes-Engordany
                <br />
                Andorra
              </span>
            </address>
          </div>

          {/* 3 — Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a78952] to-[#dfc383] leading-7">
              Comunicación
            </h3>

            {/* e-mail */}
            <div className="flex items-center gap-2 text-[0.875rem]">
              <Mail size={16} className="text-[#dfc383]" />
              <NextLink
                href="mailto:info@elysiumconsultingfirm.com"
                className="hover:text-[#dfc383] transition-colors"
              >
                info@elysiumconsultingfirm.com
              </NextLink>
            </div>

            {/* phone */}
            <div className="flex items-center gap-2 text-[0.875rem]">
              <Phone size={16} className="text-[#dfc383]" />
              <NextLink
                href="tel:+376659479"
                className="hover:text-[#dfc383] transition-colors"
              >
                +376&nbsp;659&nbsp;479
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Image
        src="/horizontal-divider@2x.png"
        alt=""
        width={1240}
        height={1}
        className="w-full object-contain"
        loading="lazy"
      />

      {/* Bottom bar */}
      <div className="flex justify-between py-2 text-[0.875rem] w-full">
        <span>Copyright © 2025&nbsp;Elysium Consulting</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
