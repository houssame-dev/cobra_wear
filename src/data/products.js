/**
 * Product Catalog for Coobraa
 * All products available in the store
 */

import { productPlaceholders, getPlaceholderByCategory } from '@/lib/placeholder-images';

export const products = [
  {
    id: 1,
    slug: 'classic-black-hoodie',
    title: 'Classic Black Hoodie',
    category: 'hoodies',
    style: 'streetwear', // New: style field
    price: 49.99,
    description: 'Premium quality hoodie made from 100% organic cotton. Features a comfortable fit and durable construction. Perfect for everyday wear.',
    images: [
      productPlaceholders.hoodie,
      productPlaceholders.hoodie,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Grey', hex: '#9CA3AF' },
    ],
    inStock: true,
    featured: true,
    features: [
      '100% Organic Cotton',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 2,
    slug: 'minimal-white-tshirt',
    title: 'Minimal White T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 29.99,
    description: 'Clean and minimal t-shirt design. Perfect for everyday wear with a comfortable, breathable fabric.',
    images: [
      productPlaceholders.tshirt,
      productPlaceholders.tshirt,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Breathable Fabric',
      'Classic Fit',
      'Soft Touch',
      'Pre-Shrunk',
      'Easy Care',
    ],
  },
  {
    id: 3,
    slug: 'premium-grey-shorts',
    title: 'Premium Grey Shorts',
    category: 'shorts',
    style: 'streetwear',
    price: 39.99,
    description: 'Comfortable athletic shorts perfect for workouts or casual wear. Made with moisture-wicking fabric.',
    images: [
      productPlaceholders.shorts,
      productPlaceholders.shorts,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Moisture-Wicking',
      'Athletic Fit',
      'Elastic Waistband',
      'Side Pockets',
      'Quick Dry',
    ],
  },
  {
    id: 4,
    slug: 'urban-black-cap',
    title: 'Urban Black Cap',
    category: 'caps',
    style: 'gang',
    price: 24.99,
    description: 'Stylish urban cap with adjustable strap. Features embroidered details and quality construction.',
    images: [
      productPlaceholders.cap,
      productPlaceholders.cap,
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Grey', hex: '#9CA3AF' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Adjustable Strap',
      'Embroidered Logo',
      'Curved Brim',
      'Breathable Fabric',
      'Unstructured',
    ],
  },
  {
    id: 5,
    slug: 'eco-tote-bag',
    title: 'Eco Tote Bag',
    category: 'bags',
    style: 'streetwear',
    price: 19.99,
    description: 'Eco-friendly tote bag made from sustainable materials. Spacious and durable for everyday use.',
    images: [
      productPlaceholders.bag,
      productPlaceholders.bag,
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Eco-Friendly Material',
      'Reinforced Handles',
      'Large Capacity',
      'Reusable',
      'Machine Washable',
    ],
  },
  {
    id: 6,
    slug: 'oversized-hoodie',
    title: 'Oversized Hoodie',
    category: 'hoodies',
    style: 'gang',
    price: 54.99,
    description: 'Trendy oversized hoodie with premium fabric. Perfect for a relaxed, comfortable style.',
    images: [
      productPlaceholders.hoodie,
      productPlaceholders.hoodie,
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Cream', hex: '#FFFDD0' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Oversized Fit',
      'Premium Fleece',
      'Soft Interior',
      'Kangaroo Pocket',
      'Ribbed Cuffs',
    ],
  },
  {
    id: 7,
    slug: 'essential-black-tshirt',
    title: 'Essential Black T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 27.99,
    description: 'Essential wardrobe staple. Premium black t-shirt with perfect fit and exceptional comfort.',
    images: [
      productPlaceholders.tshirt,
      productPlaceholders.tshirt,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Cotton',
      'Regular Fit',
      'Reinforced Stitching',
      'Fade Resistant',
      'Tagless Design',
    ],
  },
  {
    id: 8,
    slug: 'sport-cap-white',
    title: 'Sport Cap White',
    category: 'caps',
    style: 'streetwear',
    price: 22.99,
    description: 'Clean white sport cap perfect for any occasion. Adjustable fit with breathable design.',
    images: [
      productPlaceholders.cap,
      productPlaceholders.cap,
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Lightweight',
      'Adjustable Back',
      'Moisture Wicking',
      'UV Protection',
      'Easy Clean',
    ],
  },
];

// Helper functions
export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'hoodies', name: 'Hoodies', slug: 'hoodies' },
  { id: 'tshirts', name: 'T-Shirts', slug: 'tshirts' },
  { id: 'shorts', name: 'Shorts', slug: 'shorts' },
  { id: 'caps', name: 'Caps', slug: 'caps' },
  { id: 'bags', name: 'Bags', slug: 'bags' },
];

export const styles = [
  { id: 'all', name: 'All Styles', slug: 'all' },
  { id: 'anime', name: 'Anime', slug: 'anime' },
  { id: 'gang', name: 'Gang', slug: 'gang' },
  { id: 'gaming', name: 'Gaming', slug: 'gaming' },
  { id: 'streetwear', name: 'Streetwear', slug: 'streetwear' },
  { id: 'music-rap', name: 'Music / Rap', slug: 'music-rap' },
  { id: 'movies-series', name: 'Movies / Series', slug: 'movies-series' },
];

export function getProductsByStyle(style) {
  return products.filter((product) => product.style === style);
}

