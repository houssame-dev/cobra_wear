import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { WishlistProvider } from '@/context/WishlistContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cobraawear.com'),
  title: {
    default: 'Cobraa Wear - Premium Clothing & Custom Print-On-Demand',
    template: '%s | Cobraa Wear',
  },
  description: 'Shop premium clothing including hoodies, t-shirts, sweatshirts, jackets, and pants. Create your own custom designs with our Print-On-Demand service. Fast delivery across Morocco.',
  keywords: [
    'Cobraa Wear',
    'premium clothing',
    'hoodies',
    't-shirts',
    'sweatshirts',
    'jackets',
    'pants',
    'print on demand',
    'custom clothing',
    'Morocco',
    'streetwear',
    'fashion',
    'online store',
    'clothing store',
  ],
  authors: [{ name: 'Cobraa Wear' }],
  creator: 'Cobraa Wear',
  publisher: 'Cobraa Wear',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/cobraa_wear_logo_1.png',
    shortcut: '/images/cobraa_wear_logo_1.png',
    apple: '/images/cobraa_wear_logo_1.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Cobraa Wear',
    title: 'Cobraa Wear - Premium Clothing & Custom Print-On-Demand',
    description: 'Shop premium clothing including hoodies, t-shirts, sweatshirts, jackets, and pants. Create your own custom designs with our Print-On-Demand service.',
    images: [
      {
        url: '/images/cobraa_wear_logo_1.png',
        width: 1200,
        height: 630,
        alt: 'Cobraa Wear Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobraa Wear - Premium Clothing & Custom Print-On-Demand',
    description: 'Shop premium clothing and create custom designs with our Print-On-Demand service.',
    images: ['/images/cobraa_wear_logo_1.png'],
    creator: '@cobraawear_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <GoogleAnalytics />
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}

