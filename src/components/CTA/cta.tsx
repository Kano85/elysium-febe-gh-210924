import Image from 'next/image';
import { Button } from '../ui/button';

const CTA = () => {
  return (
    <section className="flex justify-center items-center flex-col lg:flex-row-reverse lg:justify-between container">
      <div className="px-[2.19rem] ">
        <h2 className="text-[1.7rem] lg:text-[3.75rem] lg:leading-[4.6rem] leading-[2.21rem] font-normal text-right capitalize">
          La conversación <br className="none lg:block" />
          que lo cambia todo
        </h2>
        <p className="text-[#9D9B94] text-right font-[Inter] text-[0.75rem] lg:text-[1.25rem] lg:leading-[1.75rem] not-italic font-normal leading-[1.25rem] mt-[0.75rem] text-balance">
          Una reunión confidencial para escucharte hoy.{' '}
          <br className="none lg:block" /> Un equipo de confianza para
          acompañarte mañana.
        </p>
        <div className="w-fit ml-auto">
          <Button variant={'outline'} className="mt-12">
            Reservar cita
          </Button>
        </div>
      </div>
      <div className="relative w-full lg:w-[20rem] aspect-square mt-12">
        <Image
          src="/images/cta1.jpeg"
          alt="cta"
          fill
          className="size-full object-cover object-center"
        />
      </div>
    </section>
  );
};
export default CTA;
