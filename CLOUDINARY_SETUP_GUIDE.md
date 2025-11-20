# Cloudinary Setup Guide - Fix Upload Error

## 🔴 Current Problem

**Error:** `Cloudinary configuration missing. Please check your environment variables.`

**Cause:** The Cloudinary environment variables are not set in Vercel.

**Impact:** POD (Print-On-Demand) image uploads will not work until this is fixed.

---

## ✅ Step-by-Step Solution

### Step 1: Create Cloudinary Account (5 minutes)

1. Go to **[https://cloudinary.com](https://cloudinary.com)**
2. Click **"Sign Up Free"**
3. Fill in your details:
   - Email
   - Password
   - Choose **"I'm a developer"** or **"I'm building a website"**
4. Verify your email
5. Log in to your dashboard

---

### Step 2: Get Your Cloud Name (1 minute)

1. After logging in, you'll see your **Dashboard**
2. Look at the top - you'll see:
   ```
   Account Details
   Cloud name: your_cloud_name_here
   ```
3. **Copy this Cloud Name** - you'll need it!

**Example:** If it shows `dxyz1234`, that's your cloud name.

---

### Step 3: Create Unsigned Upload Preset (3 minutes)

**Why?** This allows your website to upload images directly from the browser securely.

1. In Cloudinary dashboard, click **Settings** (⚙️ icon, top-right)
2. Go to the **"Upload"** tab
3. Scroll down to **"Upload presets"** section
4. Click **"Add upload preset"**
5. Configure the preset:
   
   **Required Settings:**
   - **Upload preset name**: Choose a name (e.g., `coobraa_pod_uploads`)
   - **Signing Mode**: Select **"Unsigned"** ⚠️ IMPORTANT!
   - **Folder**: (optional) You can set it to `pod_designs` to organize uploads
   
   **Optional Settings:**
   - **Use filename**: Enable if you want to preserve original filenames
   - **Unique filename**: Enable to prevent name conflicts
   - **Overwrite**: Usually leave disabled
   
6. Click **"Save"**
7. **Copy the preset name** you just created

---

### Step 4: Add Environment Variables to Vercel (5 minutes)

Now add these credentials to Vercel:

#### Method A: Via Vercel Dashboard (Recommended)

1. Go to **[https://vercel.com](https://vercel.com)**
2. Select your **"cobrawear"** project (or your project name)
3. Click **"Settings"** (top navigation)
4. Click **"Environment Variables"** (left sidebar)
5. Add the following variables:

**Variable 1:**
```
Name: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
Value: [paste your cloud name here]
Environment: Production, Preview, Development (check all 3)
```

**Variable 2:**
```
Name: NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
Value: [paste your upload preset name here]
Environment: Production, Preview, Development (check all 3)
```

6. Click **"Save"** for each variable

#### Method B: Via Vercel CLI (Alternative)

```bash
# In your project directory
vercel env add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
# Paste your cloud name when prompted

vercel env add NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
# Paste your preset name when prompted
```

---

### Step 5: Redeploy Your Site (CRITICAL!)

**⚠️ Important:** Environment variables only take effect after redeployment!

#### Option A: Trigger Redeploy from Vercel Dashboard

1. In Vercel dashboard, go to your project
2. Click **"Deployments"** tab
3. Click the **"..."** menu on the latest deployment
4. Click **"Redeploy"**
5. Confirm the redeploy

#### Option B: Push a Commit to GitHub

```bash
# Make any small change or create empty commit
git commit --allow-empty -m "Redeploy for Cloudinary env vars"
git push
```

**Wait 2-3 minutes** for deployment to complete.

---

### Step 6: Test the Upload Feature (2 minutes)

1. Go to your live site: **https://cobrawear.vercel.app/pod**
2. Follow the POD steps until you reach the upload page
3. Try uploading an image
4. ✅ If it works: You're done!
5. ❌ If you still see errors: Check troubleshooting below

---

## 🔍 Verification Checklist

Before testing, verify:

- [ ] Cloudinary account created and verified
- [ ] Cloud name copied correctly (no spaces)
- [ ] Upload preset created with **"Unsigned"** mode
- [ ] Upload preset name copied correctly
- [ ] Both environment variables added to Vercel
- [ ] Variables applied to **Production** environment
- [ ] Site redeployed after adding variables
- [ ] Waited 2-3 minutes for deployment to complete

---

## 🐛 Troubleshooting

### Issue 1: Still Getting "Configuration Missing" Error

**Solution:**
1. Check Vercel environment variables are saved
2. Verify deployment completed successfully
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for new errors

### Issue 2: "Upload preset not found" Error

**Cause:** Upload preset name is incorrect or not set to Unsigned mode.

**Solution:**
1. Go back to Cloudinary Settings → Upload
2. Find your preset
3. Verify **"Signing Mode"** is set to **"Unsigned"**
4. Copy the exact preset name (case-sensitive!)
5. Update in Vercel environment variables
6. Redeploy

### Issue 3: "CORS Error" or "Network Error"

**Cause:** Cloudinary security settings blocking requests.

**Solution:**
1. In Cloudinary: Settings → Security
2. Find **"Allowed fetch domains"**
3. Add your domain: `cobrawear.vercel.app`
4. Click Save
5. Wait 5 minutes for changes to propagate

### Issue 4: Upload Works Locally but Not in Production

**Cause:** Environment variables set locally but not in Vercel.

**Solution:**
1. Local `.env.local` ≠ Vercel environment variables
2. Must add separately to Vercel dashboard
3. Always redeploy after adding variables

---

## 📋 Quick Reference

### Your Cloudinary Configuration

Once set up, your configuration looks like:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=coobraa_pod_uploads
```

### Where to Find Your Credentials

| Credential | Location in Cloudinary |
|------------|------------------------|
| **Cloud Name** | Dashboard → Top of page |
| **Upload Preset** | Settings → Upload → Upload presets |

### Vercel Environment Variables Location

```
Vercel Dashboard → Your Project → Settings → Environment Variables
```

---

## 🎯 Expected Behavior After Setup

### Upload Flow (User Perspective)

1. User goes to `/pod` page
2. Selects product, size, color
3. Clicks "Upload Design" button
4. Selects image file from computer
5. ✅ **Image uploads to Cloudinary**
6. ✅ **Live preview shows uploaded image**
7. ✅ **Continue to shipping details**

### What Happens Behind the Scenes

```
1. User selects file
2. JavaScript reads file
3. Creates FormData with file + preset
4. POSTs to Cloudinary API: 
   https://api.cloudinary.com/v1_1/{cloud_name}/image/upload
5. Cloudinary returns secure URL
6. URL saved with order
7. Email notification includes image link
```

---

## 💡 Pro Tips

### Security Best Practices

✅ **DO:**
- Use unsigned upload preset for client-side uploads
- Set folder paths in preset to organize uploads
- Enable unique filenames to prevent overwrites
- Monitor your Cloudinary usage (free tier: 25GB storage, 25GB bandwidth/month)

❌ **DON'T:**
- Share your upload preset name publicly (though it's relatively safe)
- Use signed uploads from client-side (requires API secret)
- Store API secrets in `NEXT_PUBLIC_` variables

### Optimization Options

In your Cloudinary preset, you can:
- **Auto-format**: Automatically serve WebP/AVIF for better performance
- **Auto-quality**: Optimize file size while maintaining quality
- **Max dimensions**: Limit upload size (e.g., 2000x2000px)
- **Allowed formats**: Restrict to JPG, PNG, WebP only

### Cost Management

Free tier includes:
- 25 GB storage
- 25 GB bandwidth/month
- 25,000 transformations/month

**Monitor usage at:** Cloudinary Dashboard → Usage

---

## 📊 Testing Checklist

After setup, test:

- [ ] Upload JPG image (most common)
- [ ] Upload PNG image (transparent backgrounds)
- [ ] Upload large file (>5MB)
- [ ] Check image appears in Cloudinary dashboard
- [ ] Verify preview works on website
- [ ] Submit test POD order
- [ ] Check email includes correct image URL
- [ ] Click image URL in email to verify it loads

---

## 🚀 Next Steps

After Cloudinary is working:

1. **Add more environment variables:**
   - EmailJS credentials (for order notifications)
   - Google Analytics ID (already done ✅)

2. **Test complete flow:**
   - POD order with image upload
   - Regular product order
   - Cart functionality

3. **Monitor your dashboard:**
   - Cloudinary: Watch upload usage
   - Vercel: Check deployment logs
   - Analytics: Track user behavior

---

## 🆘 Still Having Issues?

If you're still stuck after following this guide:

1. **Check browser console** for exact error message
2. **Check Vercel deployment logs** for server-side errors
3. **Verify in Cloudinary dashboard** that upload preset exists
4. **Test API directly** using curl or Postman
5. **Double-check spelling** of environment variable names

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ No console errors about "Cloudinary configuration missing"
2. ✅ Image upload button works on `/pod` page
3. ✅ Preview shows uploaded image
4. ✅ Image appears in Cloudinary Media Library
5. ✅ Order email contains working image URL

---

**Good luck! This should take about 15 minutes total to complete.** 🚀

