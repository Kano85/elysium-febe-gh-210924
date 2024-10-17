'use client';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {
  apiVersion,
  dataset,
  projectId,
} from '../elysium-febe-210924/src/sanity/env';
import { schema } from '../elysium-febe-210924/src/sanity/schemaTypes';
import { structure } from '../elysium-febe-210924/src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
