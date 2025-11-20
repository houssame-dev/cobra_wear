# Customer Email Templates Guide

**Date**: November 20, 2025  
**Status**: ✅ Complete

---

## 📧 Customer Templates Created

You now have **two customer-facing email templates** with synchronized design:

### 1. **Regular Order Confirmation** 
**File**: `EMAILJS_CUSTOMER_REGULAR_TEMPLATE.html`

**Sent to**: Customers who place regular orders  
**Purpose**: Confirm their order and thank them  
**Content**:
- ✅ Order confirmation message
- ✅ Order items list
- ✅ Order totals (Subtotal, Shipping, Total)
- ✅ Shipping address
- ✅ What happens next (4 steps)
- ✅ Payment method (COD)

### 2. **POD Order Confirmation**
**File**: `EMAILJS_CUSTOMER_POD_TEMPLATE.html`

**Sent to**: Customers who place Print-On-Demand orders  
**Purpose**: Confirm their custom order  
**Content**:
- ✅ Custom order confirmation message
- ✅ Product details (Type, Size, Color)
- ✅ Shipping address
- ✅ What happens next (5 steps including production)
- ✅ Payment method (COD)

---

## 🎨 Design Features

Both templates share the **same modern design** with:

✅ **Black header** with "COBRA WEAR" branding  
✅ **Friendly greeting** ("Hi {{to_name}}")  
✅ **Thank you message**  
✅ **Clear sections** with uppercase titles  
✅ **Green "What's Next" box** with step-by-step guide  
✅ **Yellow payment box** highlighting COD  
✅ **Professional footer** with contact info  

---

## 🔧 EmailJS Setup

### **Step 1: Create Customer Templates in EmailJS**

1. Login to https://dashboard.emailjs.com/
2. Go to **"Email Templates"**
3. Click **"Create New Template"**
4. Name it: **"Customer Regular Order Confirmation"**
5. Copy content from `EMAILJS_CUSTOMER_REGULAR_TEMPLATE.html`
6. Paste into EmailJS editor
7. **Save** and note the **Template ID**

8. Click **"Create New Template"** again
9. Name it: **"Customer POD Order Confirmation"**
10. Copy content from `EMAILJS_CUSTOMER_POD_TEMPLATE.html`
11. Paste into EmailJS editor
12. **Save** and note the **Template ID**

### **Step 2: Update Environment Variables**

Add the new customer template IDs to your `.env.local`:

```bash
# Customer-facing email templates
NEXT_PUBLIC_EMAILJS_CUSTOMER_REGULAR_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_CUSTOMER_POD_TEMPLATE_ID=template_yyyyyyy
```

**Note**: If you don't set these, customer emails won't be sent (which prevents duplicate business emails).

---

## 📋 Required Variables

### **Regular Order Customer Template:**
- `{{to_name}}` - Customer's name
- `{{order_date}}` - Date order was placed
- `{{items_count}}` - Number of items
- `{{order_items}}` - List of ordered items
- `{{subtotal}}` - Order subtotal
- `{{shipping}}` - Shipping cost
- `{{total}}` - Total amount
- `{{customer_address}}` - Delivery address
- `{{customer_email}}` - Customer's email

### **POD Customer Template:**
- `{{to_name}}` - Customer's name
- `{{order_date}}` - Date order was placed
- `{{product_type}}` - Type of custom product
- `{{product_size}}` - Selected size
- `{{product_color}}` - Selected color
- `{{customer_address}}` - Delivery address
- `{{customer_email}}` - Customer's email

---

## 🔄 How It Works

### **Regular Order Flow:**
1. Customer places order → **Business receives**: `EMAILJS_REGULAR_ORDER_TEMPLATE.html`
2. Customer receives: `EMAILJS_CUSTOMER_REGULAR_TEMPLATE.html`

### **POD Order Flow:**
1. Customer places POD order → **Business receives**: `EMAILJS_POD_ORDER_TEMPLATE.html`
2. Customer receives: `EMAILJS_CUSTOMER_POD_TEMPLATE.html`

