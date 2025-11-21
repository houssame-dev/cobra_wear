'use client';

/**
 * Hero Component
 * Modern premium hero section with animations and high-quality design
 */

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

// Featured Product - Define OUTSIDE component to prevent recreation
const FEATURED_PRODUCT = {
  id: 'hero-featured',
  title: 'Premium T-Shirt Collection',
  price: 129, // 129 DH
  images: ['/images/hero-product.png'],
  slug: 'featured-tshirt',
  category: 'tshirts',
  inStock: true,
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
  ],
};

export default function Hero() {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [isVisible, setIsVisible] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const isProcessingRef = useRef(false); // Use ref for immediate check
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsVisible(true);
    // Reset processing state when component mounts
    isProcessingRef.current = false;
    setIsAddingToCart(false);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const endDate = new Date('2025-11-23T17:00:00'); // 11/23/2025 5pm

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
              <span className="block">Premium</span>
              <span className="block">Style.</span>
              <span className="block text-gray-400">Your Design.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Discover our exclusive collection of premium clothing or create your own custom designs with our Print-On-Demand service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/products" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link 
                href="/pod" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:text-white"
              >
                <span className="relative z-10 flex items-center">
                  Print-On-Demand
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Main Product Showcase */}
              <div className="relative group">
                {/* Product Image Container */}
                <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/hero-product.png"
                    alt="Premium Cobra Wear T-Shirts"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Red Promo Badge - Top Left with Rotation */}
                  <div className="absolute top-8 left-0 z-10">
                    <div 
                      className="bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-base sm:text-lg animate-pulse"
                      style={{ transform: 'rotate(-45deg)' }}
                    >
                      50% OFF
                    </div>
                  </div>

                  {/* Price Tag with Countdown - Bottom */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="bg-black/90 backdrop-blur-sm text-white px-4 sm:px-6 py-4 rounded-2xl shadow-2xl">
                      {/* Countdown Timer */}
                      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[40px] sm:min-w-[50px]">
                            <span className="text-base sm:text-xl font-bold">{timeLeft.days}</span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Days</p>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold">:</span>
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[40px] sm:min-w-[50px]">
                            <span className="text-base sm:text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Hours</p>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold">:</span>
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[40px] sm:min-w-[50px]">
                            <span className="text-base sm:text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Mins</p>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold">:</span>
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[40px] sm:min-w-[50px]">
                            <span className="text-base sm:text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Secs</p>
                        </div>
                      </div>

                      {/* Price Display */}
                      <div className="border-t border-white/20 pt-3 space-y-3">
                        {/* Prices */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-base sm:text-lg lg:text-xl line-through text-gray-400 font-medium">258 DH</span>
                            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">129 DH</span>
                          </div>
                          <div className="bg-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg animate-bounce-slow">
                            <span className="text-xs sm:text-sm font-bold text-black">SAVE 129 DH</span>
                          </div>
                        </div>
                        
                        {/* Buy Now Button - Add to Cart */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            // Simple double-click prevention
                            if (isProcessingRef.current) {
                              return;
                            }
                            
                            isProcessingRef.current = true;
                            setIsAddingToCart(true);
                            
                            console.log('Adding to cart - quantity: 1');
                            
                            // Add product to cart (CartContext handles deduplication)
                            addToCart(FEATURED_PRODUCT, 'M', 'Black', 1);
                            
                            // Navigate to cart
                            setTimeout(() => {
                              router.push('/cart');
                              // Reset after navigation
                              setTimeout(() => {
                                isProcessingRef.current = false;
                                setIsAddingToCart(false);
                              }, 300);
                            }, 500);
                          }}
                          disabled={isAddingToCart}
                          className={`w-full text-center py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg ${
                            isAddingToCart 
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                              : 'bg-green-400 text-black hover:bg-green-500 hover:scale-[1.03] cursor-pointer'
                          }`}
                        >
                          {isAddingToCart ? 'Adding...' : 'Buy Now 🛒'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-600 rounded-full opacity-20 blur-2xl animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-black rounded-full animate-float-delayed"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-black rounded-tl-3xl -translate-x-2 -translate-y-2 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V0c-240 48-480 48-720 24C480 0 240 0 0 24v24z" fill="#fafafa"/>
        </svg>
      </div>

      {/* Trust Badges Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition-transform">
              <span>⭐</span>
              <span>4.9/5 Rating</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition-transform">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Shipping</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition-transform">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Fast Delivery</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition-transform">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {[
              { name: 'T-Shirts', image: '/images/categories/t-shirts.png', category: 'tshirts' },
              { name: 'Hoodies', image: '/images/categories/hoodies.png', category: 'hoodies' },
              { name: 'Shorts', image: '/images/categories/shorts.png', category: 'shorts' },
              { name: 'Caps', image: '/images/categories/caps.png', category: 'caps' },
              { name: 'Tote Bags', image: '/images/categories/tote-bags.png', category: 'bags' }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.category}`}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                {category.image ? (
                  <>
                    {/* Background Image */}
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </>
                ) : (
                  /* Fallback for items without images */
                  <div className="bg-white h-full p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center">
                    <div className="text-4xl sm:text-5xl mb-3 transition-transform group-hover:scale-110">{category.emoji}</div>
                    <h3 className="font-semibold text-sm sm:text-base group-hover:text-gray-600 transition-colors">{category.name}</h3>
                  </div>
                )}
              </Link>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 mt-16 sm:mt-20">
            Shop by Style
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Anime', image: '/images/styles/anime.png', desc: 'Japanese inspired', style: 'anime' },
              { name: 'Gang', image: '/images/styles/gang.png', desc: 'Street style', style: 'gang' },
              { name: 'Gaming', image: '/images/styles/gaming.png', desc: 'Gamer vibes', style: 'gaming' },
              { name: 'Streetwear', image: '/images/styles/streetwear.png', desc: 'Urban fashion', style: 'streetwear' },
              { name: 'Music / Rap', image: '/images/styles/music-rap.png', desc: 'Hip hop culture', style: 'music-rap' },
              { name: 'Movies / Series', image: '/images/styles/movies-series.png', desc: 'Pop culture icons', style: 'movies-series' }
            ].map((style) => (
              <Link
                key={style.name}
                href={`/products?style=${style.style}`}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                {style.image ? (
                  <>
                    {/* Background Image */}
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
                        {style.name}
                      </h3>
                    </div>
                  </>
                ) : (
                  /* Fallback for items without images */
                  <div className="bg-white h-full p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center">
                    <div className="text-4xl sm:text-5xl mb-3 transition-transform group-hover:scale-110">{style.emoji}</div>
                    <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-gray-600 transition-colors">{style.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{style.desc}</p>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
