# POD Visual Workflow Guide

## 🎨 Step-by-Step User Journey

---

## **STEP 1: Choose Your Product**

### Layout
```
┌─────────────────────────────────────────────────────┐
│                  Progress: ● ○ ○ ○ ○ ○               │
│                                                      │
│          Choose Your Product                         │
│    Select the product you want to customize          │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │   🎽    │  │   🧥    │  │   👕    │  │   👜    ││
│  │ T-Shirt │  │ Hoodie  │  │Sweatshirt│ │Tote Bag ││
│  │RECOMMEND│  │RECOMMEND│  │         │  │         ││
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘│
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │   🧢    │  │   🩳    │  │   📱    │               │
│  │   Cap   │  │ Shorts  │  │  Phone  │               │
│  │         │  │         │  │  Case   │               │
│  └─────────┘  └─────────┘  └─────────┘               │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ Large icons with product names
- ✅ "Recommended" badges on T-shirts and Hoodies
- ✅ Clean 4-column grid
- ✅ Hover effects with border highlight

---

## **STEP 2: Choose Color**

### Layout
```
┌─────────────────────────────────────────────────────┐
│  ← Back          🎽 T-Shirt                          │
│                                                      │
│              Progress: ● ● ○ ○ ○ ○                  │
│                                                      │
│              Choose Color                            │
│        Select your preferred color                   │
│                                                      │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐│
│   │  ⚫  │  │  ⚪  │  │  ⚫  │  │  🔵  │  │  🟤  ││
│   │Black │  │White │  │ Grey │  │ Navy │  │Beige ││
│   └──────┘  └──────┘  └──────┘  └──────┘  └──────┘│
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ Color swatches with visual circles
- ✅ Color name labels
- ✅ Active selection highlighted
- ✅ Auto-advance to next step on click

---

## **STEP 3: Choose Size / Phone Model**

### Layout (Apparel)
```
┌─────────────────────────────────────────────────────┐
│  ← Back                                              │
│                                                      │
│              Progress: ● ● ● ○ ○ ○                  │
│                                                      │
│              Choose Size                             │
│            Select your size                          │
│                                                      │
│      ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐       │
│      │ S  │  │ M  │  │ L  │  │ XL │  │XXL │       │
│      └────┘  └────┘  └────┘  └────┘  └────┘       │
└─────────────────────────────────────────────────────┘
```

### Layout (Phone Cases)
```
┌─────────────────────────────────────────────────────┐
│  ← Back                                              │
│                                                      │
│          Choose Phone Model                          │
│          Select your device                          │
│                                                      │
│  ┌─────────────────────────┐  ┌──────────────────┐ │
│  │  iPhone 15 Pro Max      │  │  iPhone 15 Pro   │ │
│  └─────────────────────────┘  └──────────────────┘ │
│  ┌─────────────────────────┐  ┌──────────────────┐ │
│  │  Samsung Galaxy S24     │  │  Google Pixel 8  │ │
│  └─────────────────────────┘  └──────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ **NEW**: XXL size added to all apparel
- ✅ **SMART**: Size selector auto-hides for caps, tote bags, phone cases
- ✅ **SMART**: Phone model selector shown for phone cases only
- ✅ Large tap targets for easy selection

---

## **STEP 4: Upload Your Designs**

### Layout (Multi-Upload for T-Shirt)
```
┌─────────────────────────────────────────────────────┐
│  ← Back                                              │
│                                                      │
│              Progress: ● ● ● ● ○ ○                  │
│                                                      │
│          Upload Your Designs                         │
│    Upload your design files for each placement area  │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ Front Design *         Recommended: 4000×4000px│  │
│  │ ┌─────────────────────────────────────────┐  │   │
│  │ │        📤                                 │  │   │
│  │ │  Click to upload or drag and drop        │  │   │
│  │ │  PNG, JPG, WebP up to 10MB               │  │   │
│  │ └─────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ Back Design            Recommended: 4000×4000px│  │
│  │ ┌─────────────────────────────────────────┐  │   │
│  │ │ [Preview Image]                          │  │   │
│  │ │ [Replace] [Remove]  (shown on hover)     │  │   │
│  │ └─────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ Left Sleeve            Recommended: 1000×1000px│  │
│  │ [...drag-drop area...]                       │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ Right Sleeve           Recommended: 1000×1000px│  │
│  │ [...drag-drop area...]                       │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│          [Continue to Preview]                       │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ **Multiple upload areas** based on product
- ✅ **Drag-and-drop** support
- ✅ **Image preview** thumbnails
- ✅ **Replace/Remove** buttons on hover
- ✅ **Recommended resolutions** shown
- ✅ **Real-time validation**:
  - Max 10MB file size
  - Min 500×500px resolution
  - JPG, PNG, WebP only
- ✅ **Required fields** marked with asterisk (*)
- ✅ **Error messages** displayed if validation fails

---

