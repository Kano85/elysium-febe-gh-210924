import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export type SocialProps = {
  socialIcon: string;
};

const Social = ({ socialIcon }: SocialProps) => {
  // Render the appropriate icon based on the socialIcon prop
  const renderIcon = () => {
    switch (socialIcon.toLowerCase()) {
      case 'instagram':
        return (
          <Instagram
            size={24}
            className="text-white hover:text-[#dfc383] transition-colors"
          />
        );
      case 'linkedin':
        return (
          <Linkedin
            size={24}
            className="text-white hover:text-[#dfc383] transition-colors"
          />
        );
      case 'facebook':
        return (
          <Facebook
            size={24}
            className="text-white hover:text-[#dfc383] transition-colors"
          />
        );
      case 'twitter':
        return (
          <Twitter
            size={24}
            className="text-white hover:text-[#dfc383] transition-colors"
          />
        );
      default:
        return (
          <Instagram
            size={24}
            className="text-white hover:text-[#dfc383] transition-colors"
          />
        );
    }
  };

  return (
    <Link href="#" className="flex items-center justify-center">
      {renderIcon()}
    </Link>
  );
};

export default Social;
