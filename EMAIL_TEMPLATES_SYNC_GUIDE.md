# Email Templates Synchronization Guide

**Date**: November 20, 2025  
**Status**: ✅ Templates Ready

---

## 🎨 What Changed

Both email templates now have **identical modern design** with different content:

### **Synchronized Design Elements:**

✅ **Same Fonts**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'`  
✅ **Same Colors**: Black (#000000) + White (#FFFFFF) theme  
✅ **Same Header**: Black background, 40px padding, 32px title  
✅ **Same Section Titles**: Uppercase, letter-spacing, black border  
✅ **Same Info Rows**: Consistent padding, borders, and layout  
✅ **Same Footer**: Grey background, centered text  
✅ **Same Alert Box**: Yellow warning with border  
✅ **Same Spacing**: 35px between sections, 15px padding  
✅ **Same Border Radius**: 6px for boxes, 8px for containers  

---

## 📧 Template Files Created

### 1. **Regular Order Template**
**File**: `EMAILJS_REGULAR_ORDER_TEMPLATE.html`

**Contains:**
- Customer Information
- Order Items (with count)
- Order Totals (Subtotal, Shipping, Total)
- Customer Notes
- Payment Method (COD)

### 2. **Print-On-Demand Template**
**File**: `EMAILJS_POD_ORDER_TEMPLATE.html`

**Contains:**
- Customer Information
- Product Details (Type, Size, Color)
- Customer Design Files (clickable links)
- Customer Notes
- Payment Method (COD)

---

## 🚀 How to Upload to EmailJS

### **Step 1: Regular Order Template**

1. Go to https://dashboard.emailjs.com/
2. Click **"Email Templates"**
3. Find your **Regular Order template**
4. Click **"Edit"**
5. **Delete** all existing content
6. **Open** `EMAILJS_REGULAR_ORDER_TEMPLATE.html`
7. **Copy** everything
8. **Paste** into EmailJS editor
9. Click **"Save"**

### **Step 2: POD Order Template**

1. Stay on EmailJS dashboard
2. Find your **POD template**
3. Click **"Edit"**
4. **Delete** all existing content
5. **Open** `EMAILJS_POD_ORDER_TEMPLATE.html`
6. **Copy** everything
7. **Paste** into EmailJS editor
8. Click **"Save"**

---

## ✅ Required Variables

### **Regular Order Template Variables:**
- `{{order_date}}`
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{customer_address}}`
- `{{items_count}}`
- `{{order_items}}`
- `{{subtotal}}`
- `{{shipping}}`
- `{{total}}`
- `{{order_notes}}`

### **POD Template Variables:**
- `{{order_date}}`
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{customer_address}}`
- `{{product_type}}`
- `{{product_size}}`
- `{{product_color}}`
- `{{design_url}}`
- `{{order_notes}}`

---

## 🎨 Design Specifications

### **Typography:**
```css
Headers: 32px, 700 weight, 2px letter-spacing
Section Titles: 18px, 700 weight, 1px letter-spacing, uppercase
Body Text: 14px, 400 weight
Labels: 14px, 600 weight
Footer: 12px, 400 weight
Monospace: 'Courier New', 13px
```

### **Color Palette:**
```css
Primary: #000000 (Black)
Background: #FFFFFF (White)
Secondary BG: #F5F5F5 (Light Grey)
Text: #333333 (Dark Grey)
Labels: #666666 (Medium Grey)
Borders: #EEEEEE (Very Light Grey)
Warning BG: #FEF3C7 (Light Yellow)
Warning Border: #F59E0B (Orange)
Warning Text: #92400E (Dark Orange)
```

### **Spacing:**
```css
Container Padding: 40px 30px
Section Margin: 35px
Box Padding: 15-20px
Row Padding: 12px 0
Border Radius: 6-8px
```

### **Layout:**
```css
Max Width: 600px
Info Label Width: 140px
Border Width: 2px (headers), 1px (rows), 4px (left accent)
```

---

## 📱 Mobile Responsive

Both templates are **fully responsive**:
- Flexible box layout
- Readable font sizes
- Touch-friendly spacing
- Stacks nicely on mobile

---

## 🧪 Testing

### **Test Regular Order:**
1. Login to EmailJS
2. Open Regular Order template
3. Click **"Test It"**
4. Check all variables display
5. Verify design looks correct
6. Send test email

### **Test POD Order:**
1. Open POD template
2. Click **"Test It"**
3. Check design links work
4. Verify design looks correct
5. Send test email

### **Test Live:**
1. Place a regular order on your site
2. Check email received
3. Place a POD order
4. Check email received
5. Verify both look identical in design

---

## 🎯 Visual Consistency Checklist

Both templates should have:
- [ ] Same header (black, 40px padding)
- [ ] Same font family (system fonts)
- [ ] Same section title style (uppercase, black border)
- [ ] Same info row layout (label + value)
- [ ] Same date box (grey background)
- [ ] Same notes box (grey with left border)
- [ ] Same alert box (yellow warning)
- [ ] Same footer (grey, centered)
- [ ] Same spacing between sections
- [ ] Same border radius on boxes

---

## 🔧 Customization

If you want to customize colors, update both templates:

### **Change Brand Color:**
```css
/* Find this in both templates: */
.header {
    background-color: #000000; /* Change to your color */
}

/* And: */
.section-title {
    border-bottom: 2px solid #000000; /* Change to your color */
}
```

### **Change Font:**
```css
/* Update in both templates: */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

/* Change to: */
font-family: 'Your Font', -apple-system, sans-serif;
```

---

## 📊 Side-by-Side Comparison

| Element | Regular Order | POD Order | Match? |
|---------|---------------|-----------|--------|
| Header | Black, 40px | Black, 40px | ✅ |
| Fonts | System | System | ✅ |
| Section Titles | Uppercase | Uppercase | ✅ |
| Info Rows | 140px label | 140px label | ✅ |
| Border Radius | 6-8px | 6-8px | ✅ |
| Spacing | 35px | 35px | ✅ |
| Footer | Grey, centered | Grey, centered | ✅ |
| Alert Box | Yellow warning | Yellow warning | ✅ |

---

## ✅ Final Checklist

- [ ] Downloaded both template files
- [ ] Uploaded Regular Order template to EmailJS
- [ ] Uploaded POD template to EmailJS
- [ ] Tested both templates in EmailJS dashboard
- [ ] Sent test emails
- [ ] Verified design consistency
- [ ] Placed test orders on site
- [ ] Confirmed emails look professional
- [ ] Checked mobile display

---

## 🎉 Result

Both email templates now have:
- **Identical modern design**
- **Professional appearance**
- **Consistent branding**
- **Different content** (as needed)

Your customers will receive beautifully designed, professional emails regardless of order type! 🚀

---

**Need help?** Check that all variables match between your code and the email templates.

