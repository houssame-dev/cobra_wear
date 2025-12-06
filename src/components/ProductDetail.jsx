'use client';

/**
 * ProductDetail Component
 * Interactive product detail with Add to Cart
 */

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { trackAddToCart } from '@/lib/analytics';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  // Image handling for hoodies (back/front)
  const backImage = product.images && product.images[0];
  const frontImage = product.images && product.images[1];
  const hasMultipleImages = product.category === 'hoodies' && backImage && frontImage;
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 0 = back, 1 = front
  
  // Swipe handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    
    // Track analytics
    trackAddToCart(product);

    // Reset notification after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/cart');
  };

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    if (!hasMultipleImages) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!hasMultipleImages) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!hasMultipleImages) return;
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe left - show front
        setCurrentImageIndex(1);
      } else {
        // Swipe right - show back
        setCurrentImageIndex(0);
      }
    }
  };

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex(1); // Show front on hover
    }
  };

  const handleMouseLeave = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex(0); // Show back when not hovering
    }
  };

  return (
    <>
      {/* Success Notification */}
      {addedToCart && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-in">
          <div className="flex items-center gap-3">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium">Added to cart!</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div 
            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Back Image (Main) */}
            {backImage ? (
              <Image
                src={backImage}
                alt={`${product.title} - Back view`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  hasMultipleImages && currentImageIndex === 1 ? 'opacity-0' : 'opacity-100'
                }`}
                priority={currentImageIndex === 0}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-gray-300"
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

            {/* Front Image (Swipe/Hover to view) */}
            {hasMultipleImages && frontImage && (
              <Image
                src={frontImage}
                alt={`${product.title} - Front view`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                }`}
                priority={currentImageIndex === 1}
              />
            )}

            {/* Swipe Indicator (Mobile) */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === 0 ? 'bg-black' : 'bg-gray-400'
                }`}></div>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === 1 ? 'bg-black' : 'bg-gray-400'
                }`}></div>
              </div>
            )}

          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-3">{product.title}</h1>
            <p className="text-3xl font-bold">{product.price ? `${product.price} DH` : 'Price Coming Soon'}</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div>
            <label className="block font-semibold mb-3 text-lg">
              Size: <span className="text-gray-600 font-normal">{selectedSize}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 md:hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block font-semibold mb-3 text-lg">
              Color: <span className="text-gray-600 font-normal">{selectedColor}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`px-6 py-3 border-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedColor === color.name
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 md:hover:border-black'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      backgroundColor: color.hex,
                      borderColor: color.hex === '#FFFFFF' ? '#e5e7eb' : color.hex,
                    }}
                  ></div>
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-semibold mb-3 text-lg">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg md:hover:border-black transition-colors font-medium text-xl"
              >
                −
              </button>
              <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg md:hover:border-black transition-colors font-medium text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Buttons */}
          <div className="space-y-3 pt-6">
            {product.inStock ? (
              product.price ? (
                <>
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Add to Cart - {product.price * quantity} DH
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full btn-secondary text-lg py-4"
                  >
                    Buy Now
                  </button>
                </>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 cursor-not-allowed text-lg py-4 rounded-lg"
                >
                  Price Coming Soon
                </button>
              )
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-600 px-8 py-4 rounded-lg font-medium cursor-not-allowed text-lg"
              >
                Out of Stock
              </button>
            )}
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-xl mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

