// src/app/layout.tsx

import { Inter, Suranna } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
// import SmoothScrollLayout from '../../components/SmoothScrollLayout/SmoothScrollLayout';
import { ToastContainer } from 'react-toastify';

import I18nWrapper from '../../components/I18nWrapper';

export const metadata: Metadata = {
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
      <body className="bg-hero-dark">
        <I18nWrapper>
          <Header />
          {/* <SmoothScrollLayout> */}
          {children}
          {/* </SmoothScrollLayout> */}
          <ScrollToTop />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </I18nWrapper>
      </body>
    </html>
  );
}
