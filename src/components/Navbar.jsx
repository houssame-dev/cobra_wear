'use client';

/**
 * Navbar Component
 * Responsive navigation with hamburger menu for mobile
 */

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const pathname = usePathname();
  const cartCount = getCartItemsCount();
  const wishlistCount = getWishlistCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);
  
  // Check if we're on the home page
  const isHomePage = pathname === '/';

  // Set initial background on mount
  useEffect(() => {
    if (navRef.current && typeof window !== 'undefined') {
      const mobile = window.innerWidth < 768;
      const scrolled = window.scrollY > 10;
      if (mobile && !scrolled && isHomePage) {
        navRef.current.style.backgroundColor = 'transparent';
      } else {
        navRef.current.style.backgroundColor = 'white';
      }
    }
  }, [isHomePage]);

  // Update background color based on mobile, scroll state, and home page
  useEffect(() => {
    if (navRef.current) {
      if (isMobile && !scrolled && isHomePage) {
        navRef.current.style.backgroundColor = 'transparent';
      } else {
        navRef.current.style.backgroundColor = 'white';
      }
    }
  }, [isMobile, scrolled, isHomePage]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Set initial scroll state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Immediately update background when mobile state changes
      if (navRef.current) {
        if (mobile && !scrolled && isHomePage) {
          navRef.current.style.backgroundColor = 'transparent';
        } else {
          navRef.current.style.backgroundColor = 'white';
        }
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [scrolled, isHomePage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/pod', label: 'Print-On-Demand', ariaLabel: 'Print on demand custom designs' },
    { href: '/products?category=tshirts', label: 'T-Shirts', ariaLabel: 'Shop t-shirts' },
    { href: '/products?category=hoodies', label: 'Hoodies', ariaLabel: 'Shop hoodies' },
  ];

  // Icon color: white when transparent navbar (mobile at top on home page only), black otherwise
  const iconColor = isMobile && !scrolled && isHomePage ? 'text-white' : 'text-black';

  return (
    <nav 
      ref={navRef}
      className={`w-full md:border-b md:border-gray-200 border-transparent ${isMobile ? 'fixed' : 'sticky'} top-0 z-50 transition-all duration-300 ${
        scrolled ? 'md:shadow-md' : ''
      }`}
      style={{ 
        backgroundColor: isMobile && !scrolled && isHomePage ? 'transparent' : 'white'
      }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className={`${isMobile ? 'w-full' : 'max-w-7xl mx-auto'} px-4 sm:px-6 lg:px-8`}>
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity z-50 group"
            aria-label="Cobraa Wear home"
            onClick={closeMenu}
          >
            {/* Logo Image */}
            <div className={`relative w-10 h-10 sm:w-12 sm:h-12 ${isMobile && !scrolled && isHomePage ? 'brightness-0 invert' : ''}`}>
              <Image
                src="/images/cobraa_wear_logo_1.png"
                alt="Cobraa Wear Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" role="menubar">
            {/* Text Links */}
            <Link 
              href="/pod" 
              className="hover:text-gray-600 transition-colors font-medium"
              role="menuitem"
              aria-label="Print on demand custom designs"
            >
              Print-On-Demand
            </Link>
            <Link 
              href="/products?category=tshirts" 
              className="hover:text-gray-600 transition-colors font-medium"
              role="menuitem"
              aria-label="Shop t-shirts"
            >
              T-Shirts
            </Link>
            <Link 
              href="/products?category=hoodies" 
              className="hover:text-gray-600 transition-colors font-medium"
              role="menuitem"
              aria-label="Shop hoodies"
            >
              Hoodies
            </Link>
            
            {/* Icon Links */}
            <div className="flex items-center space-x-4">
              {/* Wishlist Icon */}
              <Link 
                href="/wishlist" 
                className="relative hover:text-gray-600 transition-all duration-300 hover:scale-110"
                role="menuitem"
                aria-label={wishlistCount > 0 ? `Wishlist with ${wishlistCount} items` : 'Wishlist (empty)'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <Link 
                href="/cart" 
                className="relative hover:text-gray-600 transition-all duration-300 hover:scale-110"
                role="menuitem"
                aria-label={cartCount > 0 ? `Shopping cart with ${cartCount} items` : 'Shopping cart (empty)'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>

              {/* Language Icon (placeholder - functionality later) */}
              <button 
                className="hover:text-gray-600 transition-all duration-300 hover:scale-110"
                aria-label="Change language"
                title="Language (Coming Soon)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Icons */}
          <div className="flex lg:hidden items-center space-x-3 z-50">
            {/* Mobile Wishlist Icon */}
            <Link 
              href="/wishlist" 
              className={`relative ${iconColor} transition-all duration-300 active:scale-95 ${scrolled || !isMobile ? 'hover:text-gray-600' : 'hover:text-gray-200'}`}
              aria-label={wishlistCount > 0 ? `Wishlist with ${wishlistCount} items` : 'Wishlist (empty)'}
              onClick={closeMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Mobile Cart Icon */}
            <Link 
              href="/cart" 
              className={`relative ${iconColor} transition-all duration-300 active:scale-95 ${scrolled || !isMobile ? 'hover:text-gray-600' : 'hover:text-gray-200'}`}
              aria-label={cartCount > 0 ? `Shopping cart with ${cartCount} items` : 'Shopping cart (empty)'}
              onClick={closeMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Language Icon */}
            <button 
              className={`${iconColor} transition-all duration-300 active:scale-95 ${scrolled || !isMobile ? 'hover:text-gray-600' : 'hover:text-gray-200'}`}
              aria-label="Change language"
              title="Language (Coming Soon)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 ${scrolled || !isMobile || !isHomePage ? 'hover:bg-gray-100' : 'hover:bg-white/20'} rounded-lg transition-all duration-300 active:scale-95 ml-1`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`block h-0.5 w-full ${isMobile && !scrolled && isHomePage ? 'bg-white' : 'bg-black'} transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-full ${isMobile && !scrolled && isHomePage ? 'bg-white' : 'bg-black'} transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-full ${isMobile && !scrolled && isHomePage ? 'bg-white' : 'bg-black'} transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu - Full Height */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out h-screen ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="menu"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header with Brand */}
          <div className="border-b border-gray-100 px-6 py-5 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Image */}
              <div className="relative w-10 h-10">
                <Image
                  src="/images/cobraa_wear_logo_1.png"
                  alt="Cobraa Wear Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-black rounded-xl transition-all duration-200 active:scale-95"
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                <span>{link.label}</span>
                <svg className="ml-auto w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <p className="text-sm font-semibold text-gray-900 mb-4">Follow Us</p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/cobraawear_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@cobraawear_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/mouhcinprint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Follow us on X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-xs text-gray-500 text-center mt-6">
              © 2025 Cobraa Wear
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
