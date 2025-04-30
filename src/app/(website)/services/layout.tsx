import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Elysium Consulting Firm',
  description: 'Overview of services offered by Elysium Consulting Firm',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hero-dark py-12">
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}
