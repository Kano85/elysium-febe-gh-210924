// src/app/studio/[[...tool]]/page.tsx
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

if (!config?.projectId || !config?.dataset) {
  throw new Error(
    'Missing projectId or dataset in the Sanity configuration. Make sure environment variables are correctly set.'
  );
}

export default function StudioPage() {
  return <NextStudio config={config} />;
}

if (process.env.NODE_ENV === 'development') {
  console.log('Sanity config:', config);
}
