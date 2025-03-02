// src/app/layout.tsx
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

import { Inter, Suranna } from 'next/font/google';
import 'react-modal-video/css/modal-video.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const suranna = Suranna({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Elysium',
  description: 'Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Remove the manual Suranna link here */}
      </head>
      <body className={`bg-black ${inter.className} ${suranna.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
