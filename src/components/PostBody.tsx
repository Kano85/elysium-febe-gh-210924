'use client';
import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';

interface PostBodyProps {
  content: PortableTextBlock[];
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="prose prose-lg mx-auto max-w-2xl">
      <PortableText value={content} />
    </div>
  );
}
