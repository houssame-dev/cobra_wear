/**
 * Homepage
 * Modern landing page with hero section and product listings
 */

import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3); // Limit to 3 products

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section id="products" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Discover our premium collection of clothing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-slide-up">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/products"
              className="inline-flex items-center justify-center btn-secondary group"
            >
              View All Products
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Create Your Own Design
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Use our Print-On-Demand service to bring your creative vision to life
          </p>
          <Link
            href="/pod"
            className="inline-flex items-center justify-center bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            Start Designing Now
            <svg 
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose Cobra Wear?</h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Premium quality, fast delivery, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: '🎨',
                title: 'Custom Designs',
                desc: 'Create unique products with our POD service'
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                desc: 'Quick processing and shipping'
              },
              {
                icon: '✨',
                title: 'Premium Quality',
                desc: 'High-quality materials and printing'
              },
              {
                icon: '💯',
                title: 'Satisfaction Guaranteed',
                desc: 'We stand behind our products'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
              >
                <div className="text-4xl sm:text-5xl mb-4 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
