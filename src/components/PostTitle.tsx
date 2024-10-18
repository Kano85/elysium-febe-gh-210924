// ./src/components/post-title.tsx
'use client';

import type { ReactNode } from 'react';

interface PostTitleProps {
  children: ReactNode;
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  );
}
