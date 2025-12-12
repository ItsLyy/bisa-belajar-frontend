import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '',
    short_name: 'BisaBelajar',
    description: 'A learning platform for everyone',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    theme_color: '#BBC1E1',
    background_color: '#1C1E27',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait-primary'
  }
}