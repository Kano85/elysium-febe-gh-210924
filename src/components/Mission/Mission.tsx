//src/components/Mission/Mission.tsx

import Image from 'next/image';

export default function MissionSection() {
  return (
    <main className="bg-projects-colorstyles-hero-dark text-projects-colorstyles-mainbody-veig min-h-screen">
      <div className="container mx-auto py-xl">
        {/* Hero Section */}
        <div className="mb-xl">
          <h1 className="text-projects-colorstyles-text-gold text-h2 font-light leading-tight mb-md">
            Cuando se trata de decisiones importantes,
            <br />
            lo caro es equivocarse.
          </h1>
          <p className="text-projects-colorstyles-text-gold text-base max-w-3xl">
            Por eso nuestros clientes confían en nosotros desde el principio:
            porque hacerlo bien a la primera te hace ganar tiempo, dinero... y
            libertad.
          </p>
        </div>

        {/* First Content Section */}
        <div className="grid md:grid-cols-2 gap-lg mb-xl">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Professional in business attire"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-h3 font-medium mb-md">
              Convertimos la complejidad en estrategia.
            </h2>
            <p className="text-projects-colorstyles-text-gold text-base mb-lg">
              Tomar decisiones fiscales o legales a nivel internacional implica
              riesgos, normativa cambiante y escenarios que no siempre son
              evidentes. En ELYSIUM analizamos cada caso con una visión global
              para transformar esa complejidad en una hoja de ruta clara, segura
              y eficaz.
            </p>

            <h2 className="text-white text-h3 font-medium mb-md">
              Te escuchamos antes de proponer. Te entendemos antes de actuar.
            </h2>
            <p className="text-projects-colorstyles-text-gold text-base">
              No aplicamos plantillas. Diseñamos soluciones a medida teniendo en
              cuenta tu realidad personal, fiscal, legal y empresarial. Porque
              cada persona y cada negocio son únicos, y merecen una estrategia
              que también lo sea.
            </p>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="grid md:grid-cols-2 gap-lg mb-xl">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-white text-h3 font-medium mb-md">
              Relaciones que suman valor a largo plazo
            </h2>
            <p className="text-projects-colorstyles-text-gold text-base mb-sm">
              Muchos llegan a ELYSIUM por un servicio puntual. Pero se quedan
              por todo lo que descubren después.
            </p>
            <p className="text-projects-colorstyles-text-gold text-base mb-lg">
              Aquí no vendemos trámites, sino soluciones reales, con visión
              legal, fiscal y estratégica. La gran mayoría de nuestros clientes
              repite o amplía servicios. Lo habitual es que vuelvan. Lo
              excepcional, que no lo hagan.
            </p>

            <h2 className="text-white text-h3 font-medium mb-md">
              Excelencia que se nota en los detalles.
            </h2>
            <p className="text-projects-colorstyles-text-gold text-base">
              No buscamos hacer "lo correcto": buscamos hacerlo mejor. Venimos
              de firmas de primer nivel y hemos aprendido que lo que marca la
              diferencia no es lo grande, sino lo preciso. En cada
              recomendación, documento o decisión, este nuestro estándar de
              calidad.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Business professionals in a meeting"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
