//src/app/layout.tsx

import { Inter, Suranna } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

const metadata = {
  title: 'Elysium',
  description: 'Global Finance Consulting',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const suranna = Suranna({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-suranna',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${suranna.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-black">
        <Header />
        <div id="smooth-wrapper" className="overflow-hidden w-full h-screen">
          <div id="smooth-content" className="will-change-transform">
            {children}
            <Footer />
          </div>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
