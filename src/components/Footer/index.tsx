import type { NextPage } from 'next';
import Image from 'next/image';
import Social from './social';
import Link from './link';
import { MapPin } from 'lucide-react';
import SectionTitle from '../Common/SectionTitle';
import Marquee from '../Marquee/Marquee';

const Footer: NextPage = () => {
  return (
    <div className="w-full relative bg-[#1e2123] overflow-hidden flex flex-col items-center justify-start py-[0rem] px-[6.25rem] box-border text-left text-[0.875rem] text-[#9d9b94] font-Elysium-text-Body-S-Elysium">
      <section className="self-stretch text-center my-[2rem]">
        <SectionTitle
          title="Building Lasting partnerships"
          paragraph="Descúbrenos"
          mb="mb-12"
        />
        <Marquee />
      </section>
      <section className="self-stretch flex flex-row items-end justify-between flex-wrap content-end py-[3rem] px-[0rem] gap-x-[0rem] gap-y-[3rem]">
        <div className="flex flex-col items-center justify-start gap-[1.5rem]">
          <Image
            className="w-[18.75rem] h-[5.25rem] relative object-cover"
            loading="lazy"
            width={300}
            height={84}
            alt=""
            src="/images/logo/elysium-logo.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[2.5rem]">
            <Social socialIcon="instagram" />
            <Social socialIcon="linkedin" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start flex-wrap content-start gap-[3rem] min-w-[33.813rem] text-left text-[1.125rem] text-[#9d9b94] font-Elysium-text-Body-L-Elysium">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Enlaces
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] text-center text-[0.875rem] font-Elysium-text-Body-S-Elysium">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                  <Image
                    className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 hidden"
                    src="/icons/default.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <div className="relative leading-[1.25rem]">
                    Sobre nosotros
                  </div>
                  <Image
                    className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 hidden"
                    src="/icons/default.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                  <div className="relative leading-[1.25rem]">Actualidad</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                  <div className="relative leading-[1.25rem]">Contacto</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Dirección
            </h3>
            <div className="flex flex-col items-start justify-start text-[0.875rem] font-Elysium-text-Body-S-Elysium">
              <div className="flex flex-row items-start gap-2">
                <MapPin
                  size={20}
                  className="text-[#dfc383] flex-shrink-0 mt-1"
                />
                <div className="relative leading-[20px]">
                  <p className="m-0">{`Avinguda Carlemany `}</p>
                  <p className="m-0">{`67 6e 2a, AD700, `}</p>
                  <p className="m-0">Andorra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="flex flex-col items-start justify-start">
              <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a78952,_#dfc383)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Comunicación
              </h3>
            </div>
            <Link icon="mail" iconLeft iconRight={false} />
            <Link
              icon="phone"
              iconLeft
              iconRight={false}
              linkAlignSelf="unset"
            />
          </div>
        </div>
      </section>
      <Image
        className="self-stretch h-[0.063rem] max-w-full overflow-hidden shrink-0 object-contain"
        loading="lazy"
        width={1240}
        height={1}
        alt=""
        src="/horizontal-divider@2x.png"
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[0.5rem] px-[0rem] gap-[0rem]">
        <div className="relative leading-[1.25rem]">
          Copyright © 2025 Elysium Cnsulting
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[3rem] text-right">
          <div className="relative leading-[1.25rem]">{`All Rights Reserved `}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
