import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes.prisma-enterprise.cloud';

export const metadata: Metadata = {
  title: 'Hermes | E-commerce Prizma',
  description:
    'Hermes es la plataforma e-commerce de Prizma: minimalista, altamente funcional y fácil de gestionar.',
  keywords: ['ecommerce', 'tienda online', 'Hermes', 'Prizma', 'productos', 'pedidos'],
  openGraph: {
    title: 'Hermes | E-commerce Prizma',
    description:
      'Plataforma e-commerce minimalista y altamente funcional para gestionar tus pedidos online.',
    type: 'website',
    url: siteUrl,
    siteName: 'Hermes by Prizma',
    locale: 'es_ES',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hermes by Prizma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hermes | E-commerce Prizma',
    description:
      'Plataforma e-commerce minimalista y funcional para gestionar tus pedidos online.',
    images: [{ url: '/images/twitter-og.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-CO': siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default async function HomePage() {
  return redirect('/graf');
}
