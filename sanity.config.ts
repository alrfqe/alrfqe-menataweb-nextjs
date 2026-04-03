import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { sanityEnv } from './src/lib/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Menata Web CMS',
  projectId: sanityEnv.projectId || 'missing-project-id',
  dataset: sanityEnv.dataset,
  basePath: sanityEnv.studioBasePath,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
