/**
 * Product Detail Page
 * Dynamic route for individual product pages with Add to Cart
 */

import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Structured Data for Product SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images?.[0] || '/images/cobraa_wear_logo_1.png',
    brand: {
      '@type': 'Brand',
      name: 'Cobraa Wear',
    },
    offers: product.price ? {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'MAD',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cobraawear.com'}/products/${product.slug}`,
    } : undefined,
    category: product.category,
    sku: product.slug,
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductDetail product={product} />
      </div>
    </main>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    };
  }

  const productImage = product.images?.[0] || '/images/cobraa_wear_logo_1.png';
  const priceText = product.price ? `${product.price} DH` : 'Price Coming Soon';

  return {
    title: product.title,
    description: `${product.description} Available in sizes ${product.sizes.join(', ')}. ${priceText}`,
    openGraph: {
      title: `${product.title} - Cobraa Wear`,
      description: product.description,
      type: 'website',
      images: [productImage],
      url: `/products/${product.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} - Cobraa Wear`,
      description: product.description,
      images: [productImage],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}
