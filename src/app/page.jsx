/**
 * Homepage
 * Landing page with hero section and product listings
 */

import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3); // Limit to 3 products

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg">
            Discover our premium collection of clothing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block btn-secondary"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your Own Design
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Use our Print-On-Demand service to bring your creative vision to life
          </p>
          <Link
            href="/pod"
            className="inline-block bg-white text-black px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Designing Now
          </Link>
        </div>
      </section>
    </main>
  );
}

