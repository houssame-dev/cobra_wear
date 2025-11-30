/**
 * Product Catalog for Cobraa Wear
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
    price: 229, // Hoodies: 229 DH
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
    price: 139, // T-Shirts: 139 DH
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
    slug: 'classic-sweatshirt',
    title: 'Classic Sweatshirt',
    category: 'sweatshirts',
    style: 'streetwear',
    price: 149, // Sweatshirts: 149 DH
    description: 'Comfortable classic sweatshirt perfect for casual wear. Made with premium cotton blend fabric.',
    images: [
      productPlaceholders.hoodie, // Using hoodie placeholder as fallback
      productPlaceholders.hoodie,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Premium Cotton Blend',
      'Comfortable Fit',
      'Ribbed Cuffs',
      'Kangaroo Pocket',
      'Machine Washable',
    ],
  },
  {
    id: 6,
    slug: 'oversized-hoodie',
    title: 'Oversized Hoodie',
    category: 'hoodies',
    style: 'gang',
    price: 229, // Hoodies: 229 DH
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
    price: 139, // T-Shirts: 139 DH
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
    slug: 'premium-jacket',
    title: 'Premium Jacket',
    category: 'jackets',
    style: 'streetwear',
    price: null, // TODO: Price not available yet - Jackets
    description: 'Premium quality jacket with modern design. Perfect for all seasons with durable construction.',
    images: [
      productPlaceholders.hoodie, // Using hoodie placeholder as fallback
      productPlaceholders.hoodie,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Grey', hex: '#9CA3AF' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Water Resistant',
      'Premium Material',
      'Multiple Pockets',
      'Adjustable Cuffs',
      'Durable Zipper',
    ],
  },
  {
    id: 9,
    slug: 'classic-pants',
    title: 'Classic Pants',
    category: 'pants',
    style: 'streetwear',
    price: null, // TODO: Price not available yet - Pants
    description: 'Classic fit pants with premium fabric. Comfortable and stylish for everyday wear.',
    images: [
      productPlaceholders.hoodie, // Using hoodie placeholder as fallback
      productPlaceholders.hoodie,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Grey', hex: '#9CA3AF' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Fabric',
      'Classic Fit',
      'Elastic Waistband',
      'Multiple Pockets',
      'Easy Care',
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
  { id: 'sweatshirts', name: 'Sweatshirts', slug: 'sweatshirts' },
  { id: 'jackets', name: 'Jackets', slug: 'jackets' },
  { id: 'pants', name: 'Pants', slug: 'pants' },
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

