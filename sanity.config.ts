import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import article from './sanity/schemas/articles'

export default defineConfig({
  name: 'default',
  title: 'Redeem Publication & Legal Consult',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema: {
    types: [article],
  },
})