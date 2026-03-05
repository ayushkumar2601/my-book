import { MetadataRoute } from 'next'
import { PERSONAL_INFO } from '@/src/lib/personal-info'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PERSONAL_INFO.name} - Portfolio`,
    short_name: PERSONAL_INFO.name,
    description: PERSONAL_INFO.bio,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-ak.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
