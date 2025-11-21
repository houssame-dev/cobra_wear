'use client';

/**
 * Navbar Component
 * Responsive navigation with hamburger menu for mobile
 */

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { href: '/', label: 'Home', ariaLabel: 'Go to home page' },
    { href: '/products', label: 'Shop', ariaLabel: 'View all products' },
    { href: '/products?category=tshirts', label: 'T-Shirts', ariaLabel: 'Shop t-shirts' },
    { href: '/products?category=hoodies', label: 'Hoodies', ariaLabel: 'Shop hoodies' },
    { href: '/products?category=caps', label: 'Caps', ariaLabel: 'Shop caps' },
    { href: '/pod', label: 'Custom POD', ariaLabel: 'Print on demand custom designs' },
  ];

  return (
    <nav 
      className={`border-b border-gray-200 bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity z-50"
            aria-label="Cobra Wear home"
            onClick={closeMenu}
          >
            COBRA WEAR
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" role="menubar">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="hover:text-gray-600 transition-colors font-medium"
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/pod" 
              className="hover:text-gray-600 transition-colors font-medium"
              role="menuitem"
              aria-label="Print on demand custom designs"
            >
              POD
            </Link>
            
            {/* Cart Icon */}
            <Link 
              href="/cart" 
              className="relative hover:text-gray-600 transition-colors"
              role="menuitem"
              aria-label={cartCount > 0 ? `Shopping cart with ${cartCount} items` : 'Shopping cart (empty)'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              
              {cartCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="flex lg:hidden items-center space-x-4 z-50">
            {/* Mobile Cart Icon */}
            <Link 
              href="/cart" 
              className="relative hover:text-gray-600 transition-colors"
              aria-label={cartCount > 0 ? `Shopping cart with ${cartCount} items` : 'Shopping cart (empty)'}
              onClick={closeMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              
              {cartCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="menu"
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Menu Header */}
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-black rounded-lg transition-colors"
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="border-t border-gray-200 p-6 space-y-3">
            <Link
              href="/cart"
              onClick={closeMenu}
              className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
            <p className="text-xs text-gray-500 text-center">
              © 2025 Cobra Wear
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
