/**
 * Products Layout
 * Adds metadata for the products listing page
 */

export const metadata = {
  title: 'Shop All Products',
  description: 'Browse our complete collection of premium clothing. Shop hoodies, t-shirts, sweatshirts, jackets, and pants. Filter by category and style to find your perfect piece.',
  keywords: [
    'shop clothing',
    'premium clothing',
    'hoodies',
    't-shirts',
    'sweatshirts',
    'jackets',
    'pants',
    'fashion',
    'streetwear',
    'Morocco',
  ],
  openGraph: {
    title: 'Shop All Products - Cobraa Wear',
    description: 'Browse our complete collection of premium clothing. Shop hoodies, t-shirts, sweatshirts, jackets, and pants.',
    url: '/products',
    images: ['/images/cobraa_wear_logo_1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop All Products - Cobraa Wear',
    description: 'Browse our complete collection of premium clothing.',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsLayout({ children }) {
  return children;
}

