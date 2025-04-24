import NextLink from 'next/link';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export type LinkProps = {
  icon: string;
  iconLeft: boolean;
  iconRight: boolean;
  linkAlignSelf?: string;
};

const Link = ({ icon, iconLeft, iconRight, linkAlignSelf = '' }: LinkProps) => {
  // Render the appropriate icon based on the icon prop
  const renderIcon = () => {
    switch (icon.toLowerCase()) {
      case 'mail':
        return <Mail size={16} className="text-[#dfc383]" />;
      case 'phone':
        return <Phone size={16} className="text-[#dfc383]" />;
      default:
        return <ExternalLink size={16} className="text-[#dfc383]" />;
    }
  };

  // First link is email
  if (linkAlignSelf === undefined) {
    return (
      <div className={`flex flex-row items-center gap-2 ${linkAlignSelf}`}>
        {iconLeft && renderIcon()}
        <NextLink
          href="mailto:info@elysiumconsultingfirm.com"
          className="text-[12px] leading-[20px] text-[#9d9b94] hover:text-[#dfc383] transition-colors"
        >
          info@elysiumconsultingfirm.com
        </NextLink>
        {iconRight && <ExternalLink size={16} className="text-[#dfc383]" />}
      </div>
    );
  }

  // Second link is phone
  return (
    <div className={`flex flex-row items-center gap-2 ${linkAlignSelf}`}>
      {iconLeft && renderIcon()}
      <NextLink
        href="tel:+376659479"
        className="text-[12px] leading-[20px] text-[#9d9b94] hover:text-[#dfc383] transition-colors"
      >
        +376 659 479
      </NextLink>
      {iconRight && <ExternalLink size={16} className="text-[#dfc383]" />}
    </div>
  );
};

export default Link;
