'use client';

/**
 * Navbar Component
 * Main navigation with cart badge
 */

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            COOBRAA
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="hover:text-gray-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/pod" 
              className="hover:text-gray-600 transition-colors font-medium"
            >
              Custom POD
            </Link>
            
            {/* Cart Icon with Badge */}
            <Link 
              href="/cart" 
              className="relative hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              
              {/* Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

