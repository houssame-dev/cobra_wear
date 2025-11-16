'use client';

/**
 * Products Listing Page
 * All products with category and style filters
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, categories, styles, getProductsByCategory, getProductsByStyle } from '@/data/products';

export default function ProductsPage() {
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
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop All Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete collection of premium clothing
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Shop by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-white border-2 border-gray-300 hover:border-black'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Style Filters */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Shop by Style</h2>
          <div className="flex flex-wrap gap-3">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedStyle === style.id
                    ? 'bg-black text-white'
                    : 'bg-white border-2 border-gray-300 hover:border-black'
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-bold text-black">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-4"
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
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </main>
  );
}

