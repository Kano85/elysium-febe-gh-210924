import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const DescriptionParallax: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto mt-24 mb-12 py-12 px-4">
      {/* Changed key */}
      <p className="text-[2.5rem] mx-auto">
        {t('description-obj.structuring_news.description')} {/* Changed key */}
      </p>
    </div>
  );
};

export default DescriptionParallax;
