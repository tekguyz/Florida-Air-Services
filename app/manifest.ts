import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Florida Air Services',
    short_name: 'FAS',
    description: '24/7 Emergency AC Repair in Broward & Palm Beach',
    start_url: '/',
    display: 'standalone',
    background_color: '#2f3340',
    theme_color: '#f27d26',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
