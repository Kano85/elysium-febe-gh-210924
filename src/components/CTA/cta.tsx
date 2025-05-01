import Image from 'next/image';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section
      className="
      flex flex-col
      lg:flex-row-reverse lg:items-start
      w-full lg:justify-between
      container gap-[48px] px-8 lg:px-24
      lg:pt-40 lg:pb-[80px]
      sm:pt-[90px] sm:pb-[30px]
    "
    >
      <div className="px-[2.19rem]">
        <h2 className="text-[1.7rem] lg:text-[3.75rem] lg:leading-[4.6rem] leading-[2.21rem] font-normal text-right capitalize">
          {t('cta.conversation_title')}
        </h2>
        <p className="text-[#9D9B94] text-right font-[Inter] text-[0.75rem] lg:text-[1.25rem] lg:leading-[1.75rem] not-italic font-normal leading-[1.25rem] mt-[0.75rem] text-balance">
          {t('cta.conversation_description')}
        </p>
        <div className="w-fit ml-auto">
          <Button variant={'outline'} className="mt-12">
            {t('cta.book_appointment')}
          </Button>
        </div>
      </div>
      <div className="relative w-full lg:w-[20rem] aspect-square mt-12 lg:mt-0">
        <Image
          src="/images/cta1.jpeg"
          alt="cta"
          width={230}
          height={230}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
export default CTA;
