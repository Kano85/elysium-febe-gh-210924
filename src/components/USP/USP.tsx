'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

type USPItem = string;

const USP_ITEMS: USPItem[] = [
  `¿Quieres optimizar tu fiscalidad, 
  proteger tu patrimonio y tomar decisiones con tranquilidad?`,
  `En ELYSIUM te ayudamos a hacerlo bien, 
  con garantías legales y visión estratégica.
Sabemos que dar el paso hacia Andorra o 
replantear tu situación fiscal genera dudas:`,
  `¿Me va a perseguir Hacienda?
¿Tendré que desvincularme por completo de mi país?
¿Realmente podré mejorar mi situación?`,
  `La buena noticia es que sí: 
  es posible estructurar tu caso con eficacia, dentro de la ley y sin errores.
Asesoramos a empresarios, deportistas, emprendedores, creadores de contenido o 
inversores que han empezado a generar ingresos relevantes y buscan claridad, 
eficiencia y tranquilidad en Andorra.
Con experiencia en firmas líderes y un enfoque global, 
te ayudamos a establecer tu residencia fiscal, 
constituir sociedades o planificar tu patrimonio con soluciones legales y a largo plazo.`,
  `Nuestros clientes no solo quieren pagar menos.
Quieren hacerlo legalmente y con seguridad.
Quieren seguir gestionando su vida y su negocio con libertad.
Y, sobre todo, quieren vivir mejor, con control y tranquilidad.`,
];

export default function USP() {
  const itemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      const enterAnim = gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          paused: true,
          // overwrite: true,
        }
      );

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        onEnter: () => enterAnim.play(),
        onLeaveBack: () => enterAnim.reverse(),
        // markers:true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-start gap-12 lg:px-24 md:gap-16 md:px-16 md:py-32 overflow-hidden px-8 py-24 relative z-6">
      {USP_ITEMS.map((text, index) => {
        const isRightAligned = index === 2 || index === 4;
        return (
          <p
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            style={{
              fontSize: 'clamp(1.2rem, 1.9vw, 1.5rem)',
              fontWeight: 400,
            }}
            className={`whitespace-pre-line max-w-[85%] md:max-w-[80%] md:my-6 my-4 relative tracking-wide z-2 ${
              isRightAligned ? 'self-end text-right' : 'self-start text-left'
            }`}
          >
            {t(text)}
          </p>
        );
      })}
    </div>
  );
}
