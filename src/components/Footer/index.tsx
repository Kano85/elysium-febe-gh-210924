import type { NextPage } from 'next';
import Image from 'next/image';
import Social from './social';
import Link from './link';
import { ChevronUp, MapPin } from 'lucide-react';

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = '' }) => {
  return (
    <div
      className={`w-full max-w-[1440px] bg-[#1e2123] overflow-hidden flex flex-col items-center justify-start py-0 px-4 sm:px-8 md:px-12 lg:px-[100px] box-border text-left text-[18px] text-[#9d9b94] font-Elysium-text-Body-XS-Elysium ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start w-full">
        <div className="self-stretch flex flex-col md:flex-row items-start md:items-end justify-between py-8 md:py-spacing-6xl px-0 gap-8 md:gap-0 w-full">
          {/* Logo and social icons */}
          <div className="flex flex-col items-center md:items-start justify-start gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <div className="relative w-[494px] h-[196px]">
                <Image
                  src="/images/logo/elysium-logo.svg"
                  alt="Elysium Consulting Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-10">
              <Social social="Instagram" style="Black" socialIcon="instagram" />
              <Social social="LinkedIn" style="Black" socialIcon="linkedin" />
            </div>
          </div>

          {/* Navigation sections */}
          <div className="flex flex-col md:flex-row items-start justify-start gap-8 w-full md:w-auto">
            {/* Enlaces section */}
            <div className="flex flex-col items-start justify-start gap-2 w-full md:w-auto">
              <div className="relative leading-[28px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Enlaces
              </div>
              <div className="flex flex-col items-start justify-start gap-2 text-left text-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-1.5">
                    <div className="relative leading-[20px] hover:text-[#dfc383] cursor-pointer transition-colors">
                      Sobre nosotros
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-1.5">
                    <div className="relative leading-[20px] hover:text-[#dfc383] cursor-pointer transition-colors">
                      Actualidad
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-1.5">
                    <div className="relative leading-[20px] hover:text-[#dfc383] cursor-pointer transition-colors">
                      Contacto
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dirección section */}
            <div className="flex flex-col items-start justify-start gap-2 w-full md:w-auto">
              <div className="relative leading-[28px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dirección
              </div>
              <div className="flex flex-col items-start justify-start text-[12px]">
                <div className="flex flex-row items-start justify-start gap-2">
                  <MapPin
                    size={20}
                    className="text-[#dfc383] flex-shrink-0 mt-1"
                  />
                  <div className="relative leading-[20px]">
                    <p className="m-0">{`Avinguda Carlemany `}</p>
                    <p className="m-0">{`657. 6e 2a, AD700, `}</p>
                    <p className="m-0">Andorra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comunicación section */}
            <div className="flex flex-col items-start justify-start gap-2 w-full md:w-auto">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[28px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Comunicación
                </div>
              </div>
              <Link
                color="Color"
                icon="mail"
                iconLeft
                iconRight={false}
                weight="Regular"
              />
              <Link
                color="Color"
                icon="phone"
                iconLeft
                iconRight={false}
                weight="Regular"
                linkAlignSelf="unset"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="self-stretch h-px bg-gray-800 my-4 w-full"></div>

        {/* Footer bottom */}
        <div className="self-stretch flex flex-col sm:flex-row items-center justify-between py-4 px-0 gap-4 text-[12px] w-full">
          <div className="relative leading-[20px]">
            Copyright © 2025 Elysium Consulting
          </div>
          <div className="flex flex-row items-center justify-start gap-6 sm:gap-12 text-right">
            <div className="relative leading-[20px]">{`All Rights Reserved `}</div>
            <button className="w-10 h-10 bg-[#c9a55c] rounded flex items-center justify-center hover:bg-[#a78952] transition-colors">
              <ChevronUp size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
