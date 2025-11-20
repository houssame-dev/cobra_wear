/**
 * Placeholder Image Generator
 * Creates SVG placeholder images for products
 */

// Generate a placeholder SVG as a data URI
export function generatePlaceholderImage(text, bgColor = '#f3f4f6', textColor = '#6b7280') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <rect width="600" height="600" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="45%" 
        font-family="system-ui, sans-serif" 
        font-size="48" 
        font-weight="700" 
        fill="${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >${text}</text>
      <text 
        x="50%" 
        y="55%" 
        font-family="system-ui, sans-serif" 
        font-size="24" 
        fill="${textColor}" 
        opacity="0.6" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >Image Coming Soon</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Predefined placeholder images for product categories
export const productPlaceholders = {
  hoodie: generatePlaceholderImage('HOODIE', '#1f2937', '#f9fafb'),
  tshirt: generatePlaceholderImage('T-SHIRT', '#374151', '#f9fafb'),
  shorts: generatePlaceholderImage('SHORTS', '#4b5563', '#f9fafb'),
  cap: generatePlaceholderImage('CAP', '#6b7280', '#ffffff'),
  bag: generatePlaceholderImage('BAG', '#9ca3af', '#1f2937'),
};

// Get placeholder based on category
export function getPlaceholderByCategory(category) {
  const normalized = category.toLowerCase();
  
  if (normalized.includes('hoodie')) return productPlaceholders.hoodie;
  if (normalized.includes('shirt') || normalized.includes('tshirt')) return productPlaceholders.tshirt;
  if (normalized.includes('short')) return productPlaceholders.shorts;
  if (normalized.includes('cap')) return productPlaceholders.cap;
  if (normalized.includes('bag') || normalized.includes('tote')) return productPlaceholders.bag;
  
  // Default placeholder
  return generatePlaceholderImage('PRODUCT', '#d1d5db', '#374151');
}

