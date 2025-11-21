'use client';

/**
 * Products Listing Page
 * Fully responsive with modern UI and filters
 */

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { ProductCardSkeleton } from '@/components/Skeleton';
import { products, categories, styles, getProductsByCategory, getProductsByStyle } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');

  // Apply filters from URL parameters on page load
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const styleParam = searchParams.get('style');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (styleParam) {
      setSelectedStyle(styleParam);
    }
  }, [searchParams]);

  // Filter products based on both category and style
  let filteredProducts = products;

  if (selectedCategory !== 'all') {
    filteredProducts = getProductsByCategory(selectedCategory);
  }

  if (selectedStyle !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.style === selectedStyle);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Shop All Products
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 animate-slide-up">
            Discover our complete collection of premium clothing
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Filters */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-semibold mb-4">Shop by Category</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 hover:border-black'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Style Filters */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-base sm:text-lg font-semibold mb-4">Shop by Style</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base hover:scale-105 ${
                  selectedStyle === style.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 hover:border-black'
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-600">
            Showing <span className="font-bold text-black">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">No products found</h3>
            <p className="text-sm sm:text-base text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="h-10 sm:h-12 bg-gray-200 rounded w-2/3 sm:w-1/3 mb-4 animate-pulse"></div>
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-full sm:w-1/2 animate-pulse"></div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[...Array(8)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
    }>
      <ProductsContent />
    </Suspense>
  );
}
