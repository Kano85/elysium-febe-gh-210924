//src/components/Common/SectionTitle.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SectionTitle = ({
  title,
  paragraph,
  mb = 'mb-0',
  buttonText,
  buttonHref,
}: {
  title: string;
  paragraph: string;
  mb?: 'mb-0' | 'mb-12' | 'mb-48';
  buttonText?: string;
  buttonHref?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-between w-full max-w-screen-2xl mx-auto text-left ${mb}`}
    >
      <div>
        <h2
          className={`elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left`}
        >
          {title.split(',').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split(',').length - 1 && ', '}
              <br />
            </span>
          ))}
        </h2>
        <p
          className={`font-elysium-text-body-l-elysium text-projects-colorstylesdisable-text text-left`}
        >
          {paragraph}
        </p>
      </div>
      {buttonText &&
        (buttonHref ? (
          <Button variant="outline" asChild>
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        ) : (
          <Button variant="outline">{buttonText}</Button>
        ))}
    </div>
  );
};

export default SectionTitle;
