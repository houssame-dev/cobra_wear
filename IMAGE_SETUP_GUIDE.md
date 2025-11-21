# Hero Product Image Setup Guide

**Status**: Code Ready ✅  
**Next Step**: Add Your Image File

---

## 📁 **Where to Save Your Image**

### **Step 1: Create the images folder (if it doesn't exist)**

In your project root, create this folder structure:

```
coobraa/
├── public/
│   └── images/
│       └── hero-product.jpg  ← Save your image here
```

### **Step 2: Save Your T-Shirt Image**

1. **Download/Save your product image** (the one you showed with the two models)
2. **Rename it to**: `hero-product.jpg`
3. **Save it in**: `public/images/hero-product.jpg`

**Supported formats:**
- `.jpg` or `.jpeg` (recommended)
- `.png` (larger file size)
- `.webp` (modern, smaller)

---

## 🎨 **What I've Created for You**

### **Modern Product Showcase with:**

✅ **Real Product Image:**
- Full-size image display
- Smooth hover scale effect
- White border frame
- Professional shadow

✅ **Red Promo Badge (Top Right):**
- Bright red background (`bg-red-600`)
- "50% OFF" text
- Pulse animation
- Shadow for depth

✅ **Price Display (Bottom):**
- Dark glass-morphism background (black with blur)
- Old price: ~~$49.99~~ (crossed out, gray)
- New price: **$24.99** (large, bold, white)
- "SAVE $25" badge
- "Limited Time Offer" text

✅ **Decorative Elements:**
- Floating red circle (top left)
- Floating black ring (bottom right)
- Corner accent border
- Gradient overlay for text visibility

---

## 🎯 **What It Looks Like**

```
┌─────────────────────────────────┐
│                    [50% OFF] ← Red badge
│                                 │
│     YOUR PRODUCT IMAGE HERE     │
│     (T-Shirts with models)      │
│                                 │
│  ┌──────────────────────────┐  │
│  │ Limited Time Offer        │  │
│  │ $49.99  $24.99  SAVE $25 │ ← Price tag
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

---

## 📐 **Image Recommendations**

### **Ideal Image Specs:**
- **Aspect Ratio**: Square (1:1) or close to it
- **Resolution**: 1000x1000px minimum
- **File Size**: Under 500KB for fast loading
- **Format**: JPG (best balance of quality/size)

### **Your Current Image:**
The image you showed is perfect! It shows:
- Two models wearing the products
- Clear view of front and back designs
- Professional white background
- Good quality

---

## 🚀 **Quick Setup (3 Steps)**

### **Method 1: Create folder manually**

```bash
# In your project root (coobraa folder)
mkdir -p public/images
```

Then drag and drop your image as `hero-product.jpg`

### **Method 2: Using File Explorer (Windows)**

1. Open your `coobraa` folder
2. Go to `public` folder (create if not exists)
3. Create `images` folder (create if not exists)
4. Copy your product image there
5. Rename it to `hero-product.jpg`

### **Method 3: Quick test with placeholder**

If you don't have the image ready, you can temporarily use:
- Any product photo you have
- Download a free image from Unsplash
- Use a placeholder: https://placehold.co/1000x1000/png

---

## 🎨 **Customization Options**

### **Change the Discount:**

In `src/components/Hero.jsx`, find line ~95:

```jsx
<div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-base sm:text-lg animate-pulse">
  50% OFF  ← Change this
</div>
```

### **Change the Prices:**

Find lines ~105-110:

```jsx
<span className="text-lg sm:text-xl line-through text-gray-400 font-medium">
  $49.99  ← Old price
</span>
<span className="text-2xl sm:text-3xl font-bold text-white">
  $24.99  ← New price
</span>
```

### **Change "SAVE $25":**

Find line ~112:

```jsx
<span className="text-xs sm:text-sm font-bold">SAVE $25</span>
```

---

## 🎭 **Alternative Badge Styles**

### **Option 1: Summer Sale**
```jsx
SUMMER SALE
```

### **Option 2: Flash Deal**
```jsx
⚡ FLASH DEAL
```

### **Option 3: New Arrival**
```jsx
🆕 NEW
```

### **Option 4: Specific Discount**
```jsx
-50%
```

---

## 📱 **Responsive Features**

### **Mobile (< 640px):**
- Image maintains aspect ratio
- Badge slightly smaller
- Price text scales down
- Still looks professional

### **Desktop (1024px+):**
- Full-size image display
- Larger badges
- More breathing room
- Smooth hover effects

---

## ✅ **Testing Checklist**

After adding your image:

- [ ] Image appears in hero section
- [ ] Image loads quickly
- [ ] Promo badge is visible (red, top right)
- [ ] Prices display correctly
- [ ] Hover effect works (slight scale)
- [ ] Mobile view looks good
- [ ] No console errors

---

## 🔧 **Troubleshooting**

### **Image Not Showing?**

1. **Check file path:**
   - Must be: `public/images/hero-product.jpg`
   - Not: `public/hero-product.jpg`
   - Not: `images/hero-product.jpg`

2. **Check file name:**
   - Must be exactly: `hero-product.jpg`
   - Not: `hero-product.jpeg`
   - Not: `Hero-Product.jpg` (case matters on Linux/Mac)

3. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Clear cache:**
   - Hard refresh: Ctrl+Shift+R (Windows)
   - Or: Cmd+Shift+R (Mac)

### **Image Too Large?**

If your image file is very large (> 1MB), compress it:
- Use: https://tinypng.com/
- Or: https://squoosh.app/
- Target: < 500KB

---

## 🎨 **Advanced Styling**

### **Change Badge Color:**

Current: Red (`bg-red-600`)

**Options:**
```jsx
bg-blue-600   // Blue
bg-green-600  // Green
bg-purple-600 // Purple
bg-orange-600 // Orange
bg-pink-600   // Pink
```

### **Remove Pulse Animation:**

Remove `animate-pulse` from line ~95:

```jsx
// Before
className="... animate-pulse"

// After
className="..."
```

### **Change Border:**

Line ~88, change `border-4 border-gray-100`:

```jsx
border-2 border-black    // Black border
border-4 border-white    // Thicker white
border-0                 // No border
```

---

## 📊 **Current Setup Summary**

| Element | Status | Location |
|---------|--------|----------|
| Component Code | ✅ Ready | `src/components/Hero.jsx` |
| Image Path | ⏳ Needs File | `public/images/hero-product.jpg` |
| Promo Badge | ✅ Red, "50% OFF" | Top right |
| Price Display | ✅ $49.99 → $24.99 | Bottom |
| Animations | ✅ Hover, Pulse | Enabled |
| Build Status | ✅ No Errors | Ready to deploy |

---

## 🚀 **Final Steps**

1. **Save your image** as `public/images/hero-product.jpg`
2. **Restart dev server** if it's running
3. **Open** http://localhost:3000
4. **Enjoy** your modern product showcase! 🎉

---

## 💡 **Pro Tips**

1. **Use high-quality images** - This is the first thing visitors see
2. **Update prices regularly** - Keep promos fresh
3. **Test on mobile** - Most shoppers use phones
4. **A/B test badges** - Try different discount amounts
5. **Match your brand** - Adjust colors to your style

---

**Your hero section is now production-ready with a modern, conversion-optimized product showcase!** 🎊

Just add the image file and you're done! 🚀

