import RootLayoutClient from './RootLayoutClient';

export const metadata = {
  metadataBase: new URL('https://luwydev.com'),
  title: "Luwy Dyro",
  description: "Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO",
  keywords: "Luwy, Luwy Dyro, Desarrollador web, frontend, Ux developer, diseñador web",
  authors: [{name:"Luwy Dyro"}],
  robots: {
    index: true,
    follow: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
  icon: "../public/images/logo/logo_LD.svg",
  },
  verification: {
    google: 'nE2v_O-ZanGkO0SyK6Fxofu2A8moFSH_Yw7gl0F0sw0',
  }, 
  openGraph: {
    title: 'Luwy Dyro | Web Developer',
    description: 'Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO',
    url: 'https://luwydev.com',
    siteName: 'Luwy Dyro',
    images: [
      {
        url: '/images/logo/logo_luwydyro_contorno.svg',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};
export const viewport = {
    themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007aff' },
    { media: '(prefers-color-scheme: dark)', color: '#050f25' },
  ],
} 

export default function RootLayout({ children }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
