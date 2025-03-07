//src/components/About/AboutSectionTwo.tsx

import Image from 'next/image';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/recep.png"
                alt="Elysium about image"
                fill
                className="mx-auto max-w-full" // Remove dark: classes
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Seguridad
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color-dark sm:text-lg sm:leading-relaxed">
                  En Elysium, la seguridad va más allá de proteger datos: es
                  asegurar futuros. Nos enfocamos en analizar cada situación
                  para garantizar tranquilidad y construir bases sólidas para
                  tus proyectos.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Confianza
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color-dark sm:text-lg sm:leading-relaxed">
                  La confianza es el pilar de nuestro éxito. Más del 99% de
                  nuestros clientes regresan, sabiendo que cumplimos cada
                  promesa con integridad, y nos esforzamos cada día por mantener
                  esa confianza.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Excelencia
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Nos dedicamos a la perfección en cada detalle. Trabajamos con
                  los mejores para ofrecer soluciones innovadoras que no solo
                  resuelvan problemas, sino que inspiren y transformen cada
                  proyecto en algo extraordinario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
