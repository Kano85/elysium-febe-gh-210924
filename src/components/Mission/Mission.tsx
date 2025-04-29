// src/components/Mission.tsx
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function Mission(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col w-full gap-[48px] px-8 lg:px-24 lg:pt-40 lg:pb-[80px] sm:pt-[90px] sm:pb-[30px]">
      {/* Hero */}
      <SectionTitle
        title={t('mission.hero.title')}
        paragraph={t('mission.hero.paragraph')}
      />

      {/* First Content */}
      <div className="flex flex-wrap justify-between items-start gap-[80px] w-full max-w-[1280px] mx-auto px-0 sm:px-[50px]">
        <Image
          src="/images/mission/mission1.png"
          alt={t('mission.image1.alt')}
          width={520}
          height={420}
          className="rounded object-cover"
        />
        <div className="flex flex-col justify-center gap-[32px] max-w-[480px]">
          {/* Block 1 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              {t('mission.block1.title')}
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              {t('mission.block1.paragraph')}
            </p>
          </div>
          {/* Block 2 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              {t('mission.block2.title')}
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              {t('mission.block2.paragraph')}
            </p>
          </div>
        </div>
      </div>

      {/* Second Content */}
      <div className="flex flex-wrap justify-between items-start gap-[80px] w-full max-w-[1280px] mx-auto px-0 sm:px-[50px]">
        <div className="flex flex-col justify-center gap-[32px] max-w-[480px]">
          {/* Block 3 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              {t('mission.block3.title')}
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              {t('mission.block3.paragraph')}
            </p>
          </div>
          {/* Block 4 */}
          <div>
            <h2 className="font-elysium-text-body-l-elysium text-projects-colorstylesmainbody-veig mb-[12px]">
              {t('mission.block4.title')}
            </h2>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              {t('mission.block4.paragraph')}
            </p>
          </div>
        </div>
        <Image
          src="/images/mission/mission2.png"
          alt={t('mission.image2.alt')}
          width={520}
          height={420}
          className="rounded object-cover"
        />
      </div>
    </section>
  );
}
