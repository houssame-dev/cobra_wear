'use client';

/**
 * POD Upload Form Component
 * Complete Print-On-Demand workflow with:
 * - Product selection
 * - Size and color selection
 * - File upload with Cloudinary
 * - Live preview
 * - Shipping details form
 * - EmailJS order submission
 */

import { useState } from 'react';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { sendOrderEmail } from '@/lib/emailjs';

const PRODUCT_TYPES = ['Hoodie', 'T-shirt', 'Cap', 'Tote Bag', 'Shorts'];
const SIZES = ['S', 'M', 'L', 'XL'];
const COLORS = ['Black', 'White', 'Grey'];

export default function PodUploadForm() {
  // Form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productType: 'Hoodie',
    size: 'M',
    color: 'Black',
    designUrl: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
  });

  // UI state
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setUploadError('Please select a valid image file');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be less than 10MB');
        return;
      }
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadError('');
    }
  };

  // Upload to Cloudinary
  const handleUploadToCloudinary = async () => {
    if (!uploadedFile) {
      setUploadError('Please select a file first');
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      const result = await uploadToCloudinary(uploadedFile);
      setFormData((prev) => ({ ...prev, designUrl: result.url }));
      setStep(5); // Move to shipping details
    } catch (error) {
      setUploadError('Failed to upload image. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.designUrl) {
      alert('Please upload a design first');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendOrderEmail(formData);
      setSubmitSuccess(true);
      setStep(6); // Success screen
    } catch (error) {
      alert('Failed to submit order. Please try again.');
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setStep(1);
    setFormData({
      productType: 'Hoodie',
      size: 'M',
      color: 'Black',
      designUrl: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      customerAddress: '',
      notes: '',
    });
    setUploadedFile(null);
    setPreviewUrl('');
    setSubmitSuccess(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNum
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 5 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step > stepNum ? 'bg-black' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Product</span>
          <span>Size</span>
          <span>Color</span>
          <span>Design</span>
          <span>Details</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        {/* Step 1: Product Type */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Select Product Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {PRODUCT_TYPES.map((product) => (
                <button
                  key={product}
                  onClick={() => {
                    handleChange('productType', product);
                    setStep(2);
                  }}
                  className={`p-6 border-2 rounded-lg font-semibold transition-all ${
                    formData.productType === product
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Size */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Select Size</h2>
            <div className="grid grid-cols-4 gap-4">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    handleChange('size', size);
                    setStep(3);
                  }}
                  className={`p-6 border-2 rounded-lg font-semibold text-xl transition-all ${
                    formData.size === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-gray-600 hover:text-black"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Color */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Select Color</h2>
            <div className="grid grid-cols-3 gap-4">
              {COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    handleChange('color', color);
                    setStep(4);
                  }}
                  className={`p-8 border-2 rounded-lg font-semibold transition-all ${
                    formData.color === color
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-3 border-2 ${
                      color === 'Black'
                        ? 'bg-black'
                        : color === 'White'
                        ? 'bg-white border-gray-300'
                        : 'bg-gray-400'
                    }`}
                  ></div>
                  {color}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-gray-600 hover:text-black"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Upload Design & Preview */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Upload Your Design</h2>
            
            {/* File Upload */}
            <div>
              <label className="block mb-2 font-medium">
                Choose your design file
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer"
              />
              <p className="mt-2 text-sm text-gray-500">
                Supported formats: JPG, PNG, SVG (Max 10MB)
              </p>
            </div>

            {uploadError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {uploadError}
              </div>
            )}

            {/* Live Preview */}
            {previewUrl && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Preview</h3>
                <div className="relative bg-gray-100 rounded-lg p-8">
                  <div
                    className={`w-64 h-80 mx-auto rounded-lg relative ${
                      formData.color === 'Black'
                        ? 'bg-black'
                        : formData.color === 'White'
                        ? 'bg-white border-2 border-gray-300'
                        : 'bg-gray-400'
                    }`}
                  >
                    {/* Design overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={previewUrl}
                        alt="Design preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-center mt-4 font-medium">
                    {formData.productType} - {formData.size} - {formData.color}
                  </p>
                </div>
                
                <button
                  onClick={handleUploadToCloudinary}
                  disabled={isUploading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? 'Uploading...' : 'Continue to Shipping Details'}
                </button>
              </div>
            )}

            <button
              onClick={() => setStep(3)}
              className="text-gray-600 hover:text-black"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 5: Shipping Details */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold">Shipping Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => handleChange('customerName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.customerEmail}
                  onChange={(e) => handleChange('customerEmail', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.customerPhone}
                  onChange={(e) => handleChange('customerPhone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Shipping Address *
                </label>
                <textarea
                  required
                  value={formData.customerAddress}
                  onChange={(e) => handleChange('customerAddress', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Any special instructions..."
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Product:</span>
                  <span className="font-medium">{formData.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium">{formData.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Color:</span>
                  <span className="font-medium">{formData.color}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment:</span>
                  <span className="font-medium">Cash on Delivery</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="btn-secondary flex-1"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Place Order (COD)'}
              </button>
            </div>
          </form>
        )}

        {/* Step 6: Success */}
        {step === 6 && submitSuccess && (
          <div className="text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Order Placed Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Thank you for your order!
              <br /><br />
              We'll contact you soon to confirm your order.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="font-bold mb-4">Order Details</h3>
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span>Product:</span>
                  <span className="font-medium">{formData.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium">{formData.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Color:</span>
                  <span className="font-medium">{formData.color}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment:</span>
                  <span className="font-medium">Cash on Delivery</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={resetForm} className="btn-primary">
                Place Another Order
              </button>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

