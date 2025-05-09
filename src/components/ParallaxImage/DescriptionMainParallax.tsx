'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DescriptionMainParallax: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
      <p className="w-[50vw] text-[2.5rem]">{t('mainParallax.clients')}</p>
      <p className="text-[2.5rem] ">{t('mainParallax.aboveAll')}</p>
    </div>
  );
};

export default DescriptionMainParallax;
