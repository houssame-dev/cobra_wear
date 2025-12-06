/**
 * Product Catalog for Cobraa Wear
 * All products available in the store
 */

import { productPlaceholders, getPlaceholderByCategory } from '@/lib/placeholder-images';

export const products = [
  {
    id: 1,
    slug: 'blasa-spider-hoodie',
    title: 'Blasa Spider Hoodie',
    category: 'hoodies',
    style: 'streetwear', // New: style field
    price: 229, // Hoodies: 229 DH
    description: 'Premium quality hoodie made from 100% organic cotton. Features a comfortable fit and durable construction. Perfect for everyday wear.',
    images: [
      '/images/hoodies/HOODIE_BLASA_SPIDER_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_BLASA_SPIDER_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    slug: 'coded-messages-tshirt',
    title: 'Coded Messages T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 139, // T-Shirts: 139 DH
    description: 'Premium quality t-shirt with coded messages design. Perfect for everyday wear with a comfortable, breathable fabric.',
    images: [
      '/images/tshirts/TSHIRT_CODED_MESSAGES_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    slug: 'berserk-sweatshirt',
    title: 'Berserk Sweatshirt',
    category: 'sweatshirts',
    style: 'anime',
    price: 149, // Sweatshirts: 149 DH
    description: 'Anime-inspired sweatshirt featuring Berserk design. Premium quality with comfortable fit.',
    images: [
      '/images/sweatshirts/SWEATSHIRT_BERSERK_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    id: 11,
    slug: 'berserk-sweatshirt-2',
    title: 'Berserk Sweatshirt 2',
    category: 'sweatshirts',
    style: 'anime',
    price: 149, // Sweatshirts: 149 DH
    description: 'Anime-inspired sweatshirt featuring Berserk design. Premium quality with comfortable fit.',
    images: [
      '/images/sweatshirts/SWEATSHIRT_BERSERK_FRONT (2).png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Anime Design',
      'Premium Cotton Blend',
      'Comfortable Fit',
      'Ribbed Cuffs',
      'Machine Washable',
    ],
  },
  {
    id: 12,
    slug: 'tokyo-ghoul-sweatshirt',
    title: 'Tokyo Ghoul Sweatshirt',
    category: 'sweatshirts',
    style: 'anime',
    price: 149, // Sweatshirts: 149 DH
    description: 'Anime-inspired sweatshirt featuring Tokyo Ghoul design. Premium quality with comfortable fit.',
    images: [
      '/images/sweatshirts/SWEATSHIRT_TOKYO_GHOUL_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Anime Design',
      'Premium Cotton Blend',
      'Comfortable Fit',
      'Ribbed Cuffs',
      'Machine Washable',
    ],
  },
  {
    id: 6,
    slug: 'always-desire-to-someone-hoodie',
    title: 'Always Desire To Someone Hoodie',
    category: 'hoodies',
    style: 'gang',
    price: 229, // Hoodies: 229 DH
    description: 'Trendy oversized hoodie with premium fabric. Perfect for a relaxed, comfortable style.',
    images: [
      '/images/hoodies/HOODIE_ALWAYS_DESIRE_TO_SOMEONE_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_ALWAYS_DESIRE_TO_SOMEONE_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    id: 10,
    slug: 'anime-levi-hoodie',
    title: 'Anime Levi Hoodie',
    category: 'hoodies',
    style: 'anime',
    price: 229, // Hoodies: 229 DH
    description: 'Anime-inspired hoodie featuring Levi design. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_ANIME_LEVI_back.png', // Back image (main)
      '/images/hoodies/HOODIE_ANIME_LEVI_front.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: true,
    features: [
      'Anime Design',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 13,
    slug: 'dog-solders-hoodie',
    title: 'Dog Solders Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Premium quality hoodie with unique design. Features a comfortable fit and durable construction.',
    images: [
      '/images/hoodies/HOODIE_DOG_SOLDERS_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_DOG_SOLDERS_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      '100% Organic Cotton',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 14,
    slug: 'eren-hoodie',
    title: 'Eren Hoodie',
    category: 'hoodies',
    style: 'anime',
    price: 229, // Hoodies: 229 DH
    description: 'Anime-inspired hoodie featuring Eren design. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_EREN_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_EREN_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Anime Design',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 15,
    slug: 'gymshark-hoodie',
    title: 'Gymshark Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Premium quality hoodie with Gymshark design. Perfect for fitness enthusiasts and everyday wear.',
    images: [
      '/images/hoodies/HOODIE_GYMSHARK_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_GYMSHARK_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      '100% Organic Cotton',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 16,
    slug: 'im-gonna-kill-you-hoodie',
    title: 'Im Gonna Kill You Hoodie',
    category: 'hoodies',
    style: 'gang',
    price: 229, // Hoodies: 229 DH
    description: 'Bold statement hoodie with premium fabric. Perfect for a confident, edgy style.',
    images: [
      '/images/hoodies/HOODIE_IM_GONNA_KILL_YOU_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_IM_GONNA_KILL_YOU_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Fleece',
      'Bold Design',
      'Comfortable Fit',
      'Kangaroo Pocket',
      'Ribbed Cuffs',
    ],
  },
  {
    id: 17,
    slug: 'messi-hoodie',
    title: 'Messi Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Premium quality hoodie featuring Messi design. Perfect for football fans and streetwear enthusiasts.',
    images: [
      '/images/hoodies/HOODIE_MESSI_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_MESSI_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      '100% Organic Cotton',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 18,
    slug: 'muscles-are-my-favorite-hoodie',
    title: 'Muscles Are My Favorite Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Fitness-inspired hoodie with bold statement. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_MUSCLES_ARE_MY_FAVORITE_ACESSORY_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_MUSCLES_ARE_MY_FAVORITE_ACESSORY_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Cotton Blend',
      'Bold Statement',
      'Comfortable Fit',
      'Kangaroo Pocket',
      'Machine Washable',
    ],
  },
  {
    id: 19,
    slug: 'need-money-for-bmw-hoodie',
    title: 'Need Money For BMW Hoodie',
    category: 'hoodies',
    style: 'gang',
    price: 229, // Hoodies: 229 DH
    description: 'Bold statement hoodie with premium fabric. Perfect for a confident, ambitious style.',
    images: [
      '/images/hoodies/HOODIE_NEED_MONEY_FOR_BMW_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_NEED_MONEY_FOR_BMW_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Fleece',
      'Bold Design',
      'Comfortable Fit',
      'Kangaroo Pocket',
      'Ribbed Cuffs',
    ],
  },
  {
    id: 20,
    slug: 'no-risk-no-story-hoodie',
    title: 'No Risk No Story Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Motivational hoodie with inspiring message. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_NO_RISK_NO_STORY_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_NO_RISK_NO_STORY_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Cotton Blend',
      'Motivational Design',
      'Comfortable Fit',
      'Kangaroo Pocket',
      'Machine Washable',
    ],
  },
  {
    id: 21,
    slug: 'ronaldo-hoodie',
    title: 'Ronaldo Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Premium quality hoodie featuring Ronaldo design. Perfect for football fans and streetwear enthusiasts.',
    images: [
      '/images/hoodies/HOODIE_RONALDO_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_RONALDO_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      '100% Organic Cotton',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 22,
    slug: 'strength-hoodie',
    title: 'Strength Hoodie',
    category: 'hoodies',
    style: 'streetwear',
    price: 229, // Hoodies: 229 DH
    description: 'Fitness-inspired hoodie with strength theme. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_STRENGTH_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_STRENGTH_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Premium Cotton Blend',
      'Fitness Design',
      'Comfortable Fit',
      'Kangaroo Pocket',
      'Machine Washable',
    ],
  },
  {
    id: 23,
    slug: 'tokyo-ghoul-hoodie',
    title: 'Tokyo Ghoul Hoodie',
    category: 'hoodies',
    style: 'anime',
    price: 229, // Hoodies: 229 DH
    description: 'Anime-inspired hoodie featuring Tokyo Ghoul design. Premium quality with comfortable fit.',
    images: [
      '/images/hoodies/HOODIE_TOKYO_GHOUL_BACK.png', // Back image (main)
      '/images/hoodies/HOODIE_TOKYO_GHOUL_FRONT.png', // Front image (swipe to view)
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
    ],
    inStock: true,
    featured: false,
    features: [
      'Anime Design',
      'Premium Quality Print',
      'Comfortable Fit',
      'Durable Construction',
      'Machine Washable',
    ],
  },
  {
    id: 7,
    slug: 'hustle-silence-tshirt',
    title: 'Hustle & Silence T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 139, // T-Shirts: 139 DH
    description: 'Premium quality t-shirt with hustle and silence design. Perfect fit and exceptional comfort.',
    images: [
      '/images/tshirts/TSHIRT_HUSTLE_&_SILENCE_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    id: 24,
    slug: 'secret-codes-tshirt',
    title: 'Secret Codes T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 139, // T-Shirts: 139 DH
    description: 'Premium quality t-shirt with secret codes design. Perfect for everyday wear with comfortable fit.',
    images: [
      '/images/tshirts/TSHIRT_SECRET CODES_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    id: 25,
    slug: 'until-they-ask-tshirt',
    title: 'Until They Ask T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 139, // T-Shirts: 139 DH
    description: 'Premium quality t-shirt with bold statement design. Perfect fit and exceptional comfort.',
    images: [
      '/images/tshirts/TSHIRT_UNTIL_THEY_ASK_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    id: 26,
    slug: 'urban-edge-apparel-tshirt',
    title: 'Urban Edge Apparel T-Shirt',
    category: 'tshirts',
    style: 'streetwear',
    price: 139, // T-Shirts: 139 DH
    description: 'Premium quality t-shirt with urban edge apparel design. Perfect for streetwear enthusiasts.',
    images: [
      '/images/tshirts/TSHIRT_URBAN_EDGE_APPAREL_FRONT.png', // Front design only
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#9CA3AF' },
      { name: 'Moss', hex: '#8A9A5B' },
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

