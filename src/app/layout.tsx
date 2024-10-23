// src/app/layout.tsx
// layout.tsx (server-side)

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

import { Inter } from 'next/font/google';
import 'react-modal-video/css/modal-video.css';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

// Define metadata at the layout level
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
        {/* You can add more meta tags if needed */}
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children} {/* Bring all child components passed to this layout */}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from './providers';
