import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Elysium Consulting Firm',
  description: 'Get in touch with Elysium Consulting Firm',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hero-dark py-12">
      {/* same centered container used in services */}
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}
