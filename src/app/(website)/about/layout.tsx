import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Elysium Consulting Firm',
  description:
    'Learn more about Elysium’s history, philosophy and team values.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hero-dark py-12">
      {/* shared centered container */}
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}
