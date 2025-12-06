'use client';

/**
 * CartSummary Component
 * Order summary and totals
 */

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartSummary({ showCheckoutButton = true }) {
  const { cart, getCartTotal, getCartItemsCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = 20; // Flat 20 DH shipping for all Morocco
  const total = subtotal + shipping;
  const itemsCount = getCartItemsCount();

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-20">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Items ({itemsCount}):</span>
          <span>{subtotal} DH</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span>{shipping} DH</span>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{total} DH</span>
          </div>
        </div>
      </div>

      {showCheckoutButton && (
        <>
          {cart.length > 0 ? (
            <Link
              href="/checkout"
              className="block w-full btn-primary text-center"
            >
              Proceed to Checkout
            </Link>
          ) : (
            <button
              disabled
              className="w-full btn-primary opacity-50 cursor-not-allowed"
            >
              Cart is Empty
            </button>
          )}

          <Link
            href="/products"
            className="block w-full btn-secondary text-center mt-3"
          >
            Continue Shopping
          </Link>
        </>
      )}

      <div className="mt-6 pt-6 border-t border-gray-300">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <p>Secure checkout • Cash on Delivery available</p>
        </div>
      </div>
    </div>
  );
}

