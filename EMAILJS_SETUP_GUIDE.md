# EmailJS Setup Guide - Fix Order Email Error

## 🔴 Current Problem

**Error:** `EmailJS configuration missing. Please check your environment variables.`

**Cause:** The EmailJS environment variables are not set in Vercel.

**Impact:** 
- Order confirmation emails won't send to you (business owner)
- Customer confirmation emails won't send
- Orders will still process, but no email notifications

---

## ✅ Step-by-Step Solution

### Step 1: Create EmailJS Account (3 minutes)

1. Go to **[https://www.emailjs.com](https://www.emailjs.com)**
2. Click **"Sign Up"** (top-right)
3. Choose **"Sign up with Google"** or fill in:
   - Email
   - Password
   - Name
4. Verify your email address
5. Log in to your dashboard

**Free Plan Includes:**
- 200 emails/month
- 2 email services
- Unlimited email templates
- Perfect for starting out!

---

### Step 2: Connect Your Email Service (5 minutes)

This connects EmailJS to your actual email account (Gmail, Outlook, etc.)

#### For Gmail (Most Common):

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. **Sign in with your business Gmail account**
   - Use the email where you want to receive orders
   - Example: `cobrawear.business@gmail.com`
6. Allow permissions when prompted
7. Give the service a name (e.g., "Cobra Wear Orders")
8. Click **"Create Service"**
9. **Copy the Service ID** (looks like: `service_xxxxxxx`)
   - Save this! You'll need it later

#### For Other Email Providers:

**Outlook/Hotmail:**
- Select "Outlook" → Sign in → Allow permissions

**Yahoo:**
- Select "Yahoo" → Sign in → Allow permissions

**Custom SMTP:**
- Select "Custom SMTP" → Enter your email server details

---

### Step 3: Create Email Template for POD Orders (5 minutes)

This is the email format you'll receive when someone orders a custom design.

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Configure the template:

#### Template Settings:

**Template Name:** `POD Order Notification`

**From Name:** `Cobra Wear Website`

**Subject:** `New POD Order from {{customer_name}}`

**Reply To:** `{{customer_email}}`

**To Email:** `your-business-email@gmail.com` ⚠️ **Put your actual email here!**

**Content (Copy this):**

```html
Hello,

You have received a new Print-On-Demand order from your Cobra Wear website!

═══════════════════════════════════════
CUSTOMER INFORMATION
═══════════════════════════════════════
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Shipping Address:
{{customer_address}}

═══════════════════════════════════════
ORDER DETAILS
═══════════════════════════════════════
Product Type: {{product_type}}
Size: {{product_size}}
Color: {{product_color}}

═══════════════════════════════════════
DESIGN
═══════════════════════════════════════
View/Download Customer Design:
{{design_url}}

(Click the link above to download the customer's uploaded design)

═══════════════════════════════════════
ADDITIONAL NOTES
═══════════════════════════════════════
{{order_notes}}

═══════════════════════════════════════
ORDER INFORMATION
═══════════════════════════════════════
Order Date: {{order_date}}
Payment Method: Cash on Delivery (COD)

═══════════════════════════════════════

Please contact the customer to confirm the order and arrange delivery.

---
This is an automated email from your Cobra Wear website.
```

4. Click **"Save"** (bottom-right)
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)
   - This appears at the top after saving
   - Save this! You'll need it

---

### Step 4: Create Email Template for Regular Orders (5 minutes)

This is for regular product orders (non-custom).

1. Click **"Create New Template"** again
2. Configure:

**Template Name:** `Regular Order Notification`

**From Name:** `Cobra Wear Website`

**Subject:** `New Order from {{customer_name}} - {{items_count}} items`

**Reply To:** `{{customer_email}}`

**To Email:** `your-business-email@gmail.com` ⚠️ **Put your actual email!**

**Content (Copy this):**

```html
Hello,

You have received a new order from your Cobra Wear website!

═══════════════════════════════════════
CUSTOMER INFORMATION
═══════════════════════════════════════
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Shipping Address:
{{customer_address}}

═══════════════════════════════════════
ORDER ITEMS ({{items_count}} items)
═══════════════════════════════════════

{{order_items}}

═══════════════════════════════════════
ORDER TOTALS
═══════════════════════════════════════
Subtotal: {{subtotal}}
Shipping: {{shipping}}
─────────────────────
TOTAL: {{total}}

═══════════════════════════════════════
ADDITIONAL NOTES
═══════════════════════════════════════
{{order_notes}}

═══════════════════════════════════════
ORDER INFORMATION
═══════════════════════════════════════
Order Date: {{order_date}}
Payment Method: Cash on Delivery (COD)

═══════════════════════════════════════

Please contact the customer to confirm the order and arrange delivery.

---
This is an automated email from your Cobra Wear website.
```

