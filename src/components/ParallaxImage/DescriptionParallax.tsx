import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const DescriptionParallax: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto mt-24 mb-12 py-12 px-4">
      <p className="text-[1.9rem] mx-auto mb-4">
        {t('description-obj.structuring_news.paragraph1')}
      </p>
      <p className="text-[1.9rem] mx-auto mb-4">
        {t('description-obj.structuring_news.paragraph2')}
      </p>
      <p className="text-[1.9rem] mx-auto">
        {t('description-obj.structuring_news.paragraph3')}
      </p>
    </div>
  );
};

export default DescriptionParallax;
