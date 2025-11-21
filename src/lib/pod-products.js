/**
 * POD Product Configuration
 * Defines all product types, sizes, colors, and upload requirements
 */

export const POD_PRODUCTS = [
  {
    id: 'tshirt',
    name: 'T-Shirt',
    icon: 'TShirt',
    recommended: false,
    requiresSize: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Beige'],
    uploadAreas: [
      { id: 'front', name: 'Front Design', required: true, recommended: '4000×4000px' },
      { id: 'back', name: 'Back Design', required: false, recommended: '4000×4000px' },
      { id: 'leftSleeve', name: 'Left Sleeve', required: false, recommended: '1000×1000px' },
      { id: 'rightSleeve', name: 'Right Sleeve', required: false, recommended: '1000×1000px' },
    ],
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    icon: 'Hoodie',
    recommended: false,
    requiresSize: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy'],
    uploadAreas: [
      { id: 'front', name: 'Front Design', required: true, recommended: '4000×4000px' },
      { id: 'back', name: 'Back Design', required: false, recommended: '4000×4000px' },
      { id: 'leftSleeve', name: 'Left Sleeve', required: false, recommended: '1000×1000px' },
      { id: 'rightSleeve', name: 'Right Sleeve', required: false, recommended: '1000×1000px' },
      { id: 'hood', name: 'Hood Inside', required: false, recommended: '2000×2000px' },
    ],
  },
  {
    id: 'sweatshirt',
    name: 'Sweatshirt',
    icon: 'Sweatshirt',
    recommended: false,
    requiresSize: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Burgundy'],
    uploadAreas: [
      { id: 'front', name: 'Front Design', required: true, recommended: '4000×4000px' },
      { id: 'back', name: 'Back Design', required: false, recommended: '4000×4000px' },
      { id: 'leftSleeve', name: 'Left Sleeve', required: false, recommended: '1000×1000px' },
      { id: 'rightSleeve', name: 'Right Sleeve', required: false, recommended: '1000×1000px' },
    ],
  },
  {
    id: 'totebag',
    name: 'Tote Bag',
    icon: 'ToteBag',
    recommended: false,
    requiresSize: false,
    sizes: [],
    colors: ['Natural', 'Black', 'Navy'],
    uploadAreas: [
      { id: 'front', name: 'Front Design', required: true, recommended: '4000×4000px' },
    ],
  },
  {
    id: 'cap',
    name: 'Cap',
    icon: 'Cap',
    recommended: false,
    requiresSize: false,
    sizes: [],
    colors: ['Black', 'White', 'Navy', 'Beige'],
    uploadAreas: [
      { id: 'front', name: 'Front Embroidery', required: true, recommended: '2000×2000px' },
      { id: 'back', name: 'Back Embroidery', required: false, recommended: '2000×2000px' },
    ],
  },
  {
    id: 'shorts',
    name: 'Shorts',
    icon: 'Shorts',
    recommended: false,
    requiresSize: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy', 'Olive'],
    uploadAreas: [
      { id: 'front', name: 'Front Design', required: true, recommended: '3000×3000px' },
      { id: 'back', name: 'Back Design', required: false, recommended: '3000×3000px' },
    ],
  },
  {
    id: 'phonecase',
    name: 'Phone Case',
    icon: 'PhoneCase',
    recommended: false,
    requiresSize: false,
    requiresPhoneModel: true,
    sizes: [],
    phoneModels: [
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14 Pro Max',
      'iPhone 14 Pro',
      'iPhone 14',
      'iPhone 13',
      'Samsung Galaxy S24',
      'Samsung Galaxy S23',
      'Google Pixel 8',
    ],
    colors: ['Clear', 'Black', 'White'],
    uploadAreas: [
      { id: 'design', name: 'Case Design', required: true, recommended: '3000×4000px' },
    ],
  },
];

// Helper functions
export function getProductById(id) {
  return POD_PRODUCTS.find((p) => p.id === id);
}

export function getProductByName(name) {
  return POD_PRODUCTS.find((p) => p.name === name);
}

export function getRecommendedProducts() {
  return POD_PRODUCTS.filter((p) => p.recommended);
}

export function productRequiresSize(productId) {
  const product = getProductById(productId);
  return product?.requiresSize || false;
}

export function productRequiresPhoneModel(productId) {
  const product = getProductById(productId);
  return product?.requiresPhoneModel || false;
}

export function getUploadAreas(productId) {
  const product = getProductById(productId);
  return product?.uploadAreas || [];
}

export function getRequiredUploadAreas(productId) {
  const areas = getUploadAreas(productId);
  return areas.filter((area) => area.required);
}

// Image validation constants
export const IMAGE_VALIDATION = {
  maxSize: 10 * 1024 * 1024, // 10MB
  minWidth: 500,
  minHeight: 500,
  acceptedFormats: ['image/jpeg', 'image/png', 'image/webp'],
  acceptedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
};

