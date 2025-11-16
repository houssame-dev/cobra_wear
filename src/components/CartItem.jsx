'use client';

/**
 * CartItem Component
 * Individual item in the shopping cart
 */

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.cartItemId, newQuantity);
    }
  };

  return (
    <div className="flex gap-6 py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-gray-200">
        {item.images && item.images[0] ? (
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Size: <span className="font-medium text-black">{item.selectedSize}</span></p>
          <p>Color: <span className="font-medium text-black">{item.selectedColor}</span></p>
          <p className="text-lg font-bold text-black mt-2">${item.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.cartItemId)}
          className="text-gray-400 hover:text-red-600 transition-colors"
          title="Remove item"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-3 py-1 hover:bg-gray-100 transition-colors"
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="px-3 py-1 font-medium min-w-[40px] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-3 py-1 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>

        <p className="font-bold text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

