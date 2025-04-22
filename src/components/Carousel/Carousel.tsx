//src/components/Carousel/Carousel.tsx
'use client';

import React from 'react';

export const MetricsMarketing = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1440px] mx-auto gap-[64px] px-[100px] py-[130px] bg-projects-colorstyleshero-dark">
      {/* Heading */}
      <div className="w-full max-w-[1240px] h-[60px]">
        <h2 className="inline-block font-elysium-text-heading-3-elysium text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] leading-[60px] whitespace-nowrap">
          Datos que hablan por sí solos
        </h2>
      </div>

      {/* Metrics Row */}
      <div className="flex flex-wrap w-full max-w-[1200px] gap-[64px]">
        {[
          {
            value: '90%',
            text: 'Más del 95 % de nuestros clientes repiten y amplían servicios.',
          },
          {
            value: '<48H',
            text: 'Respuesta en menos de 48 h. ¡Tu tiempo importa!',
          },
          {
            value: '+15',
            text: '15 años de experiencia en fiscalidad internacional y estrategia.',
          },
          {
            value: '+120',
            text: 'Traslados de residencia gestionados con éxito.',
          },
        ].map(({ value, text }, i) => (
          <div
            key={i}
            className="flex-1 grow flex flex-col items-start gap-[8px] pl-[20px] border-l border-1-colors-neutral-neutral-borders"
          >
            <div className="font-elysium-text-heading-3-elysium text-1-colors-base-base-white text-[48px] leading-[60px] whitespace-nowrap">
              {value}
            </div>
            <p className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
