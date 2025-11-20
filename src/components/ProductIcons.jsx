/**
 * Product Icons Component
 * Minimal black and white SVG icons for POD products
 */

export const ProductIcons = {
  TShirt: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3L19 6V9H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V9H5V6L8 3H16Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6" strokeLinecap="round"/>
      <path d="M17 6C17 7.10457 17.8954 8 19 8C20.1046 8 21 7.10457 21 6" strokeLinecap="round"/>
    </svg>
  ),

  Hoodie: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3L19 6V9H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V9H5V6L8 3H16Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6" strokeLinecap="round"/>
      <path d="M17 6C17 7.10457 17.8954 8 19 8C20.1046 8 21 7.10457 21 6" strokeLinecap="round"/>
      <path d="M10 3V6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6V3" strokeLinecap="round"/>
    </svg>
  ),

  Sweatshirt: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3L19 6V9H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V9H5V6L8 3H16Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6" strokeLinecap="round"/>
      <path d="M17 6C17 7.10457 17.8954 8 19 8C20.1046 8 21 7.10457 21 6" strokeLinecap="round"/>
      <circle cx="12" cy="6" r="2"/>
    </svg>
  ),

  ToteBag: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" strokeLinecap="round"/>
      <path d="M6 6H18C19.1046 6 20 6.89543 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V8C4 6.89543 4.89543 6 6 6Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Cap: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13C3 13 5 11 12 11C19 11 21 13 21 13" strokeLinecap="round"/>
      <path d="M4 13V15C4 16.1046 4.89543 17 6 17H18C19.1046 17 20 16.1046 20 15V13" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="12" cy="8" rx="8" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Shorts: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 4H18V11L16 18H13V12H11V18H8L6 11V4Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 4H18" strokeLinecap="round"/>
    </svg>
  ),

  PhoneCase: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2" width="12" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="19" r="0.5" fill="currentColor"/>
      <path d="M9 2H15" strokeLinecap="round"/>
    </svg>
  ),
};

// Small icon version for grid
export const ProductIconSmall = ({ type }) => {
  const Icon = ProductIcons[type];
  if (!Icon) return null;
  
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <Icon />
    </div>
  );
};

// Large icon for selection
export const ProductIconLarge = ({ type, className = "" }) => {
  const Icon = ProductIcons[type];
  if (!Icon) return null;
  
  return (
    <div className={`w-16 h-16 flex items-center justify-center ${className}`}>
      <div className="scale-150">
        <Icon />
      </div>
    </div>
  );
};

