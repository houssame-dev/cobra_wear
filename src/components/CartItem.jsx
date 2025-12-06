'use client';

/**
 * CartItem Component
 * Individual item in the shopping cart with button-style size/color selection
 */

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, updateCartItem, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.cartItemId, newQuantity);
    }
  };

  const handleSizeChange = (newSize) => {
    updateCartItem(item.cartItemId, newSize, item.selectedColor);
  };

  const handleColorChange = (newColor) => {
    updateCartItem(item.cartItemId, item.selectedSize, newColor);
  };

  return (
    <div className="flex flex-col gap-4 py-6 border-b border-gray-200">
      <div className="flex gap-4 sm:gap-6">
        {/* Product Image */}
        <div className="relative w-24 sm:w-32 h-24 sm:h-32 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-gray-200">
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

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
            
            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.cartItemId)}
              className="text-gray-400 md:hover:text-red-600 transition-colors flex-shrink-0"
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
          </div>

          {/* Price */}
          <p className="text-sm sm:text-base text-gray-600 mb-3">
            <span className="font-bold text-black text-lg sm:text-xl">{item.price ? `${item.price} DH` : 'Price Coming Soon'}</span> each
          </p>
        </div>

        {/* Quantity Controls - Desktop */}
        <div className="hidden sm:flex flex-col items-end gap-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="px-3 py-2 md:hover:bg-gray-100 transition-colors text-lg font-bold"
              disabled={item.quantity <= 1}
            >
              −
            </button>
            <span className="px-3 py-2 font-medium min-w-[40px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="px-3 py-2 md:hover:bg-gray-100 transition-colors text-lg font-bold"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <p className="font-bold text-xl">
            {item.price ? `${item.price * item.quantity} DH` : 'Price Coming Soon'}
          </p>
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Size: <span className="text-black font-bold">{item.selectedSize}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {item.sizes && item.sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 font-medium text-sm sm:text-base transition-all ${
                item.selectedSize === size
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 md:hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Color: <span className="text-black font-bold">{item.selectedColor}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {item.colors && item.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color.name)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 font-medium text-sm sm:text-base transition-all flex items-center gap-2 ${
                item.selectedColor === color.name
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 md:hover:border-black'
              }`}
            >
              <span
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.hex }}
              ></span>
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Total - Mobile */}
      <div className="sm:hidden flex items-center justify-between pt-2 border-t border-gray-200">
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-3 py-2 hover:bg-gray-100 transition-colors text-lg font-bold"
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="px-3 py-2 font-medium min-w-[40px] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-3 py-2 hover:bg-gray-100 transition-colors text-lg font-bold"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className="font-bold text-xl">
          {item.price ? `${item.price * item.quantity} DH` : 'Price Coming Soon'}
        </p>
      </div>
    </div>
  );
}
