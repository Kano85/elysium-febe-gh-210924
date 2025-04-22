// src/components/Mission.tsx
import React from 'react';
import Image from 'next/image';

export default function Mission(): JSX.Element {
  return (
    <section className="flex flex-col w-full max-w-[1440px] mx-auto gap-[64px] pt-[120px] pb-[80px] px-[100px] bg-projects-colorstyleshero-dark">
      {/* Hero */}
      <div className="flex flex-col w-full gap-[12px]">
        <h1 className="font-elysium-text-heading-3-elysium text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] leading-[60px]">
          Cuando se trata de decisiones importantes, <br />
          lo caro es equivocarse.
        </h1>
        <p className="font-elysium-text-body-l-elysium text-projects-colorstylesdisable-text max-w-3xl">
          Por eso nuestros clientes confían en nosotros desde el principio:
          porque hacerlo bien a la primera te hace ganar tiempo, dinero… y
          libertad.
        </p>
      </div>

      {/* First Content */}
      <div className="flex flex-wrap justify-between items-start gap-[80px] px-[50px]">
        <Image
          src="/images/mission/mission1.png"
          alt="Professional in business attire"
          width={520}
          height={420}
          className="rounded object-cover"
        />
        <div className="flex flex-col justify-center gap-[32px] max-w-[480px]">
          {/* Block 1 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              Convertimos la complejidad en estrategia.
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              Tomar decisiones fiscales o legales a nivel internacional implica
              riesgos, normativa cambiante y escenarios que no siempre son
              evidentes. En ELYSIUM analizamos cada caso con una visión global
              para transformar esa complejidad en una hoja de ruta clara, segura
              y eficaz.
            </p>
          </div>
          {/* Block 2 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              Te escuchamos antes de proponer. Te entendemos antes de actuar.
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              No aplicamos plantillas. Diseñamos soluciones a medida teniendo en
              cuenta tu realidad personal, fiscal, legal y empresarial. Porque
              cada persona y cada negocio son únicos, y merecen una estrategia
              que también lo sea.
            </p>
          </div>
        </div>
      </div>

      {/* Second Content */}
      <div className="flex flex-wrap justify-between items-start gap-[80px] px-[50px]">
        <div className="flex flex-col justify-center gap-[32px] max-w-[480px]">
          {/* Block 3 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              Relaciones que suman valor a largo plazo
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              Muchos llegan a ELYSIUM por un servicio puntual. Pero se quedan
              por todo lo que descubren después. Aquí no vendemos trámites, sino
              soluciones reales, con visión legal, fiscal y estratégica. La gran
              mayoría de nuestros clientes repite o amplía servicios. Lo
              habitual es que vuelvan. Lo excepcional, que no lo hagan.
            </p>
          </div>
          {/* Block 4 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              Excelencia que se nota en los detalles.
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              No buscamos hacer “lo correcto”: buscamos hacerlo mejor. Venimos
              de firmas de primer nivel y hemos aprendido que lo que marca la
              diferencia no es lo grande, sino lo preciso. En cada
              recomendación, documento o decisión, está nuestro estándar de
              calidad.
            </p>
          </div>
        </div>
        <Image
          src="/images/mission/mission2.png"
          alt="Business professionals in a meeting"
          width={520}
          height={420}
          className="rounded object-cover"
        />
      </div>
    </section>
  );
}
