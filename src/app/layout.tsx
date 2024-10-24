// src/app/layout.tsx
// layout.tsx (server-side)

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

import { Inter } from 'next/font/google';
import 'react-modal-video/css/modal-video.css';
import '../styles/index.css';

import { Providers } from './providers'; // Moved import to the top for better organization

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Suranna&display=swap"
          rel="stylesheet"
        />
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