---

## 📁 Complete Template Structure

```
Email Templates:
├── Business Emails (Internal)
│   ├── EMAILJS_REGULAR_ORDER_TEMPLATE.html    → Business notification
│   └── EMAILJS_POD_ORDER_TEMPLATE.html        → Business notification
│
└── Customer Emails (Customer-facing)
    ├── EMAILJS_CUSTOMER_REGULAR_TEMPLATE.html → Customer confirmation
    └── EMAILJS_CUSTOMER_POD_TEMPLATE.html     → Customer confirmation
```

---

## ✅ Key Differences

### **Business Templates vs Customer Templates:**

| Aspect | Business Templates | Customer Templates |
|--------|-------------------|-------------------|
| **Tone** | Professional/Technical | Friendly/Welcoming |
| **Purpose** | Notify business of order | Thank customer |
| **Header** | 🛍️/🎨 + "Order" | ✅ + "Confirmed" |
| **Action** | "Action Required" box | "What's Next" steps |
| **Greeting** | Direct to business | "Hi {{to_name}}" |
| **Design URLs** | Clickable links (POD) | Not shown to customer |
| **Footer** | Store notification | Thank you message |

---

## 🧪 Testing

### **Test Customer Regular Order:**
1. Go to EmailJS dashboard
2. Open "Customer Regular Order Confirmation" template
3. Click **"Test It"**
4. Fill in test data
5. Send to your email
6. Verify it looks professional and friendly

### **Test Customer POD Order:**
1. Open "Customer POD Order Confirmation" template
2. Click **"Test It"**
3. Fill in test data
4. Send to your email
5. Verify it looks professional and friendly

---

## 📊 Comparison

### **Business Email Example:**
```
Subject: 🎨 New POD Order

COBRA WEAR
Print-On-Demand Order

Order Date: Nov 20, 2025

👤 CUSTOMER INFORMATION
Name: John Doe
Email: john@example.com
...

⚠️ Action Required: Please contact the customer...
```

### **Customer Email Example:**
```
Subject: Order Confirmation - Cobra Wear

COBRA WEAR
🎨 Custom Order Confirmed

Hi John,

Thank you for your custom Print-On-Demand order! 
We're excited to bring your design to life...

✅ What Happens Next?
1. We'll review your design files
2. Our team will contact you...
```

---

## 🎯 Email Subject Lines

### **Suggested Subject Lines for EmailJS:**

**Regular Order (Customer):**
```
Order Confirmation - Cobra Wear (#{{order_id}})
```

**POD Order (Customer):**
```
Custom Order Confirmed - Cobra Wear
```

---

## 💡 Tips

1. **Personalization**: Both templates use `{{to_name}}` for a personal touch
2. **Clear Steps**: "What's Next" sections guide customers
3. **Reassurance**: Friendly tone reduces anxiety about COD payment
4. **Professional**: Despite being friendly, still looks professional
5. **Branding**: Consistent COBRA WEAR branding throughout

---

## 🔒 Privacy Note

Customer templates do **NOT** show:
- ❌ Design file URLs (POD orders)
- ❌ Business-internal notes
- ❌ "Action Required" alerts
- ❌ Technical details

Only customer-relevant information is shown.

---

## ✅ Checklist

- [ ] Created both customer templates in EmailJS
- [ ] Saved template IDs
- [ ] Updated `.env.local` with customer template IDs
- [ ] Tested both templates
- [ ] Verified professional appearance
- [ ] Confirmed all variables work
- [ ] Checked mobile responsiveness
- [ ] Placed test orders
- [ ] Received customer confirmation emails
- [ ] Customers happy with email design

---

## 🎉 Result

You now have **4 complete email templates**:
- ✅ 2 Business templates (internal notifications)
- ✅ 2 Customer templates (customer confirmations)

All with **synchronized, professional design** and appropriate messaging! 🚀

---

**Questions?** All templates use the same design system - black/white theme, consistent spacing, professional appearance.

