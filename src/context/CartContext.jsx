'use client';

/**
 * Cart Context
 * Global state management for shopping cart
 * Persists to localStorage
 */

import { createContext, useContext, useState, useEffect, useRef } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track processed operations to prevent React Strict Mode duplicates
  const processedOpsRef = useRef(new Set());
  const operationCounterRef = useRef(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('coobraa_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('coobraa_cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // Add item to cart
  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;
    
    // Generate unique operation ID for this add operation
    const operationId = `${cartItemId}-${++operationCounterRef.current}`;
    console.log(`🔐 Starting operation: ${operationId}`);
    
    setCart((prevCart) => {
      // Check if this operation was already processed (React Strict Mode calls this twice)
      if (processedOpsRef.current.has(operationId)) {
        console.log(`🔒 Operation ${operationId} already processed, skipping duplicate`);
        return prevCart; // Return unchanged cart
      }
      
      // Mark this operation as processed
      processedOpsRef.current.add(operationId);
      
      // Check if item with same product, size, and color already exists
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        console.log(`✅ Updated quantity: ${newCart[existingItemIndex].quantity}`);
        return newCart;
      } else {
        // Add new item with stable ID
        console.log(`✅ Added new item to cart (operation: ${operationId})`);
        return [
          ...prevCart,
          {
            ...product,
            selectedSize,
            selectedColor,
            quantity,
            cartItemId,
          },
        ];
      }
    });
    
    // Clean up processed operation after a short delay
    setTimeout(() => {
      processedOpsRef.current.delete(operationId);
      console.log(`🔓 Operation ${operationId} cleaned up`);
    }, 1000);
  };

  // Remove item from cart
  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  // Update item quantity
  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  // Update item size or color
  const updateCartItem = (cartItemId, newSize, newColor) => {
    setCart((prevCart) => {
      // Find the item to update
      const itemToUpdate = prevCart.find((item) => item.cartItemId === cartItemId);
      if (!itemToUpdate) return prevCart;

      // Remove the old item
      const cartWithoutOldItem = prevCart.filter((item) => item.cartItemId !== cartItemId);

      // Check if item with new size/color already exists
      const existingItemIndex = cartWithoutOldItem.findIndex(
        (item) =>
          item.id === itemToUpdate.id &&
          item.selectedSize === newSize &&
          item.selectedColor === newColor
      );

      if (existingItemIndex > -1) {
        // Merge with existing item (add quantities)
        const newCart = [...cartWithoutOldItem];
        newCart[existingItemIndex].quantity += itemToUpdate.quantity;
        return newCart;
      } else {
        // Add updated item
        return [
          ...cartWithoutOldItem,
          {
            ...itemToUpdate,
            selectedSize: newSize,
            selectedColor: newColor,
            cartItemId: `${itemToUpdate.id}-${newSize}-${newColor}`,
          },
        ];
      }
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get cart totals
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateCartItem,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isLoaded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

