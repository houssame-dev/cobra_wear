'use client';

/**
 * Checkout Page
 * Order form and confirmation
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import CartSummary from '@/components/CartSummary';
import { sendRegularOrderEmail } from '@/lib/order-email';
import { sendCustomerOrderConfirmation } from '@/lib/customer-email';
import { validateForm, commonRules } from '@/lib/validation';
import { trackPurchase } from '@/lib/analytics';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, getCartTotal, getCartItemsCount } = useCart();
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0 && !isSubmitting) {
      router.push('/cart');
    }
  }, [cart.length, isSubmitting, router]);

  // Show loading while redirecting
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to cart...</p>
        </div>
      </main>
    );
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});

    // Validate form
    const validation = validateForm(formData, commonRules);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderInfo = {
        ...formData,
        items: cart,
      };

      // Send order email to business
      await sendRegularOrderEmail(orderInfo);

      // Send confirmation email to customer (non-blocking)
      sendCustomerOrderConfirmation(orderInfo).catch(err => {
        console.error('Failed to send customer confirmation:', err);
        // Don't block the order - just log the error
      });

      // Track purchase in analytics
      const subtotal = getCartTotal();
      const shipping = subtotal > 100 ? 0 : 10;
      trackPurchase({ total: subtotal + shipping });

      // Clear cart
      clearCart();

      // Show success message
      toast.success('Order placed successfully! Check your email for confirmation.');

      // Redirect to success page
      setTimeout(() => {
        router.push('/checkout/success');
      }, 500);
    } catch (err) {
      console.error('Order submission error:', err);
      toast.error('Failed to submit order. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in">
            Checkout
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Complete your order
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Shipping Information</h2>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="customer-name" className="block mb-2 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => handleChange('customerName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-black ${
                      fieldErrors.customerName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!fieldErrors.customerName}
                    aria-describedby={fieldErrors.customerName ? 'name-error' : undefined}
                  />
                  {fieldErrors.customerName && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {fieldErrors.customerName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="customer-email" className="block mb-2 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-email"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => handleChange('customerEmail', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-black ${
                      fieldErrors.customerEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                    aria-invalid={!!fieldErrors.customerEmail}
                    aria-describedby={fieldErrors.customerEmail ? 'email-error' : undefined}
                  />
                  {fieldErrors.customerEmail && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {fieldErrors.customerEmail}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="customer-phone" className="block mb-2 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => handleChange('customerPhone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-black ${
                      fieldErrors.customerPhone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 234 567 8900"
                    aria-invalid={!!fieldErrors.customerPhone}
                    aria-describedby={fieldErrors.customerPhone ? 'phone-error' : undefined}
                  />
                  {fieldErrors.customerPhone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {fieldErrors.customerPhone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="customer-address" className="block mb-2 font-medium">
                    Shipping Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    value={formData.customerAddress}
                    onChange={(e) => handleChange('customerAddress', e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-black resize-none ${
                      fieldErrors.customerAddress ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Street address, City, State, ZIP Code"
                    aria-invalid={!!fieldErrors.customerAddress}
                    aria-describedby={fieldErrors.customerAddress ? 'address-error' : undefined}
                  />
                  {fieldErrors.customerAddress && (
                    <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">
                      {fieldErrors.customerAddress}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="order-notes" className="block mb-2 font-medium">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    id="order-notes"
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                    placeholder="Any special instructions for your order..."
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-1">
                      Payment Method: Cash on Delivery
                    </h3>
                    <p className="text-sm text-yellow-700">
                      You'll pay when you receive your order. We'll contact you to confirm delivery details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing Order...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary showCheckoutButton={false} />

            {/* Order Items Preview */}
            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Order Items ({getCartItemsCount()})</h3>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex justify-between text-sm">
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-600 text-xs">
                        {item.selectedSize} • {item.selectedColor} • Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

