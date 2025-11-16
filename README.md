# Coobraa - Premium Clothing & Print-On-Demand

A modern Next.js 14 e-commerce website featuring both a traditional online store and a custom Print-On-Demand (POD) service.

## 🚀 Features

- **Clothing Store**: Browse and shop premium clothing products
- **Print-On-Demand Service**: Custom product design workflow
- **Cloudinary Integration**: Unsigned image uploads for user designs
- **EmailJS Integration**: Automated order confirmation emails
- **Minimal Black & White Design**: Clean, modern UI with Tailwind CSS
- **Fully Responsive**: Mobile-first design approach
- **Next.js 14 App Router**: Modern React Server Components
- **Ready for Vercel Deployment**: Optimized for production

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Image Uploads**: Cloudinary
- **Email Service**: EmailJS
- **Deployment**: Vercel-ready

## 🛠️ Installation

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd coobraa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` with your actual credentials (see below).

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables Setup

### Cloudinary Configuration

1. **Sign up for Cloudinary** at [https://cloudinary.com](https://cloudinary.com)
2. **Create an unsigned upload preset**:
   - Go to Settings → Upload
   - Scroll to "Upload presets"
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned"
   - Save the preset name

3. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
   ```

### EmailJS Configuration

1. **Sign up for EmailJS** at [https://www.emailjs.com](https://www.emailjs.com)

2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
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
   - Note your Template ID

4. **Get your Public Key**:
   - Go to Account → General
   - Copy your Public Key (User ID)

5. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
   ```

6. **Update business email**:
   - Edit `src/lib/emailjs.js`
   - Change line 32: `to_email: 'your-business-email@example.com'`

## 📂 Project Structure

```
coobraa/
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout with navigation
│   │   ├── page.jsx                # Homepage
│   │   ├── globals.css             # Global styles
│   │   ├── pod/
│   │   │   └── page.jsx            # POD workflow page
│   │   └── products/
│   │       └── [slug]/
│   │           └── page.jsx        # Product detail pages
│   ├── components/
│   │   ├── Hero.jsx                # Hero section component
│   │   ├── ProductCard.jsx         # Product card component
│   │   └── PodUploadForm.jsx       # Complete POD form
│   └── lib/
│       ├── cloudinary.js           # Cloudinary upload utilities
│       └── emailjs.js              # EmailJS integration
├── public/                          # Static assets
├── .env.local.example              # Environment variables template
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accents**: Grey shades

### Typography
- Clean, modern sans-serif fonts
- Large spacing for readability
- Bold headings for impact

### Components
- Rounded corners (8px - 16px)
- Minimal borders and shadows
- Hover states for interactivity

## 🔄 POD Workflow

The Print-On-Demand feature includes a 5-step process:

1. **Select Product Type**: Hoodie, T-shirt, Cap, Tote Bag, or Shorts
2. **Choose Size**: S, M, L, XL options
3. **Pick Color**: Black, White, or Grey
4. **Upload Design**: Client-side upload to Cloudinary with live preview
5. **Enter Details**: Shipping information and checkout

### Payment Method
- **Cash on Delivery (COD)** only
- Order confirmation sent via EmailJS
- Manual order processing

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

### Environment Variables on Vercel

Make sure to add all environment variables in Vercel's project settings:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_USER_ID`

## 📝 Customization

### Adding Products

Edit `src/app/page.jsx` to modify the product list:
```javascript
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: 'Your Product Name',
    price: 49.99,
    image: '/path/to/image.jpg',
    slug: 'product-slug',
  },
  // Add more products...
];
```

### Styling Changes

- **Colors**: Edit `tailwind.config.js`
- **Global Styles**: Edit `src/app/globals.css`
- **Component Styles**: Use Tailwind classes inline

### EmailJS Template

Example template structure:
```
New Order from {{customer_name}}

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Address: {{customer_address}}

Order Details:
- Product: {{product_type}}
- Size: {{product_size}}
- Color: {{product_color}}

Design URL: {{design_url}}

Notes: {{order_notes}}
Order Date: {{order_date}}
```

## 🐛 Troubleshooting

### Cloudinary Upload Fails
- Verify your cloud name and upload preset are correct
- Ensure the upload preset is set to "Unsigned"
- Check browser console for errors

### EmailJS Not Sending
- Verify all environment variables are set correctly
- Check EmailJS dashboard for service status
- Ensure template variables match the ones in code
- Check browser console for errors

### Images Not Loading
- Verify Cloudinary domain is added to `next.config.mjs`
- Check that image URLs are valid
- Clear Next.js cache: `rm -rf .next`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js 14 and Tailwind CSS

