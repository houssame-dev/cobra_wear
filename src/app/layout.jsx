import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { ToastProvider } from '@/context/ToastContext'
import { WishlistProvider } from '@/context/WishlistContext'
import Navbar from '@/components/Navbar'
import Toast from '@/components/Toast'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: 'Cobra Wear - Premium Clothing & Custom Print-On-Demand',
  description: 'Shop premium clothing or create your own custom designs with Cobra Wear POD service.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <GoogleAnalytics />
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />
              <Toast />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  )
}

