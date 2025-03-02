// src/app/layout.tsx
import { Inter, Suranna } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import GSAPWrapper from '@/components/GSAPWrapper';
import { metadata as appMetadata } from './metadata';

export const metadata = appMetadata;

const inter = Inter({ subsets: ['latin'] });
const suranna = Suranna({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Cast title to string, providing a fallback if needed */}
        <title>{appMetadata.title ? String(appMetadata.title) : ''}</title>
        <meta
          name="description"
          content={
            appMetadata.description ? String(appMetadata.description) : ''
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`bg-black ${inter.className} ${suranna.className}`}>
        <Header />
        {/* GSAPWrapper handles client-side animations */}
        <GSAPWrapper>
          <div id="smooth-wrapper" className="overflow-hidden w-full h-full">
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
