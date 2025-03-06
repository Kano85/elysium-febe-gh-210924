// src/app/layout.tsx

import { Inter, Suranna } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import GSAPWrapper from '@/app/GSAPWrapper';
import { metadata as appMetadata } from './metadata';

export const metadata = appMetadata;

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
        <title>{appMetadata.title ? String(appMetadata.title) : ''}</title>
        <meta
          name="description"
          content={
            appMetadata.description ? String(appMetadata.description) : ''
          }
        />
      </head>
      <body className="bg-black">
        <Header />
        <GSAPWrapper>
          <div id="smooth-wrapper" className="overflow-hidden w-full h-screen">
            <div id="smooth-content" className="will-change-transform">
              {children}
              <Footer />
            </div>
          </div>
        </GSAPWrapper>
        <ScrollToTop />
      </body>
    </html>
  );
}
