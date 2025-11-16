# Coobraa Setup Instructions

## Quick Start Guide

Follow these steps to get your Coobraa website up and running.

---

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Wait for all packages to be installed.

---

## Step 2: Configure Cloudinary

### Create a Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. After logging in, you'll see your **Dashboard**

### Create Unsigned Upload Preset

1. Click on **Settings** (gear icon in top right)
2. Go to the **Upload** tab
3. Scroll down to **Upload presets**
4. Click **Add upload preset**
5. Configure:
   - **Signing Mode**: Select **Unsigned**
   - **Upload preset name**: Choose a name (e.g., "coobraa_uploads")
   - Keep other settings as default
6. Click **Save**

### Get Your Credentials

From your Cloudinary Dashboard:
- **Cloud Name**: Found at the top of your dashboard (e.g., "your-cloud-name")
- **Upload Preset**: The name you just created (e.g., "coobraa_uploads")

---

## Step 3: Configure EmailJS

### Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Log in to your dashboard

### Add Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - For Gmail:
     - Click **Gmail**
     - Connect your Gmail account
     - Give the service a name
     - Click **Create Service**
4. Copy your **Service ID** (e.g., "service_xxxxxxx")

### Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Configure the template:

**Subject Line:**
```
New POD Order from {{customer_name}}
```

**Template Content:**
```
Hello,

You have received a new Print-On-Demand order!

=== CUSTOMER INFORMATION ===
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Address: {{customer_address}}

=== ORDER DETAILS ===
Product Type: {{product_type}}
Size: {{product_size}}
Color: {{product_color}}

=== DESIGN ===
Design URL: {{design_url}}
(Click the URL to download the customer's design)

=== ADDITIONAL NOTES ===
{{order_notes}}

=== ORDER INFO ===
Order Date: {{order_date}}
Payment Method: Cash on Delivery

---
This is an automated email from your Coobraa POD system.
```

4. Click **Save**
5. Copy your **Template ID** (e.g., "template_xxxxxxx")

### Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find and copy your **Public Key** (also called User ID)
   - It looks like: "your_public_key_xxxxxxxxx"

---

## Step 4: Set Up Environment Variables

1. Copy the example environment file:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` in your text editor

3. Fill in your credentials:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=coobraa_uploads

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key_xxxxxxxxx
```

4. Save the file

---

## Step 5: Update Business Email

1. Open `src/lib/emailjs.js`
2. Find line 32
3. Change `'your-business-email@example.com'` to your actual email:

```javascript
to_email: 'yourbusiness@gmail.com', // Your actual email here
```

4. Save the file

---

## Step 6: Run the Development Server

```bash
npm run dev
```

Your site should now be running at [http://localhost:3000](http://localhost:3000)

---

## Step 7: Test the POD System

1. Go to [http://localhost:3000/pod](http://localhost:3000/pod)
2. Follow the steps:
   - Select a product type
   - Choose size
   - Pick color
   - Upload a test image
   - Fill in shipping details
   - Submit the order

3. Check your email - you should receive the order notification!

---

## Step 8: Deploy to Vercel (Optional)

### Prerequisites
- GitHub account
- Vercel account

### Steps

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial Coobraa setup"
git branch -M main
git remote add origin https://github.com/yourusername/coobraa.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click **New Project**
   - Import your GitHub repository
   - In **Environment Variables**, add all variables from `.env.local`:
     - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
     - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_USER_ID`
   - Click **Deploy**

3. Wait for deployment to complete (usually 1-2 minutes)

4. Your site is now live! 🎉

---

## Troubleshooting

### Uploads Not Working
- ✅ Check Cloudinary preset is set to "Unsigned"
- ✅ Verify cloud name and preset name are correct in `.env.local`
- ✅ Check browser console for errors

### Emails Not Sending
- ✅ Verify all EmailJS IDs are correct
- ✅ Make sure you connected your email service in EmailJS dashboard
- ✅ Check the template variables match the ones in the code
- ✅ Look at browser console for error messages

### Page Not Loading
- ✅ Make sure all dependencies are installed (`npm install`)
- ✅ Restart the development server
- ✅ Clear browser cache
- ✅ Delete `.next` folder and run `npm run dev` again

---

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Restart the development server
4. Check that all services (Cloudinary, EmailJS) are properly configured

---

## Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the color scheme.

### Add More Products
Edit `src/app/page.jsx` and add products to the `SAMPLE_PRODUCTS` array.

### Modify POD Options
Edit `src/components/PodUploadForm.jsx` to change product types, sizes, or colors.

---

Happy selling! 🚀