3. Click **"Save"**
4. **Copy this Template ID too** (looks like: `template_xxxxxxx`)
   - Save this as your "Regular Order Template ID"

---

### Step 5: Get Your Public Key (1 minute)

1. Click your **account email** (top-right corner)
2. Select **"Account"** from dropdown
3. Go to **"General"** tab (should be selected by default)
4. Find **"Public Key"** section
5. **Copy your Public Key** (looks like: `your_public_key_xxxxxxxxx`)
   - Save this! You'll need it

---

### Step 6: Add All Variables to Vercel (5 minutes)

Now add all 4 EmailJS variables to Vercel:

1. Go to **[https://vercel.com](https://vercel.com)**
2. Select your **"cobrawear"** project
3. Click **"Settings"** → **"Environment Variables"**

#### Add These 4 Variables:

**Variable 1: Service ID**
```
Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: service_xxxxxxx (your service ID)
Environment: ✓ Production ✓ Preview ✓ Development
```

**Variable 2: Public Key**
```
Name: NEXT_PUBLIC_EMAILJS_USER_ID
Value: your_public_key_xxxxxxxxx (your public key)
Environment: ✓ Production ✓ Preview ✓ Development
```

**Variable 3: POD Template ID**
```
Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: template_xxxxxxx (POD template ID)
Environment: ✓ Production ✓ Preview ✓ Development
```

**Variable 4: Regular Order Template ID**
```
Name: NEXT_PUBLIC_EMAILJS_REGULAR_TEMPLATE_ID
Value: template_xxxxxxx (regular order template ID)
Environment: ✓ Production ✓ Preview ✓ Development
```

4. Click **"Save"** for each variable

---

### Step 7: Redeploy Your Site (CRITICAL!)

**⚠️ Important:** Must redeploy for changes to take effect!

1. Go to **"Deployments"** tab in Vercel
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes for deployment to complete

---

### Step 8: Test Email Notifications (5 minutes)

#### Test POD Order Email:

1. Go to `https://cobrawear.vercel.app/pod`
2. Complete the POD workflow:
   - Select product, size, color
   - Upload a test image
   - Fill in shipping details (use your real email to test)
   - Submit order
3. Check your business email inbox
4. ✅ You should receive the POD order notification

#### Test Regular Order Email:

1. Go to `https://cobrawear.vercel.app/products`
2. Add a product to cart
3. Go to checkout
4. Fill in details (use your real email)
5. Submit order
6. Check your business email inbox
7. ✅ You should receive the regular order notification

---

## 🔍 Verification Checklist

Before testing, verify:

- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail, Outlook, etc.)
- [ ] Service ID copied correctly
- [ ] POD template created with correct variables
- [ ] Regular order template created with correct variables
- [ ] Both template IDs copied correctly
- [ ] Public key copied correctly
- [ ] All 4 environment variables added to Vercel
- [ ] Variables applied to Production environment
- [ ] Site redeployed after adding variables
- [ ] Waited 2-3 minutes for deployment

---

## 🐛 Troubleshooting

### Issue 1: "EmailJS configuration missing" Still Showing

**Solution:**
1. Verify all 4 variables are in Vercel
2. Check for typos in variable names (case-sensitive!)
3. Make sure you redeployed
4. Hard refresh browser (Ctrl+Shift+R)
5. Clear browser cache

### Issue 2: Email Not Received

**Possible Causes:**

**A. Check Spam/Junk Folder**
- EmailJS emails often go to spam initially
- Mark as "Not Spam" to whitelist

**B. Wrong "To Email" in Template**
```
✓ Correct: your-business-email@gmail.com
✗ Wrong: {{customer_email}} (this sends to customer, not you!)
```

**C. Service Not Connected**
- Go to EmailJS → Email Services
- Check service shows "Connected" status
- Try reconnecting if needed

**D. Template Variables Mismatch**
- Variable names in template must match exactly
- `{{customer_name}}` not `{{customerName}}`

### Issue 3: "Service Not Found" Error

**Cause:** Service ID is incorrect

**Solution:**
1. Go to EmailJS → Email Services
2. Click on your service
3. Copy the Service ID again (top of page)
4. Update in Vercel
5. Redeploy

### Issue 4: "Template Not Found" Error

**Cause:** Template ID is incorrect

**Solution:**
1. Go to EmailJS → Email Templates
2. Click on your template
3. Copy the Template ID (top of page)
4. Update in Vercel
5. Redeploy

### Issue 5: Gmail Blocking Emails

**If using Gmail and emails aren't sending:**

1. Go to Google Account settings
2. Security → Less secure app access
3. Enable (though Google is phasing this out)
4. Alternative: Use Gmail API (more complex)
5. Or use Outlook/Yahoo which are easier

---

## 📋 Quick Reference

