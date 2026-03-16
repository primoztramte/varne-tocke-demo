import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const safeLocations = defineCollection({
  loader: glob({ base: './src/data/locations', pattern: '**/*.json' }),
   schema: z.object({
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    icon: z.string(),
    iconWidth: z.number(),
    iconHeight: z.number(),
    infoWindow: z.object({
      title: z.string(),
      address: z.string(),
    }),
  }),
});

export const collections = { safeLocations };