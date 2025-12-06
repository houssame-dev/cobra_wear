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
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get price range from products
  const allPrices = products.map(p => p.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  
  const [priceRange, setPriceRange] = useState({ min: minPrice, max: maxPrice });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Filter products based on category, style, search query, and price range
  let filteredProducts = products;

  // Category filter
  if (selectedCategory !== 'all') {
    filteredProducts = getProductsByCategory(selectedCategory);
  }

  // Style filter
  if (selectedStyle !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.style === selectedStyle);
  }

  // Search filter
  if (searchQuery.trim()) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Price filter
  filteredProducts = filteredProducts.filter(product =>
    product.price >= priceRange.min && product.price <= priceRange.max
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedStyle, searchQuery, priceRange.min, priceRange.max]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Count active filters
  const activeFiltersCount = [
    selectedCategory !== 'all' ? 1 : 0,
    selectedStyle !== 'all' ? 1 : 0,
    priceRange.min !== minPrice || priceRange.max !== maxPrice ? 1 : 0,
    searchQuery.trim() ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Modern Centered Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight">
            Our Collection
          </h1>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Search Bar and Filter Button Row */}
        <div className="flex items-center gap-3 mb-6">
          {/* Search Bar - 85% width */}
          <div className="flex-[0.85] relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-all duration-300 text-sm sm:text-base"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 md:hover:text-black transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Button - 15% width */}
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex-[0.15] group relative flex items-center justify-center p-3 bg-black text-white rounded-xl transition-all duration-300 md:hover:bg-gray-800 md:hover:scale-105 active:scale-95 shadow-lg md:hover:shadow-xl min-w-[56px]"
            aria-label="Toggle filters"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isFiltersOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-white text-black rounded-full text-xs font-bold min-w-[20px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
            
        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            {selectedCategory !== 'all' && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                {categories.find(c => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="md:hover:text-black transition-colors"
                  aria-label="Remove category filter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {selectedStyle !== 'all' && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                {styles.find(s => s.id === selectedStyle)?.name}
                <button
                  onClick={() => setSelectedStyle('all')}
                  className="md:hover:text-black transition-colors"
                  aria-label="Remove style filter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {(priceRange.min !== minPrice || priceRange.max !== maxPrice) && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                {priceRange.min} - {priceRange.max} DH
                <button
                  onClick={() => {
                    setPriceRange({ min: minPrice, max: maxPrice });
                  }}
                  className="md:hover:text-black transition-colors"
                  aria-label="Remove price filter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {searchQuery.trim() && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="md:hover:text-black transition-colors"
                  aria-label="Remove search filter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStyle('all');
                setPriceRange({ min: minPrice, max: maxPrice });
                setSearchQuery('');
              }}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 md:hover:text-black transition-colors underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filter Modal/Sidebar Overlay */}
        {isFiltersOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setIsFiltersOpen(false)}
          ></div>
        )}

        {/* Filter Sidebar (Desktop) / Modal (Mobile) */}
        <div 
          className={`fixed top-0 ${
            isMobile ? 'bottom-0 left-0 right-0' : 'right-0 bottom-0 w-96 max-w-[90vw]'
          } bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
            isFiltersOpen ? 'translate-x-0' : isMobile ? 'translate-y-full' : 'translate-x-full'
          } overflow-y-auto`}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-xl font-bold">Filters</h2>
            <button
              onClick={() => setIsFiltersOpen(false)}
              className="p-2 md:hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close filters"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Category Filters */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Shop by Category
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                      selectedCategory === category.id
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 md:hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Filters */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Shop by Style
              </h2>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                      selectedStyle === style.id
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 md:hover:bg-gray-200'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Price Range
              </h2>
              <div className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min: {priceRange.min} DH</label>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max: {priceRange.max} DH</label>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600">{minPrice} DH</span>
                  <span className="text-sm font-semibold text-black">{priceRange.min} - {priceRange.max} DH</span>
                  <span className="text-sm text-gray-600">{maxPrice} DH</span>
                </div>
              </div>
            </div>

            {/* Apply Filters Button (Mobile) */}
            {isMobile && (
              <div className="sticky bottom-0 bg-white border-t border-gray-200 pt-4 pb-6 -mx-6 px-6">
                <button
                  onClick={() => setIsFiltersOpen(false)}
                  className="w-full bg-black text-white py-3 rounded-xl font-bold md:hover:bg-gray-800 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-600">
            Showing <span className="font-bold text-black">{startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}</span> of <span className="font-bold text-black">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-black text-white md:hover:bg-gray-800 md:hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1 sm:gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    if (!showPage) {
                      // Show ellipsis
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="px-2 text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-black text-white scale-105 shadow-lg'
                            : 'bg-gray-100 text-gray-700 md:hover:bg-gray-200 md:hover:scale-105 active:scale-95'
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-black text-white md:hover:bg-gray-800 md:hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </>
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