## **STEP 5: Preview Your Design**

### Layout
```
┌─────────────────────────────────────────────────────┐
│  ← Back                                              │
│                                                      │
│              Progress: ● ● ● ● ● ○                  │
│                                                      │
│          Preview Your Design                         │
│     Review your customization before checkout        │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │          Order Summary                        │   │
│  │  Product:        T-Shirt                      │   │
│  │  Color:          Black                        │   │
│  │  Size:           XL                           │   │
│  │  Design Areas:   2                            │   │
│  │  Payment:        Cash on Delivery             │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Design Previews:                                    │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │ Front Design     │  │ Back Design      │         │
│  │ [Preview Image]  │  │ [Preview Image]  │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                      │
│       [Continue to Shipping Details]                 │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ **Order summary** with all selections
- ✅ **Design previews** in grid layout
- ✅ **Review before checkout**
- ✅ **Edit capability** via back button

---

## **STEP 6: Shipping Details**

### Layout
```
┌─────────────────────────────────────────────────────┐
│  ← Back                                              │
│                                                      │
│              Progress: ● ● ● ● ● ●                  │
│                                                      │
│          Shipping Details                            │
│        Enter your delivery information               │
│                                                      │
│  ┌─────────────────────┐  ┌──────────────────────┐ │
│  │ Full Name *         │  │ Email *              │ │
│  │ [John Doe]          │  │ [john@example.com]   │ │
│  └─────────────────────┘  └──────────────────────┘ │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ Phone *                                      │    │
│  │ [+1 234 567 8900]                            │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ Shipping Address *                           │    │
│  │ [123 Main St, City, State, ZIP]              │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ Additional Notes (Optional)                  │    │
│  │ [Any special instructions...]                │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│          [Place Order (COD)]                         │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ **Form validation** on all required fields
- ✅ **Error messages** for invalid inputs
- ✅ **Optional notes** field
- ✅ **COD payment** confirmed

---

## **STEP 7: Success Screen**

### Layout
```
┌─────────────────────────────────────────────────────┐
│                                                      │
│                      ✅                              │
│                                                      │
│          Order Placed Successfully!                  │
│                                                      │
│     Thank you for your custom order! We'll contact  │
│     you soon to confirm the details and arrange     │
│     delivery.                                        │
│                                                      │
│   [Create Another Design]  [Back to Home]           │
└─────────────────────────────────────────────────────┘
```

### Features
- ✅ **Success confirmation** with checkmark
- ✅ **Clear message** about next steps
- ✅ **Quick actions** to continue shopping

---

## 🎯 Key Visual Elements

### Color Palette
- **Primary**: Black (`#000000`)
- **Secondary**: White (`#FFFFFF`)
- **Accent**: Grey (`#9CA3AF`)
- **Borders**: Light Grey (`#E5E7EB`)
- **Error**: Red (`#EF4444`)
- **Success**: Black (using existing theme)

### Border Radius
- **Small**: 8px (buttons)
- **Medium**: 12px (cards, inputs)
- **Large**: 16px (main containers)

### Spacing
- **Container padding**: 32px (2rem)
- **Section gaps**: 24px (1.5rem)
- **Grid gaps**: 16px (1rem)

### Typography
- **Headings**: Bold, 24-48px
- **Body**: Regular, 16px
- **Labels**: Medium, 14px
- **Captions**: Regular, 12px

### Icons
- **Size**: 40×40px (grid), 64×64px (large view)
- **Stroke**: 1.5px
- **Style**: Minimal line art

### Shadows
- **Cards**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Hover**: `0 4px 6px rgba(0, 0, 0, 0.1)`

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- 4-column product grid
- 5-column size grid
- 2-column form fields
- Full-width previews

### Tablet (768px - 1023px)
- 3-column product grid
- 5-column size grid
- 2-column form fields
- Full-width previews

### Mobile (< 768px)
- 2-column product grid
- 5-column size grid (scrollable)
- 1-column form fields
- Stacked previews

---

## 🔄 Animations & Transitions

### Hover States
- Border color change: 200ms
- Background color: 200ms
- Scale: 150ms (icons)
- Opacity: 300ms (overlay buttons)

### Step Transitions
- Fade in: 300ms
- Slide in: 400ms

### Upload States
- Loading spinner: infinite rotation
- Progress bar: smooth 500ms

---

## ✨ Interactive States

### Buttons
- **Default**: White bg, black border
- **Hover**: Light grey bg
- **Active**: Black bg, white text
- **Disabled**: 50% opacity

### Upload Areas
- **Default**: Dashed border, light grey
- **Hover**: Solid border, darker grey
- **Drag Active**: Black border, grey bg
- **Has File**: Solid border, preview shown

### Form Inputs
- **Default**: Light grey border
- **Focus**: Black border
- **Error**: Red border + message
- **Valid**: Black border

---

**This visual guide provides the complete UI flow and design system for the improved POD section.**

