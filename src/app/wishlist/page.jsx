'use client';

/**
 * Wishlist Page
 * Display all products in the user's wishlist
 */

import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const toast = useToast();
  const router = useRouter();

  const handleAddToCart = (product) => {
    const defaultSize = product.sizes?.[0] || 'M';
    const defaultColor = product.colors?.[0]?.name || 'Black';
    
    addToCart(product, defaultSize, defaultColor, 1);
    toast.success('Added to cart!');
  };

  const handleBuyNow = (product) => {
    const defaultSize = product.sizes?.[0] || 'M';
    const defaultColor = product.colors?.[0]?.name || 'Black';
    
    addToCart(product, defaultSize, defaultColor, 1);
    toast.success('Added to cart! Taking you to cart...');
    
    setTimeout(() => {
      router.push('/cart');
    }, 500);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-gray-600 text-lg">Save your favorite products for later</p>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <svg className="w-24 h-24 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding products you love!</p>
            <Link
              href="/products"
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">My Wishlist</h1>
            <p className="text-gray-600 text-lg">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to clear your entire wishlist?')) {
                clearWishlist();
                toast.success('Wishlist cleared!');
              }
            }}
            className="px-6 py-2.5 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative">
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-square bg-gray-50 overflow-hidden cursor-pointer">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Remove Button */}
                <button
                  onClick={() => {
                    removeFromWishlist(product.id);
                    toast.success('Removed from wishlist');
                  }}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white text-black border border-black hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Remove from wishlist"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-1">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-base font-semibold mb-2 hover:text-gray-600 transition-colors cursor-pointer line-clamp-2">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      product.inStock
                        ? 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  {product.inStock && (
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="p-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                      aria-label="Buy now"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

