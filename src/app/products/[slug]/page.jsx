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

  return (
    <main className="min-h-screen bg-white">
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
      title: 'Product Not Found - Coobraa',
    };
  }

  return {
    title: `${product.title} - Coobraa`,
    description: product.description,
  };
}
