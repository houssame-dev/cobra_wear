# EmailJS Template Update Guide - Fix Clickable Links

**Issue**: Design download button not clickable in emails  
**Solution**: Update EmailJS template to use proper HTML links

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Login to EmailJS
1. Go to: https://dashboard.emailjs.com/
2. Login with your account
3. Click on **"Email Templates"** in the left sidebar

### Step 2: Find Your POD Template
1. Look for your POD template (the one you use for `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`)
2. Click **"Edit"** on that template

### Step 3: Update the Template
1. **Select All** the existing HTML code in the template editor
2. **Delete** everything
3. **Open** the file `EMAILJS_POD_TEMPLATE.html` from your project
4. **Copy** all the content from that file
5. **Paste** it into the EmailJS template editor

### Step 4: Save & Test
1. Click **"Save"** at the bottom
2. Click **"Test It"** to preview
3. Make sure all variables show up correctly:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{product_type}}`
   - `{{design_url}}` (most important!)

### Step 5: Verify
1. Place a test order on your site
2. Check the email you receive
3. The design URLs should now be **clickable links**

---

## ✅ What Changed

### Before (Not Working):
```html
<button>Download Design File</button>
```
❌ Not clickable in emails

### After (Working):
```html
<div style="white-space: pre-line;">
  {{design_url}}
</div>
```
✅ URLs are clickable links

---

## 📧 How URLs Will Appear

The email will show:

```
🎨 Customer Design Files

The customer has uploaded custom design files. Click any link below to view and download:

1. front: https://res.cloudinary.com/.../design1.png

2. back: https://res.cloudinary.com/.../design2.png

3. left Sleeve: https://res.cloudinary.com/.../design3.png
```

Each URL will be **clickable** and open in a new tab.

---

## 🎨 Template Features

The new template includes:
- ✅ Clean, professional design
- ✅ Black and white theme matching your brand
- ✅ All order details clearly displayed
- ✅ **Clickable design file links**
- ✅ Mobile-responsive layout
- ✅ Easy to read and print

---

## 🔧 If You Want to Customize

You can edit the template after pasting:

### Change Colors:
```html
<!-- Black header -->
<div style="background-color: #000000; color: #ffffff;">

<!-- Change to your brand color -->
<div style="background-color: #YOUR_COLOR; color: #ffffff;">
```

### Change Fonts:
```html
font-family: Arial, sans-serif;

<!-- Change to -->
font-family: 'Your Font', Arial, sans-serif;
```

---

## 📋 Required Variables

Make sure these variables are in your template:
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{customer_address}}`
- `{{product_type}}`
- `{{product_size}}`
- `{{product_color}}`
- `{{design_url}}` ← **Most important!**
- `{{order_notes}}`
- `{{order_date}}`

---

## 🧪 Testing

After updating:

1. **Send a test email** from EmailJS dashboard
2. **Place a real order** on your site
3. **Check the email**
4. **Click the design URLs** - they should open in browser
5. **Right-click URLs** - should allow "Save link as..."

---

## ⚠️ Troubleshooting

### Links still not clickable?
- Make sure you saved the template
- Clear your email cache
- Try opening email in different client (Gmail, Outlook)

### URLs showing as plain text?
- Check that `white-space: pre-line` is in the style
- Make sure EmailJS is receiving the `design_url` parameter

### Variables not showing?
- Check that variable names match exactly: `{{design_url}}`
- Test from EmailJS dashboard first

---

## 📞 Need Help?

If you run into issues:
1. Check that your environment variables are set correctly
2. Verify the template is saved in EmailJS
3. Make sure you're using the correct template ID

---

## ✅ Checklist

- [ ] Logged into EmailJS dashboard
- [ ] Found the correct POD template
- [ ] Copied the new template from `EMAILJS_POD_TEMPLATE.html`
- [ ] Pasted into EmailJS editor
- [ ] Saved the template
- [ ] Tested with "Test It" button
- [ ] Placed a real test order
- [ ] Verified links are clickable
- [ ] Successfully downloaded design files

---

**Once complete, all design file URLs will be clickable in your order emails!** 🎉

