# Responsive Breakpoints Guide - Cobra Wear

**Complete guide to all responsive breakpoints in your e-commerce store**

---

## 📱 **Tailwind CSS Breakpoints**

Your site uses Tailwind's default breakpoint system:

| Breakpoint | Min Width | Devices | Tailwind Prefix |
|------------|-----------|---------|-----------------|
| Mobile (default) | 0px | Small phones | *(no prefix)* |
| Small | 640px | Large phones, small tablets | `sm:` |
| Medium | 768px | Tablets | `md:` |
| Large | 1024px | Desktops | `lg:` |
| Extra Large | 1280px | Large desktops | `xl:` |
| 2X Large | 1536px | Ultra-wide screens | `2xl:` |

---

## 🎨 **Component Breakdowns**

### **1. Hero Section**

#### **Typography:**
```jsx
// Headline
text-5xl sm:text-6xl lg:text-7xl xl:text-8xl

// Mobile: 48px
// Small: 60px
// Large: 72px
// XL: 96px

// Description
text-lg sm:text-xl lg:text-2xl

// Mobile: 18px
// Small: 20px
// Large: 24px
```

#### **Spacing:**
```jsx
py-16 sm:py-20 lg:py-28

// Mobile: 64px
// Small: 80px
// Large: 112px
```

#### **Layout:**
```jsx
grid-cols-1 lg:grid-cols-2

// Mobile: Single column (stacked)
// Large+: Two columns (side-by-side)
```

---

### **2. Navigation Bar**

#### **Desktop (lg+):**
```jsx
<div className="hidden lg:flex items-center space-x-8">
  {/* Shows all nav links horizontally */}
</div>
```

#### **Mobile (< lg):**
```jsx
<div className="flex lg:hidden items-center space-x-4">
  {/* Shows hamburger menu button */}
</div>
```

#### **Mobile Menu:**
```jsx
w-full sm:w-80

// Mobile: Full width
// Small+: 320px fixed width
```

---

### **3. Product Grid**

#### **Grid Columns:**
```jsx
grid-cols-2 md:grid-cols-3 lg:grid-cols-4

// Mobile (< 768px): 2 columns
// Tablet (768px - 1023px): 3 columns
// Desktop (1024px+): 4 columns
```

#### **Gap Spacing:**
```jsx
gap-4 sm:gap-6 lg:gap-8

// Mobile: 16px
// Small: 24px
// Large: 32px
```

---

### **4. Product Card**

#### **Padding:**
```jsx
p-3 sm:p-4 lg:p-6

// Mobile: 12px
// Small: 16px
// Large: 24px
```

#### **Typography:**
```jsx
// Title
text-sm sm:text-base lg:text-lg

// Mobile: 14px
// Small: 16px
// Large: 18px

// Price
text-lg sm:text-xl lg:text-2xl

// Mobile: 18px
// Small: 20px
// Large: 24px
```

#### **Button:**
```jsx
py-2.5 sm:py-3
text-sm sm:text-base

// Mobile: 10px padding, 14px text
// Small: 12px padding, 16px text
```

#### **Icon Placeholder:**
```jsx
w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24

// Mobile: 64x64px
// Small: 80x80px
// Large: 96x96px
```

---

### **5. Page Headers**

#### **All Page Headers:**
```jsx
// Title
text-3xl sm:text-4xl md:text-5xl lg:text-6xl

// Mobile: 30px
// Small: 36px
// Medium: 48px
// Large: 60px

// Subtitle
text-sm sm:text-base lg:text-lg

// Padding
py-12 sm:py-16 lg:py-20

// Mobile: 48px
// Small: 64px
// Large: 80px
```

---

### **6. Category/Style Filters**

#### **Buttons:**
```jsx
px-4 sm:px-6 py-2 sm:py-3
text-sm sm:text-base

// Mobile: 16px/8px padding, 14px text
// Small: 24px/12px padding, 16px text
```

#### **Gap:**
```jsx
gap-2 sm:gap-3

// Mobile: 8px
// Small: 12px
```

---

### **7. Cart & Checkout**

#### **Grid Layout:**
```jsx
grid-cols-1 lg:grid-cols-3

// Mobile: Single column (stacked)
// Large+: 2 columns (form) + 1 column (summary)
```

#### **Form Padding:**
```jsx
p-4 sm:p-6 md:p-8

// Mobile: 16px
// Small: 24px
// Medium: 32px
```

---

### **8. Homepage Sections**

#### **Featured Products:**
```jsx
py-16 sm:py-20 lg:py-24

// Mobile: 64px
// Small: 80px
// Large: 96px
```

#### **Features Grid:**
```jsx
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

// Mobile: 1 column
// Small: 2 columns
// Large: 4 columns
```

---

### **9. POD Page**

#### **Info Cards Grid:**
```jsx
grid-cols-1 sm:grid-cols-2 md:grid-cols-3

// Mobile: 1 column
// Small: 2 columns
// Medium: 3 columns
```

#### **Special Case - 3rd Card:**
```jsx
sm:col-span-2 md:col-span-1

// On small screens, 3rd card spans 2 columns (centered)
// On medium+, takes 1 column
```

---

## 📊 **Common Patterns**

### **Container:**
```jsx
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Always: 
// - Max width 1280px
// - Centered
// - Mobile: 16px side padding
// - Small: 24px side padding
// - Large: 32px side padding
```

### **Section Padding (Vertical):**
```jsx
// Large sections
py-16 sm:py-20 lg:py-24

// Medium sections
py-12 sm:py-16 lg:py-20

// Small sections
py-8 sm:py-12
```

