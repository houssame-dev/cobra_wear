'use client';

/**
 * Shopping Cart Page
 * View and manage cart items
 */

import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import Link from 'next/link';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shopping Cart
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">
                  Cart Items ({cart.length})
                </h2>
                
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <CartItem key={item.cartItemId} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          // Empty Cart
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <svg
                className="w-32 h-32 text-gray-300 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Looks like you haven't added anything to your cart yet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  Shop Products
                </Link>
                <Link href="/pod" className="btn-secondary">
                  Create Custom Design
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

