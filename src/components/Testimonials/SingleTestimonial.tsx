import type { Testimonial } from '@/sanity/shared-types';
import Image from 'next/image';

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-yellow-400">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = [];
  for (let i = 0; i < star; i++) {
    ratingIcons.push(
      <span key={i} className="elysium-body-xs text-yellow-400">
        {starIcon}
      </span>
    );
  }

  return (
    <li className="h-full w-96 relative">
      <div className="rounded-lg p-8 bg-[#383b3d] shadow-lg transition-shadow duration-300 hover:shadow-xl">
        {/* Star Rating */}
        <div className="flex mb-4 space-x-1">{ratingIcons}</div>

        {/* Testimonial Text */}
        <p className="mb-6 text-white elysium-body-s leading-relaxed">
          {content}
        </p>

        {/* Divider */}
        <div className="border-t border-[#6b6b78] my-2"></div>

        {/* Author Info */}
        <div className="flex items-center">
          <div className="relative mr-4 size-10 overflow-hidden rounded-full">
            <Image
              src={image || '/placeholder.svg'}
              alt={name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[#bcb9b4] elysium-body-xs font-medium">
              {name}
            </h3>
          </div>
          <div>
            <p className="text-[#6b6b78] elysium-body-xs">{designation}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleTestimonial;
