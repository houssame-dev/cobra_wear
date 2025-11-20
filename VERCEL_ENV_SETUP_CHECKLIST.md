# Vercel Environment Variables - Setup Checklist

## 🎯 Quick Fix for Your Current Error

Your site is missing **Cloudinary** credentials in Vercel. Here's the 5-minute fix:

---

## ⚡ QUICK FIX (5 minutes)

### 1. Get Cloudinary Credentials (2 min)
- Go to [cloudinary.com](https://cloudinary.com)
- Sign up / Log in
- Get your **Cloud Name** (on dashboard)
- Create **Upload Preset**: Settings → Upload → "Unsigned" mode

### 2. Add to Vercel (2 min)
- Go to [vercel.com](https://vercel.com) → Your Project
- **Settings** → **Environment Variables**
- Add these 2 variables:

```
Name: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
Value: [your cloud name]
Environment: ✓ Production ✓ Preview ✓ Development

Name: NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET  
Value: [your preset name]
Environment: ✓ Production ✓ Preview ✓ Development
```

### 3. Redeploy (1 min)
- **Deployments** tab → Click "..." → **Redeploy**
- Wait 2 minutes ✅

---

## 📋 ALL REQUIRED ENVIRONMENT VARIABLES

For your Coobraa site to work fully, you need these variables in Vercel:

### ✅ Already Set (Working)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ✓

### ⚠️ MISSING - Need to Add

#### Cloudinary (CRITICAL - POD won't work without)
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```
**Status:** 🔴 MISSING - **Causing current error**  
**Impact:** POD image uploads don't work  
**Priority:** HIGH - Add immediately

#### EmailJS (IMPORTANT - Orders won't send emails)
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
```
**Status:** ⚠️ Check if set  
**Impact:** Order confirmation emails won't send  
**Priority:** HIGH - Add before going live

#### Optional EmailJS Templates
```env
NEXT_PUBLIC_EMAILJS_REGULAR_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID=template_xxxxx
```
**Status:** Optional  
**Impact:** Uses default template if not set  
**Priority:** LOW - Add later if needed

---

## 🔍 How to Check What's Missing

### Method 1: Vercel Dashboard
1. Go to vercel.com → Your Project
2. Settings → Environment Variables
3. Check which variables are listed

### Method 2: Browser Console
1. Go to your live site
2. Press F12 → Console tab
3. Look for errors mentioning "configuration missing" or "environment variables"

### Method 3: Test Features
| Feature | Test | If Missing |
|---------|------|------------|
| **POD Upload** | Go to /pod → Upload image | Gets "Cloudinary configuration missing" error |
| **Order Emails** | Place test order | No email received |
| **Analytics** | Visit site → Check GA realtime | Working ✅ |

---

## 📊 Priority Order

### 🔴 DO NOW (Critical)
1. **Cloudinary** - Currently broken, fix first
   - See `CLOUDINARY_SETUP_GUIDE.md` for detailed steps

### 🟡 DO TODAY (Important)  
2. **EmailJS** - Orders won't notify you
   - See `SETUP_INSTRUCTIONS.md` for EmailJS setup

### 🟢 DO LATER (Optional)
3. **Additional templates** - Nice to have

---

## 🎯 After Adding Variables

**ALWAYS:**
1. ✅ Redeploy your site
2. ✅ Wait 2-3 minutes
3. ✅ Hard refresh browser (Ctrl+Shift+R)
4. ✅ Test the feature

**Example:**
```
Added Cloudinary variables → Redeploy → Test POD upload
Added EmailJS variables → Redeploy → Test order submission
```

---

## 🐛 Common Mistakes

### ❌ Mistake 1: Not Redeploying
**Problem:** Added variables but site still broken  
**Solution:** Must redeploy after adding variables

### ❌ Mistake 2: Wrong Environment
**Problem:** Variable only set for "Production"  
**Solution:** Check all 3: Production, Preview, Development

### ❌ Mistake 3: Typos in Variable Names
**Problem:** Variable name spelled wrong  
**Solution:** Copy-paste exact names from this doc

### ❌ Mistake 4: Extra Spaces
**Problem:** `" my_cloud_name "` (spaces before/after)  
**Solution:** Trim spaces: `"my_cloud_name"`

### ❌ Mistake 5: Using Quotes
**Problem:** `"'my_value'"` (quotes in the value)  
**Solution:** Just the value: `my_value`

---

## 📝 Verification Steps

After adding all variables and redeploying:

```
✅ POD Upload Test:
   → Go to /pod
   → Try uploading image
   → Should work without errors

✅ Order Email Test:
   → Add item to cart
   → Complete checkout
   → Check email inbox
   → Should receive confirmation

✅ Analytics Test:
   → Visit site
   → Check GA realtime report
   → Should see your visit (already working ✓)
```

---

## 🚀 Quick Setup Summary

```bash
# 1. Cloudinary Setup (15 min)
   → Create account at cloudinary.com
   → Get cloud name
   → Create unsigned upload preset
   → Add 2 variables to Vercel
   → Redeploy

# 2. EmailJS Setup (15 min)
   → Create account at emailjs.com
   → Add email service (Gmail, etc)
   → Create email template
   → Get service ID, user ID, template ID
   → Add 3 variables to Vercel
   → Redeploy

# 3. Test Everything (10 min)
   → POD upload
   → Regular order
   → Email delivery
   → Analytics tracking

Total time: ~40 minutes for full setup
```

---

## 📚 Detailed Guides

For step-by-step instructions with screenshots:

- **Cloudinary:** See `CLOUDINARY_SETUP_GUIDE.md`
- **EmailJS:** See `SETUP_INSTRUCTIONS.md` or `README.md`
- **Full Setup:** See `QUICK_START.md`

---

## ✅ Success Checklist

Mark off when complete:

- [ ] Cloudinary cloud name added
- [ ] Cloudinary upload preset added
- [ ] Site redeployed
- [ ] POD upload tested
- [ ] EmailJS service ID added
- [ ] EmailJS user ID added
- [ ] EmailJS template ID added
- [ ] Site redeployed again
- [ ] Order email tested
- [ ] All features working

---

**Current Status:** 🔴 Cloudinary missing - Fix this first!  
**Estimated Time:** 15 minutes to fix  
**See:** `CLOUDINARY_SETUP_GUIDE.md` for detailed steps

