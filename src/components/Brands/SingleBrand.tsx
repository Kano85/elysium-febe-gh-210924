// src/components/Brands/SingleBrand.tsx

import React from 'react';
import Image from 'next/image';
import { Brand } from '@/sanity/brand';

interface SingleBrandProps {
  brand: Brand;
}

const SingleBrand: React.FC<SingleBrandProps> = ({ brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {/* Provide a fallback image if imageLight is undefined */}
        <Image
          src={imageLight || '/images/brands/default-light-image.png'} // Corrected path
          alt={`${name} Brand Logo`}
          fill
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={`${name} Brand Logo`}
          fill
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};

export default SingleBrand;
