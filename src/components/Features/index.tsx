import type { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '../ui/button';

const CallToActionMarketingBlock: NextPage = () => {
  return (
    <div className="w-full relative bg-[#1e2123] flex flex-row items-center justify-start py-[8.125rem] px-[6.25rem] box-border">
      <section className="flex-1 flex flex-row items-end justify-between gap-[0rem] text-right text-[3.75rem] text-[#f8f7f3] font-Body-S-Semibold">
        <Image
          className="w-[17.75rem] relative max-h-full object-cover"
          loading="lazy"
          width={284}
          height={321}
          alt=""
          src="/images/cta1.jpeg"
        />
        <div className="flex flex-col items-end justify-end gap-[3rem]">
          <div className="rounded bg-[#1e2123] flex flex-col items-end justify-center gap-[0.75rem]">
            <h1 className="m-0 relative text-[length:inherit] tracking-[-0.02em] leading-[4.625rem] font-normal font-[inherit]">
              <p className="m-0">{`La conversación `}</p>
              <p className="m-0">que lo cambia todo</p>
            </h1>
            <div className="relative text-[1.125rem] leading-[1.75rem] text-[#9d9b94]">
              <p className="m-0">{`Una reunión confidencial para escucharte hoy. `}</p>
              <p className="m-0">{`Un equipo de confianza para acompañarte mañana `}</p>
            </div>
          </div>
          <Button type="button" />
        </div>
      </section>
    </div>
  );
};

export default CallToActionMarketingBlock;
