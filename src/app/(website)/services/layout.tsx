import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Elysium Consulting Firm',
  description: 'Overview of services offered by Elysium Consulting Firm',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}