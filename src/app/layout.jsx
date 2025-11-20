import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { ToastProvider } from '@/context/ToastContext'
import Navbar from '@/components/Navbar'
import Toast from '@/components/Toast'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: 'Coobraa - Premium Clothing & Custom Print-On-Demand',
  description: 'Shop premium clothing or create your own custom designs with Coobraa POD service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <GoogleAnalytics />
        <ToastProvider>
          <CartProvider>
            <Navbar />
            <Toast />
            {children}
            <footer className="border-t border-gray-200 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">COOBRAA</h3>
                  <p className="text-gray-600 mb-6">
                    Premium clothing and custom print-on-demand services.
                  </p>
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Coobraa. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  )
}

