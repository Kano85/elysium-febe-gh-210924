import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Elysium Consulting Firm',
  description: 'Insights and expertise from Elysium specialists',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hero-dark py-12">
      {/* identical centered container used across Services & Contact */}
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}
