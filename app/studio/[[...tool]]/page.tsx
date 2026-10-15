import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return [{ tool: [] }]
}

export function generateMetadata() {
  return {
    title: 'Redeem Publication & Legal Consult - CMS',
    robots: { index: false },
  }
}

export default function StudioPage() {
  return <NextStudio config={config} />
}