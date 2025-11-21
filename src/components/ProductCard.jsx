'use client';

/**
 * ProductCard Component
 * Modern, responsive card component for displaying products
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
  const { title, price, images, slug, inStock } = product;
  const image = images && images[0];
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  
  const inWishlist = isInWishlist(product.id);

  return (
    <article 
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      aria-label={`${title} product card`}
    >
      {/* Product Image */}
      <div className="relative">
        <Link href={`/products/${slug}`} aria-label={`View ${title} details`}>
          <div className="relative aspect-square bg-gray-50 overflow-hidden cursor-pointer">
            {image ? (
              <Image
                src={image}
                alt={`${title} product image`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" role="img" aria-label="Product image placeholder">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            
            {/* Out of Stock Overlay */}
            {!inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center" role="status">
                <span className="bg-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold text-xs sm:text-sm">
                  OUT OF STOCK
                </span>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Details
              </span>
            </div>
          </div>
        </Link>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
            inWishlist
              ? 'bg-red-500 text-white border-none shadow-lg'
              : 'bg-white text-black border border-black hover:bg-gray-50'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {inWishlist ? (
            // Filled Heart
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            // Heart Outline
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
        <Link href={`/products/${slug}`}>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors cursor-pointer line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4" aria-label={`Price: ${price.toFixed(2)} dollars`}>
          ${price.toFixed(2)}
        </p>
        
        {/* Spacer to push buttons to bottom */}
        <div className="flex-1"></div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto">
          {/* Add to Cart Button - Icon Only */}
          <div className="relative group/tooltip">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!inStock || isAddingToCart) return;
                
                setIsAddingToCart(true);
                // Add with default size and color (first available)
                const defaultSize = product.sizes?.[0] || 'M';
                const defaultColor = product.colors?.[0]?.name || 'Black';
                
                addToCart(product, defaultSize, defaultColor, 1);
                
                setTimeout(() => setIsAddingToCart(false), 800);
              }}
              disabled={!inStock || isAddingToCart}
              className={`p-2.5 sm:p-3 rounded-lg transition-all duration-300 ${
                inStock && !isAddingToCart
                  ? 'bg-black text-white hover:bg-gray-800 hover:scale-110'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              aria-label="Add to cart"
            >
              {/* Shopping Cart + Icon */}
              {isAddingToCart ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m3-3H9" />
                </svg>
              )}
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              Add to Cart
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>

          {/* Buy Now Button - Text */}
          <div className="relative group/tooltip flex-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!inStock || isBuyingNow) return;
                
                setIsBuyingNow(true);
                const defaultSize = product.sizes?.[0] || 'M';
                const defaultColor = product.colors?.[0]?.name || 'Black';
                
                addToCart(product, defaultSize, defaultColor, 1);
                
                setTimeout(() => {
                  router.push('/cart');
                }, 500);
              }}
              disabled={!inStock || isBuyingNow}
              className={`w-full py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                inStock && !isBuyingNow
                  ? 'bg-black text-white hover:bg-gray-800 hover:scale-[1.02]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              aria-label="Buy now"
            >
              {isBuyingNow ? 'Adding...' : 'Buy Now'}
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              Quick Checkout
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