### Your EmailJS Configuration Summary

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx (POD)
NEXT_PUBLIC_EMAILJS_REGULAR_TEMPLATE_ID=template_xxxxx (Regular)
```

### Where to Find Each Credential

| Credential | Location in EmailJS |
|------------|---------------------|
| **Service ID** | Email Services → Click your service → Top of page |
| **Public Key** | Account → General → Public Key section |
| **POD Template ID** | Email Templates → Click POD template → Top of page |
| **Regular Template ID** | Email Templates → Click regular template → Top of page |

### Template Variables Reference

**POD Orders Use:**
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{customer_address}}`
- `{{product_type}}`
- `{{product_size}}`
- `{{product_color}}`
- `{{design_url}}`
- `{{order_notes}}`
- `{{order_date}}`

**Regular Orders Use:**
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{customer_address}}`
- `{{order_items}}`
- `{{items_count}}`
- `{{subtotal}}`
- `{{shipping}}`
- `{{total}}`
- `{{order_notes}}`
- `{{order_date}}`

---

## 💡 Pro Tips

### Customize Your Templates

You can make the emails look better:

**Add Your Logo:**
```html
<img src="https://your-logo-url.com/logo.png" alt="Cobra Wear" width="200">
```

**Add Colors:**
```html
<div style="background-color: #000000; color: #ffffff; padding: 20px;">
  Order Information
</div>
```

**Better Formatting:**
```html
<table style="border: 1px solid #ccc; padding: 10px;">
  <tr>
    <td><strong>Customer:</strong></td>
    <td>{{customer_name}}</td>
  </tr>
</table>
```

### Email Best Practices

1. **Test with Real Email**
   - Use your actual business email for testing
   - Check on mobile device too

2. **Save Template Backups**
   - Copy template content to a text file
   - In case you need to recreate

3. **Monitor Usage**
   - EmailJS free tier: 200 emails/month
   - Check usage: Dashboard → Analytics

4. **Set Up Autoresponders** (Optional)
   - Create customer confirmation template
   - Send to `{{customer_email}}` 
   - Let customers know you got their order

---

## 🎯 Expected Behavior After Setup

### When Customer Places POD Order:

1. ✅ Customer fills out POD form
2. ✅ Uploads design image
3. ✅ Submits order
4. ✅ **You receive email** with order details + design link
5. ✅ Success page shows to customer

### When Customer Places Regular Order:

1. ✅ Customer adds products to cart
2. ✅ Completes checkout
3. ✅ Submits order
4. ✅ **You receive email** with items + totals
5. ✅ Success page shows to customer

### Email Delivery Time:

- Usually: **Instant** (within 30 seconds)
- Sometimes: **1-2 minutes** (if server is busy)
- Check spam if not in inbox after 5 minutes

---

## 📊 Testing Checklist

After setup, test:

- [ ] POD order submission (with image upload)
- [ ] Regular order submission (from cart)
- [ ] Email arrives in inbox (not spam)
- [ ] All customer info displays correctly
- [ ] Design URL works (for POD)
- [ ] Order items show correctly (for regular)
- [ ] Totals calculate properly
- [ ] Reply-to address works (click reply in email)

---

## 🚀 Additional Features (Optional)

### Customer Confirmation Emails

Want to send confirmation emails to customers too?

1. Create another template in EmailJS
2. Set "To Email" to `{{customer_email}}`
3. Use customer-friendly language
4. Add template ID as: `NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID`

The system will automatically send to customers if this variable is set!

### Multiple Email Recipients

Want orders sent to multiple people?

In your template "To Email" field:
```
your-email@gmail.com, partner-email@gmail.com, manager@gmail.com
```

Separate with commas!

---

## 💰 Pricing & Limits

### Free Tier (Perfect for Starting):
- ✓ 200 emails/month
- ✓ 2 email services
- ✓ Unlimited templates
- ✓ All features

### If You Exceed 200 Emails:
- **Personal Plan:** $7/month - 1,000 emails
- **Professional:** $15/month - 10,000 emails
- **Enterprise:** Custom pricing

**Tip:** 200 emails = ~6-7 orders per day. Perfect for starting!

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ No console errors about "EmailJS configuration"
2. ✅ Order submission completes successfully
3. ✅ Email arrives in your inbox within 2 minutes
4. ✅ Customer info displays correctly in email
5. ✅ Design URLs work (for POD)
6. ✅ Can reply directly to customer from email

---

## 🆘 Still Having Issues?

If nothing works after following this guide:

1. **Double-check variable names** in Vercel (case-sensitive!)
2. **Verify template IDs** are correct (no spaces)
3. **Check EmailJS dashboard** for error logs
4. **Test from EmailJS** dashboard directly (Test button in template)
5. **Try different browser** or incognito mode
6. **Check email service** is still connected

---

**Total Setup Time:** ~30 minutes  
**Difficulty:** Easy  
**Result:** Professional order notifications! 📧✅