### **Text Scaling:**
```jsx
// Headings
text-3xl sm:text-4xl md:text-5xl lg:text-6xl

// Subheadings
text-xl sm:text-2xl md:text-3xl

// Body
text-base sm:text-lg lg:text-xl

// Small text
text-sm sm:text-base
```

### **Spacing Between Elements:**
```jsx
// Large gaps
gap-6 sm:gap-8 lg:gap-12

// Medium gaps
gap-4 sm:gap-6 lg:gap-8

// Small gaps
gap-2 sm:gap-3 lg:gap-4
```

---

## 🎯 **Specific Device Sizes**

### **Mobile Phones:**

#### **iPhone SE (375px):**
- 2-column product grid ✅
- Hamburger menu ✅
- Stacked layouts ✅
- Small text sizes ✅

#### **iPhone 12/13/14 (390px):**
- Same as iPhone SE
- Slightly more breathing room

#### **iPhone 14 Pro Max (430px):**
- Still mobile layout
- More comfortable spacing

### **Tablets:**

#### **iPad Mini (768px):**
- 3-column product grid ✅
- Tablet-optimized text sizes
- Still uses hamburger menu (< 1024px)

#### **iPad Air/Pro (820px - 1024px):**
- 3-column product grid ✅
- Larger text sizes
- Approaching desktop layout

### **Desktop:**

#### **Laptop (1280px):**
- 4-column product grid ✅
- Horizontal navigation ✅
- Desktop layout fully active

#### **Large Desktop (1440px):**
- Same as laptop
- More breathing room
- Content stays centered (max-w-7xl)

#### **Ultra-wide (1920px+):**
- Same as laptop
- Content centered with large margins
- Very comfortable reading

---

## 🧪 **Testing Each Breakpoint**

### **Chrome DevTools:**

1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select preset or enter custom width
4. Test these widths:
   - 375px (Mobile)
   - 640px (Small breakpoint)
   - 768px (Tablet)
   - 1024px (Desktop breakpoint)
   - 1280px (Large desktop)

### **What to Check:**

✅ **Mobile (< 640px):**
- 2 product columns
- Hamburger menu visible
- Text readable
- Buttons tap-friendly
- No horizontal scroll

✅ **Small (640px - 767px):**
- Text slightly larger
- Padding increases
- Still hamburger menu
- 2 product columns

✅ **Medium (768px - 1023px):**
- 3 product columns
- Larger text
- Still hamburger menu
- Better spacing

✅ **Large (1024px+):**
- 4 product columns
- Horizontal navigation (no hamburger)
- Desktop layout
- Generous spacing

---

## 📐 **Responsive Design Principles Used**

### **1. Mobile-First:**
Start with mobile, enhance for larger screens:
```jsx
// ✅ Good (mobile-first)
text-sm sm:text-base lg:text-lg

// ❌ Avoid (desktop-first)
text-lg lg:text-sm
```

### **2. Fluid Typography:**
Text scales smoothly across breakpoints:
```jsx
text-3xl sm:text-4xl md:text-5xl lg:text-6xl
```

### **3. Flexible Grids:**
Columns adapt to screen size:
```jsx
grid-cols-2 md:grid-cols-3 lg:grid-cols-4
```

### **4. Progressive Enhancement:**
Add features as screen size increases:
```jsx
// Mobile: Simple
// Tablet: More features
// Desktop: Full features
```

### **5. Touch-Friendly:**
Larger tap targets on mobile:
```jsx
py-3 sm:py-2.5  // Larger on mobile, smaller on desktop
```

---

## 🎨 **Quick Reference Table**

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Product Grid** | 2 cols | 3 cols | 4 cols |
| **Navigation** | Hamburger | Hamburger | Horizontal |
| **Hero Layout** | Stacked | Stacked | Side-by-side |
| **Hero Title** | 48px | 60px | 72-96px |
| **Section Padding** | 48-64px | 64-80px | 80-96px |
| **Container Padding** | 16px | 24px | 32px |
| **Card Padding** | 12px | 16px | 24px |
| **Button Text** | 14px | 14px | 16px |
| **Body Text** | 14px | 16px | 18px |
| **Features Grid** | 1 col | 2 cols | 4 cols |

---

## 🚀 **Performance Tips**

### **Images:**
All images are responsive:
```jsx
<Image
  src={image}
  fill
  className="object-cover"
/>
```
- Mobile: Loads smaller version
- Desktop: Loads full version
- Automatic optimization by Next.js

### **Hidden Elements:**
```jsx
className="hidden lg:block"  // Only loads on desktop
className="block lg:hidden"  // Only loads on mobile
```

### **Conditional Loading:**
No unnecessary JavaScript loaded for unused breakpoints.

---

## ✅ **Verification Checklist**

Test each page at these widths:

**Homepage:**
- [ ] 375px - Hero stacks, 2 product cols
- [ ] 768px - Hero stacks, 3 product cols
- [ ] 1024px - Hero side-by-side, 4 cols

**Products Page:**
- [ ] 375px - 2 columns, hamburger menu
- [ ] 768px - 3 columns, filters wrap
- [ ] 1024px - 4 columns, horizontal nav

**Cart:**
- [ ] 375px - Single column
- [ ] 1024px - 2-column layout

**Checkout:**
- [ ] 375px - Form stacks
- [ ] 1024px - Form + Summary side-by-side

**POD:**
- [ ] 375px - Single column
- [ ] 640px - 2 columns
- [ ] 768px - 3 columns

---

## 🎉 **Result**

Your site is **100% responsive** across all devices and screen sizes! Every component adapts beautifully from 320px phones to 4K displays. 🚀

