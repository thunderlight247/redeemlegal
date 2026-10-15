import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import article from './sanity/schemas/article'

export default defineConfig({
  name: 'default',
  title: 'Redeem Publication & Legal Consult',
  basePath: '/studio', // <-- CRITICAL: Required for App Router subroute mounting
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [article],
  },
})